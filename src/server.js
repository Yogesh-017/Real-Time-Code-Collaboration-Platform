const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');
const db = require("./db");
const bcrypt = require("bcryptjs");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: { origin: "*", methods: ["GET", "POST"] }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// ✅ USER REGISTRATION (SIGN UP) - FIXED
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Database error" });
            }

            if (result.length > 0) {
                return res.status(400).json({ error: "Email already exists" });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert user
            db.query(
                "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
                [username, email, hashedPassword],
                (err, result) => {
                    if (err) {
                        return res.status(500).json({ error: "Registration failed" });
                    }
                    res.status(201).json({
                        message: "User registered successfully",
                        user_id: result.insertId
                    });
                }
            );
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ USER LOGIN - FIXED
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
    }

    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }

        if (result.length === 0) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const user = result[0];
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        res.json({
            message: "Login successful",
            user_id: user.id,
            username: user.username
        });
    });
});

// Room management
const rooms = {};

// Socket.IO connections
io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    // Track which room this socket is in
    socket.currentRoom = null;
    socket.username = null;

    // Join a room
    socket.on('joinRoom', ({ roomId, username }) => {
        socket.currentRoom = roomId;
        socket.username = username || 'Anonymous';

        // Create room if it doesn't exist
        if (!rooms[roomId]) {
            rooms[roomId] = {
                users: [],
                code: '// Welcome to ByteSync! 🚀\n// Start coding and collaborate in real-time.\n\nconsole.log("Hello, ByteSync!");\n'
            };
        }

        // Add user to room
        rooms[roomId].users.push(socket.username);
        socket.join(roomId);

        console.log(`${socket.username} joined room: ${roomId}`);

        // Send current code to new user
        socket.emit('codeUpdate', { code: rooms[roomId].code });

        // Notify all users in room about updated user list
        io.to(roomId).emit('updateUsers', { users: rooms[roomId].users });
    });

    // Handle code changes
    socket.on('codeChange', ({ roomId, code }) => {
        if (rooms[roomId]) {
            rooms[roomId].code = code;
            // Broadcast to all other users in the room
            socket.to(roomId).emit('codeUpdate', { code });
        }
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);

        if (socket.currentRoom && rooms[socket.currentRoom]) {
            // Remove user from room
            const room = rooms[socket.currentRoom];
            const index = room.users.indexOf(socket.username);
            if (index > -1) {
                room.users.splice(index, 1);
            }

            // Notify remaining users
            io.to(socket.currentRoom).emit('updateUsers', { users: room.users });

            // Clean up empty rooms
            if (room.users.length === 0) {
                delete rooms[socket.currentRoom];
                console.log(`Room ${socket.currentRoom} deleted (empty)`);
            }
        }
    });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`🚀 ByteSync server running on port ${PORT}`);
    console.log(`📝 Open http://localhost:${PORT} in your browser`);
});
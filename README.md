<div align="center">

<h1>✨ Real-Time Code Collaboration Platform</h1>

<p>
<strong>Code Together. Instantly. Seamlessly.</strong>
</p>

<p>
<a href="https://www.google.com/search?q=https://github.com/Yogesh-017/Real-Time-Code-Collaboration-Platform/issues"><img src="https://www.google.com/search?q=https://img.shields.io/github/issues/Yogesh-017/Real-Time-Code-Collaboration-Platform%3Fstyle%3Dfor-the-badge%26logo%3Dgithub%26color%3D252525" alt="Issues"></a>
<a href="https://www.google.com/search?q=https://github.com/Yogesh-017/Real-Time-Code-Collaboration-Platform/stargazers"><img src="https://www.google.com/search?q=https://img.shields.io/github/stars/Yogesh-017/Real-Time-Code-Collaboration-Platform%3Fstyle%3Dfor-the-badge%26logo%3Dgithub%26color%3D252525" alt="Stars"></a>
<a href="https://www.google.com/search?q=https://github.com/Yogesh-017/Real-Time-Code-Collaboration-Platform/network/members"><img src="https://www.google.com/search?q=https://img.shields.io/github/forks/Yogesh-017/Real-Time-Code-Collaboration-Platform%3Fstyle%3Dfor-the-badge%26logo%3Dgithub%26color%3D252525" alt="Forks"></a>
</p>

<h3>
<a href="#-demo">View Demo</a>
<span> | </span>
<a href="#-installation">Installation</a>
<span> | </span>
<a href="#-features">Features</a>
</h3>
</div>

<br />

<!--
TIP: Take a screenshot of your app's home page, name it 'screenshot.png',
put it in your 'public' folder, and uncomment the line below!
-->

<!-- <img src="./public/screenshot.png" alt="Project Screenshot" width="100%"> -->

🚀 The Vision

"Distance should no longer be a barrier to collective coding."

This platform eliminates the friction of passive screen sharing. It creates a high-performance, shared virtual room where every participant has their own cursor and editor control. Whether for remote pair programming, technical interviews, or teaching, this tool provides a "Google Docs" experience specifically tailored for developers.

✨ Key Features

⚡ Instant Synchronization

Powered by Socket.io, every keystroke is synced across all connected clients with zero perceptible lag. The connection is persistent, bidirectional, and optimized for low latency.

🎨 Premium Glassmorphism UI

Designed with a philosophy of "Visual Excellence." The interface features a Premium Dark Mode aesthetic, utilizing translucent layers, frosted glass effects, and smooth CSS transitions to feel "alive."

👥 Ephemeral Collaboration Rooms

Instant Access: Generate a unique Room ID and share it.

No Setup: Zero configuration required for guests.

Live Presence: A dynamic sidebar tracks active users in real-time with unique avatars.

💻 Professional Editor Suite

Integrated with a heavy-duty code editor engine that supports:

Syntax Highlighting for multiple languages.

Auto-indentation and bracket matching.

Line numbering and error detection.

🛠️ Technology Stack

Component

Technology

Description

Frontend



Single-page application architecture for a snappy UX.

Styling



Vanilla CSS with extensive use of Backdrop Filter and Flexbox.

Real-time



Websockets for bi-directional event-based communication.

Backend



Handles room logic, API routes, and connection management.

Server



Lightweight framework for handling HTTP requests.

📦 Installation & Setup

Follow these steps to run the collaboration platform locally.

1. Clone the Repository

git clone [https://github.com/Yogesh-017/Real-Time-Code-Collaboration-Platform.git](https://github.com/Yogesh-017/Real-Time-Code-Collaboration-Platform.git)
cd Real-Time-Code-Collaboration-Platform


2. Install Dependencies

npm install


3. Environment Configuration

Create a .env file in the root directory (optional, if you have custom ports):

PORT=5000


4. Start the Server

npm run dev
# or
node server.js


The app will launch in your browser at http://localhost:5000.

📂 Project Structure

/
├── public/              # Static assets (HTML, Images, CSS)
├── src/
│   ├── Actions.js       # Socket event definitions
│   ├── server.js        # Main server entry point
│   └── components/      # React components (Editor, Sidebar)
├── .gitignore           # Ignored files
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation


🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

<div align="center">
<p>Made with ❤️ by Yogesh</p>
</div>

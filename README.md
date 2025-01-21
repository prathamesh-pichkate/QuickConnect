# QuickConnect

1. Project Overview
This project is a full-stack real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It features user authentication, real-time messaging, and online user status functionality. The application is styled using TailwindCSS and Daisy UI, with global state management implemented via Zustand.

2. Tech Stack
Frontend: React.js, TailwindCSS, Daisy UI
Backend: Node.js, Express.js, MongoDB
Real-Time Communication: Socket.io
State Management: Zustand
Authentication: JWT (JSON Web Tokens)
Error Handling: Centralized error handling for both client and server.
3. System Architecture
High-Level Architecture
Frontend: React.js application consumes the REST API and listens to Socket.io events for real-time updates.
Backend: Node.js and Express.js provide REST APIs and handle WebSocket connections using Socket.io.
Database: MongoDB stores user information, messages, and metadata.
Real-Time Communication: Socket.io is used for bidirectional communication between the client and server.
Architecture Diagram
plaintext
Copy
Edit
Client (React.js + Zustand) <---> REST APIs & Socket.io <---> Database (MongoDB)
4. Features
Core Features:
Authentication and Authorization: Secure login, signup, and JWT-based token management.
Real-Time Messaging: Send and receive messages instantly.
Online User Status: Display online/offline status of users in real-time.
Profile Management: Update user profiles.
Settings Page: Customizable user preferences.
Additional Features:
Global state management using Zustand.
Error handling for smooth user experience.
Fully responsive UI.
5. Installation & Setup
Prerequisites
Node.js (v14 or higher)
MongoDB (local or cloud-based)
Git
Steps
Clone the repository:
bash
Copy
Edit
git clone <repository_url>
cd project-directory
Install dependencies:
bash
Copy
Edit
npm install
cd client
npm install
cd ..
Configure environment variables:
Backend: Create a .env file in the root directory and configure:
env
Copy
Edit
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
Frontend: Add a .env file in the client directory:
env
Copy
Edit
REACT_APP_API_URL=http://localhost:5000
Start the development servers:
bash
Copy
Edit
npm run dev       # For backend
cd client && npm start  # For frontend

# Chat-App-using-Websocket.io

This is a simple chat app that lets people talk to each other in real time using WebSockets. It's built with Node.js on the server side and plain HTML/JavaScript on the client side.

## What It Does

- **Real-Time Messaging**: When someone sends a message, everyone else sees it right away without refreshing the page.
- **Online Users List**: Shows who is currently online in the chat.
- **Join/Leave Notifications**: Tells everyone when someone joins or leaves the chat.

## How It Works (Simple Explanation)

### Server Side (Backend)
- The server uses Node.js with Express to serve the web page and Socket.IO to handle real-time connections.
- When a user connects, the server remembers their name.
- When a user sends a message, the server sends it to all connected users.
- The server also updates the list of online users whenever someone joins or leaves.

### Client Side (Frontend)
- The web page has a chat box, a message input, and a list of online users.
- When you open the page, it asks for your name.
- Your browser connects to the server using WebSockets.
- When you type a message and send it, it goes to the server, which sends it to everyone.
- The page updates automatically when new messages or user changes happen.

## How to Run It

1. **Install Dependencies**:
   - Make sure you have Node.js installed on your computer.
   - Open a terminal in this project folder.
   - Run: `npm install`

2. **Start the Server**:
   - Run: `node server.js`
   - The server will start on `http://localhost:3000`

3. **Open the Chat**:
   - Open your web browser and go to `http://localhost:3000`
   - Enter your name when prompted.
   - Start chatting!

## Files in the Project

- `server.js`: The main server code that handles connections and messages.
- `Public/index.html`: The web page you see in the browser.
- `Public/script.js`: The JavaScript that makes the chat work on the client side.
- `package.json`: Lists the project info and dependencies.

## Technologies Used

- **Node.js**: Runs the server.
- **Express**: Helps serve the web page.
- **Socket.IO**: Handles real-time communication between server and clients.
- **HTML/CSS/JavaScript**: Builds the user interface.

That's it! It's a basic chat app to show how WebSockets work for real-time features.
# Real-Time Chat Application Documentation

## Project Overview
This real-time chat application is built to facilitate seamless communication among users, featuring functionalities like instant messaging, online status indicators, and user authentication. The application uses the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Socket.io for real-time communication. TailwindCSS and Daisy UI enhance the styling, while Zustand is employed for global state management.

## Features
### Core Features
- **Authentication & Authorization**: JWT-based user authentication and authorization.
- **Real-Time Messaging**: Instant messaging powered by Socket.io.
- **Online User Status**: Display the online/offline status of users.
- **Error Handling**: Robust error handling on both the client and server sides.
- **Photo Uploads**: Cloudinary integration for profile and message image storage.

### Pages
- **Signup & Login Pages**: User registration and authentication.
- **Home Page**:
  - Sidebar: Displays contacts and chat list.
  - Chat Container: Shows messages and typing status.
- **Profile Page**: User profile management.
- **Settings Page**: Customizable user settings.

## Tech Stack
- **Frontend**: React.js, Zustand, TailwindCSS, Daisy UI
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Image Storage**: Cloudinary
- **Deployment**: Render

## Project Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- A Cloudinary account

### Installation Steps
1. **Clone the Repository**:
   ```bash
   https://github.com/prathamesh-pichkate/QuickConnect.git
   ```

2. **Install Dependencies**:
   ```bash
   cd frontend
   npm install
   cd backend
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     JWT_SECRET=your_jwt_secret
     PORT=your_server_port
     ```

4. **Run the Server**:
   ```bash
   npm run dev
   ```

5. **Run the Client**:
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**:
   - Open your browser and navigate to `http://localhost:<PORT>`.


### Frontend Pages
- **Signup & Login Pages**: Collect user credentials and authenticate.
- **Profile Page**: Display and edit user information.
- **Settings Page**: Update user preferences.
- **Home Page - Sidebar**: Show a list of contacts and chat rooms.
- **Home Page - Chat Container**: Display message history and allow new messages to be sent.

## Real-Time Messaging
### Understanding & Implementing Socket.io
1. **Backend Implementation**:
   - Establish a Socket.io server on the defined port.
   - Handle events like `connection`, `message`, and `disconnect`.
2. **Frontend Integration**:
   - Connect the React application to the Socket.io server.
   - Listen for real-time updates and emit user actions.

## Deployment to Render
1. Deploy the backend as a web service.
2. Deploy the frontend as a static site.
3. Add environment variables to the Render dashboard.

## Resources Used
- React.js Documentation
- TailwindCSS Documentation
- Daisy UI Documentation
- Socket.io Documentation
- Cloudinary Documentation
- MongoDB Documentation

## Contribution
Feel free to fork the repository and submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the [MIT License](LICENSE).


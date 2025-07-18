Full-Stack Blog Application

A dynamic and responsive blog platform built with **React**, **Express.js**, **MongoDB**, and **Multer**. Users can create, edit, and delete posts, upload profile pictures, and explore content by category.

---

Features

-  User Authentication (Login/Register)
-  Create, Read, Update, Delete (CRUD) Posts
-  Upload and preview images using Multer
-  Categorize posts and filter by category
-  Update user profile with live image preview
-  Secure password handling and route protection
-  Responsive design with clean UI

---

Tech Stack

| Frontend       | Backend        | Database  | File Upload |
|----------------|----------------|-----------|-------------|
| React.js       | Express.js     | MongoDB   | Multer      |
| Axios          | Node.js        | Mongoose  | FormData    |
| React Router   | dotenv         |           |             |

---

Project Structure
client/ ├── src/ │   ├── components/ │   ├── pages/ │   ├── context/ │   └── App.js
server/ ├── models/ ├── routes/ ├── images/ ├── index.js └── .env



---

 Setup Instructions
 1. Clone the Repository

In command prompt, run the following commands:

git clone https://github.com/akshita516/Blog-website.git
cd blog-app

2. Backend Setup:

cd server
npm install

3. Create a .env file

MONGO_URL=your_mongodb_connection_string

4. Start the server:

npm start

5. FrontEnd Setup:

cd client
npm install
npm start

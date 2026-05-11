# MERN Authentication Project

A full-stack MERN Authentication application with user registration and login functionality using JWT authentication.

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS3

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# Features

- User Registration
- User Login
- Password Hashing
- JWT Authentication
- Responsive UI
- Modern Glassmorphism Design

---

# Project Structure

mern-auth-project/

├── client/

├── server/

└── .gitignore

---

# Installation

## Clone Repository

```bash
git clone  https://github.com/furkhanar/Login-Auth-MERN-Project.git

# Backend Setup

## Go to server folder

```bash
cd server
```

## Install backend dependencies

```bash
npm install
```

## Install required packages

```bash
npm install express mongoose bcryptjs jsonwebtoken cors dotenv
npm install nodemon --save-dev
```

## Create .env file inside server folder

```env
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret_key
```

## Start backend server

```bash
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Go to client folder

```bash
cd client
```

## Install frontend dependencies

```bash
npm install
```

## Install required packages

```bash
npm install axios react-router-dom
```

## Start frontend

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# API Endpoints

## Register User

```http
POST /api/auth/register
```

## Login User

```http
POST /api/auth/login
```

---

# Future Improvements

- Protected Routes
- Logout Functionality
- Email Verification
- Forgot Password
- User Dashboard
- Tailwind CSS UI

---

# Author

Mohammed Furkhan AR

Aspiring MERN Stack Developer

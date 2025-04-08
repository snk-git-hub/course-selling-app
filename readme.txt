course-selling-app/
├── backend/
   ├── index.js
   ├── .env
   ├── db.js
   ├── models/
   │   ├── Admin.js
   │   ├── User.js
   │   ├── Course.js
   │   └── Purchase.js
   ├── middleware/
   │   └── auth.js
   ├── routes/
   │   ├── admin.js
   │   └── user.js
   └── controllers/
       ├── adminController.js
       └── userController.js

# 📚 Course Selling App

This is a full-stack course selling app built using Node.js, Express, MongoDB, and React.

## Features

- User & Admin Authentication (JWT)
- Course purchase and view (User)
- Course creation, deletion, content update (Admin)
- MongoDB for storage

## Tech Stack

- Backend: Node.js, Express, MongoDB, Mongoose
- Auth: JWT, bcrypt

## Setup

1. Clone the repo
2. Setup `.env` with your `MONGO_URI` and `JWT_SECRET`
3. Run `npm install` in `/backend`
4. Start server: `nodemon index.js`
5. Navigate to frontend and run React app

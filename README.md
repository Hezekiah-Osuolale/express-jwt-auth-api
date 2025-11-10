# 🔐 Express JWT Auth API

A simple and secure **User Authentication API** built with **Node.js**, **Express**, and **JSON Web Tokens (JWT)**.  
It provides user registration, login, logout, profile update, and account deletion — all secured with JWT authentication.

---

## 🚀 Features

- 🧍 User Registration & Login
- 🔑 JSON Web Token (JWT) Authentication
- 🔒 Protected Routes with Middleware
- ✏️ Profile Update (name, email, password, age)
- ❌ Account Deletion
- 📡 RESTful API structure

---

## 🧰 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB & Mongoose** – Database & ODM
- **bcryptjs** – Password hashing
- **jsonwebtoken** – Token generation and verification

---

## 📦 Installation

```bash
# Clone the repository (using SSH)
git clone git@github.com:Hezekiah-Osuolale/express-jwt-auth-api.git

# Go into the project folder
cd express-jwt-auth-api

# Install dependencies
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in your project root and add:

```env
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/express-jwt-auth-api
JWT_SECRET=your_jwt_secret
```

---

## 🧩 API Endpoints

| Method     | Endpoint           | Auth | Description                                      |
| ---------- | ------------------ | ---- | ------------------------------------------------ |
| **POST**   | `/users`           | ❌   | Register a new user                              |
| **POST**   | `/users/login`     | ❌   | Login and get JWT token                          |
| **POST**   | `/users/logout`    | ✅   | Logout from the current session                  |
| **POST**   | `/users/logoutAll` | ✅   | Logout from all sessions                         |
| **GET**    | `/users/me`        | ✅   | Get authenticated user profile                   |
| **PATCH**  | `/users/me`        | ✅   | Update user details (name, email, password, age) |
| **DELETE** | `/users/me`        | ✅   | Delete user account                              |

---

## 🧠 Example Request (Register)

**Request:**

```bash
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "MyPass123!",
  "age": 25
}
```

**Response:**

```json
{
  "user": {
    "_id": "652f7e8d9b5a2c001e23f456",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

---

## 🔐 Using JWT Tokens

Include the token in your request header to access protected routes:

```
Authorization: Bearer <your_token_here>
```

---

## 📁 Folder Structure

```
express-jwt-auth-api/
│
├── src/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── user.js
│   ├── routers/
│   │   └── user.js
│   └── index.js
│
├── .env
├── package.json
└── README.md
```

---

## 🧪 Testing

Use **Postman**, **Insomnia**, or **curl** to test the API endpoints.  
Make sure MongoDB is running locally or use a cloud database like **MongoDB Atlas**.

---

## ⚙️ Start the Server

```bash
npm start
```

or

```bash
node src/index.js
```

The server will run at:

```
http://localhost:3000
```

---

## 🧾 License

This project is licensed under the **MIT License**.

---

**Author:** [Hezekiah Osuolale](https://github.com/Hezekiah-Osuolale)  
**Repository:** [express-jwt-auth-api](https://github.com/Hezekiah-Osuolale/express-jwt-auth-api)

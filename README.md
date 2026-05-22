# User Management App

A full-stack **User Management Application** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).
This project allows users to perform CRUD operations such as creating, viewing, updating, and deleting users.

---

# 🚀 Features

* Add new users
* View all users
* View user details
* Update user information
* Delete users
* Form handling with React Hook Form
* REST API integration
* MongoDB database connectivity
* Error handling and validation
* Responsive frontend UI
* CORS enabled for frontend-backend communication

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router
* React Hook Form
* Tailwind CSS
* Vite

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors

---

# 📚 Concepts Covered

## Frontend Concepts

* Functional Components
* React Hooks (`useState`, `useEffect`)
* Routing using React Router
* Navigation using `useNavigate`
* Passing state between routes
* Form handling with `react-hook-form`
* API calls using `fetch`
* Conditional rendering
* Component-based architecture
* Tailwind CSS styling

## Backend Concepts

* REST API development
* Express Router
* Middleware usage
* CRUD Operations
* MongoDB database integration
* Mongoose Schema and Model
* Schema validation
* Error handling middleware
* Environment variables using dotenv
* Async/Await operations

## Database Concepts

* MongoDB collections
* Document-based storage
* Mongoose schema validation
* Unique field constraints
* Timestamps in documents

---

# 📂 Project Structure

```bash
user-management-app/
│
├── backend/
│   ├── APIs/
│   │   └── UserAPI.js
│   │
│   ├── models/
│   │   └── UserModel.js
│   │
│   ├── server.js
│   ├── req.http
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddUser.jsx
│   │   │   ├── DeleteUser.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── RootLayout.jsx
│   │   │   ├── UpdateUser.jsx
│   │   │   ├── User.jsx
│   │   │   └── Users.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```
# 🚀 Deployment Links

## Frontend Deployment
https://user-mngmnt-app.vercel.app/

## Backend Deployment
https://user-mngmnt-app-backend.onrender.com

---
# 📦 Packages Installed

## Backend Packages

| Package                    | Purpose                                          |
| -------------------------- | ------------------------------------------------ |
| `express`                  | Backend web framework for creating APIs          |
| `mongoose`                 | MongoDB object modeling and database connection  |
| `dotenv`                   | Loads environment variables from `.env` file     |
| `cors`                     | Enables Cross-Origin Resource Sharing            |
| `nodemon` *(if installed)* | Automatically restarts server during development |

### Backend Install Commands

```bash
npm install express mongoose dotenv cors
```

```bash
npm install --save-dev nodemon
```

---

# 🎨 Frontend Packages

| Package                         | Purpose                          |
| ------------------------------- | -------------------------------- |
| `react`                         | Frontend library for building UI |
| `react-dom`                     | React rendering for web          |
| `react-router`                  | Client-side routing              |
| `react-hook-form`               | Form handling and validation     |
| `vite`                          | Fast frontend build tool         |
| `tailwindcss` *(if configured)* | Utility-first CSS framework      |

### Frontend Install Commands

```bash
npm install react react-dom react-router react-hook-form
```

```bash
npm install -D vite
```

```bash
npm install -D tailwindcss
```


# ⚙️ Installation and Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/ritesh-mogilamoni/user-management-app.git
```

---

## 2️⃣ Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
DB_URL=your_mongodb_connection_string
PORT=7000
```

Start backend server:

```bash
npm start
```

---

## 3️⃣ Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend application:

```bash
npm run dev
```

---

# 🌐 API Endpoints

## Create User

```http
POST /user-api/create-user
```

## Get All Users

```http
GET /user-api/users
```

## Get User By ID

```http
GET /user-api/users/:id
```

## Update User

```http
PUT /user-api/user-update
```

## Delete User

```http
DELETE /user-api/del-user/:id
```

---

# 🧾 Sample Request Body

```json
{
  "name": "Alex",
  "email": "alex@example.com",
  "dateOfBirth": "2000-11-10",
  "mobileNo": "9999999999"
}
```

---

# 🗃️ Database Schema

```js
{
  name: String,
  email: String,
  dateOfBirth: Date,
  mobileNo: String,
  status: Boolean
}
```

---

# ⚠️ Error Handling Implemented

* Validation errors
* Duplicate email handling
* Invalid MongoDB ObjectId handling
* Internal server error handling

---

# 🎯 Future Improvements

* Authentication and Authorization
* Search and Filter Users
* Pagination
* JWT Authentication
* User Profile Images
* Better UI Design
* Form validations on frontend
* Toast notifications

---

# 👨‍💻 Author

Developed by Ritesh Mogilamoni

GitHub Repository:

[user-management-app](https://github.com/ritesh-mogilamoni/user-management-app?utm_source=chatgpt.com)

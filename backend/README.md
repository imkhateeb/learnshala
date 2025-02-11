# LearnShala Backend

This project is a backend application built with Node.js, Express, and MongoDB. It provides a foundation for building scalable and maintainable web applications.

### Live Preview - https://learnshala-react-frontend.vercel.app/

## Technologies

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-003A70?style=for-the-badge&logo=lua&logoColor=white)
![CORS](https://img.shields.io/badge/CORS-FF6C37?style=for-the-badge&logo=CORS&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database](#database)
- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

- RESTful API structure
- MongoDB database integration
- User authentication with JWT
- Environment-based configuration
- Error handling middleware
- Modular project structure

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (v4 or later)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd alemeno-assignment-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory based on the `.env.example` file.
2. Update the environment variables in the `.env` file:
   ```
   PORT=3000
   MONGO_CONNECTION_STRING=<your_mongo_uri>
   NODE_ENV=development
   JWT_SECRET_KEY=<your_jwt_secret_key>
   ```

## Usage

To run the application in development mode:

```
npm run dev
```

To start the application in production mode:

```
npm run dev
```

The server will start running on `http://localhost:3000` (or the port specified in your `.env` file).

## Project Structure

```
.
├── node_modules
├── src
│   ├── config
│   ├── controllers
│   ├── errors
│   ├── models
│   ├── repositories
│   ├── routes
│   │   └── v1
│   │       └── index.js
│   ├── services
│   ├── utils
│   ├── validators
│   └── app.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

- `config`: Configuration files and environment variable setup
- `controllers`: Request handlers for each route
- `errors`: Custom error classes and error handling middleware
- `models`: MongoDB schema definitions
- `repositories`: Data access layer for database operations
- `routes`: API route definitions
- `services`: Business logic layer
- `utils`: Utility functions and helpers
- `validators`: Request validation middleware
- `app.js`: Main application file

## API Endpoints

Document your API endpoints here. For example:

- `POST /api/v1/auth/register`: Create user -> PUBLIC
- `POST /api/v1/auth/login`: Login user -> PUBLIC
- `GET /api/v1/courses`: Get all courses -> PUBLIC
- `GET /api/v1/courses/:courseId`: Get single course -> PUBLIC
- `POST /api/v1/courses`: Create a course -> ADMIN
- `PUT /api/v1/courses/:courseId`: Update a course -> ADMIN
- `POST /api/v1/courses/:courseId/enroll`: Enroll into a course -> STUDENT
- `POST /api/v1/courses/:courseId/like-unlike`: Like/Unlike a course -> STUDENT
- `POST /api/v1/courses/:courseId/review`: Review a course -> STUDENT
- `POST /api/v1/courses/:courseId/mark-as-completed`: Mark a course as completed -> STUDENT
- `POST /api/v1/courses/:courseId/syllabus`: Add syllabus in a course -> INSTRUCTOR
- `POST /api/v1/courses/syllabus/:syllabusId/mark-as-completed`: Mark a syllabus as completed of a course -> STUDENT
- `GET /api/v1/courses/:courseId/progress`: Get progress of a course -> STUDENT
- `GET /api/v1/enrollments/is-enrolled/:courseId`: Get enrollment object of an student enrolled in a course(IF ANY) -> STUDENT
- `GET /api/v1/enrollments`: Get all enrollments of an student -> STUDENT
- `GET /api/v1/users`: Get user -> ANY USER WITH TOKEN
- `GET /api/v1/users/users`: Get all LearnShala users -> PUBLIC
- `GET /api/v1/users/instructors`: Get all LearnShala instructors -> PUBLIC
- `GET /api/v1/users/students`: Get all LearnShala students -> PUBLIC

## Authentication

This project uses JSON Web Tokens (JWT) for authentication. To access protected routes, include the JWT token in the Authorization header of your requests:

```
Authorization: Bearer <your-jwt-token>
```

## Database

This project uses MongoDB as its database. The connection string is specified in the `.env` file. Make sure you have a MongoDB instance running and accessible.

## Error Handling

Custom error handling middleware is implemented to manage and respond to errors consistently across the application.

## Deployment

Provide instructions for deploying your application to production environments.

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

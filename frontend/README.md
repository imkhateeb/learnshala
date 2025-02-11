# LearnShala Frontend

This is an online course listing platform where admin can add a course, instructors can add syllabuses to that course and student can review, like and enroll into a course. Student can also track there progress in the course.

[LearnShala](https://learnshala-react-frontend.vercel.app/)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

This project is a frontend application built with React and Vite, designed for the Alemeno assignment.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)

## Features

- React-based UI with Vite for fast development and building
- State management with Redux Toolkit
- Routing with React Router
- UI components with Ant Design
- Styling with Tailwind CSS
- Icons from Phosphor Icons
- Toast notifications with React Hot Toast
- HTTP requests with Axios
- ESLint for code linting

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/imkhateeb/Learnshala-react-frontend
   cd alemeno-assignment-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Configuration

Create a `.env` file in the root directory with the following content:

```
VITE_BACKEND_BASE_URL=http://localhost:3000/api/v1
```

Make sure backend is setup at port 3000 -> [Backend Repo](https://github.com/imkhateeb/Learnshala-node-backend)

Adjust the URL as needed for your backend service.

## Usage

To run the application in development mode:

```
npm run dev
```


## Project Structure

```
.
├── node_modules
├── public
├── src
│   ├── assets
│   ├── components
│   ├── config
│   ├── pages
│   ├── redux
│   ├── styles
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Dependencies

Key dependencies include:

- React and React DOM
- Redux Toolkit and React-Redux
- React Router DOM
- Ant Design
- Axios
- Tailwind CSS
- Phosphor Icons

For a full list of dependencies and dev dependencies, refer to the `package.json` file.

## Development

This project uses Vite for fast development. To start the development server:

```
npm run dev
```

## Building for Production

To build the application for production:

```
npm run build
```

This will generate optimized files in the `dist` directory.


## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

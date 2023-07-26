# Task Room Server-side

Prerequisites
Before running the application, ensure that the following prerequisites are met:

Node.js is installed (version 18.16.1 or higher)
MongoDB is installed and running

## Installation

1. Clone the repo

   ```sh
   git clone
   ```

2. Install NPM packages

   ```sh
   cd server
   npm install
   ```

3. Configure the application

   ```sh
   MONGODB_URI=mongodb://localhost:***/my-database
   ```

4. Run the application

   ```sh
   npm start
   ```

5. The server should start running on `http://localhost:8000`

## Project Structure

The folder structure of this app is explained below:

├── src/ # Source code
│ ├── controllers/ # Controllers handling business logic
│ │ ├── tasks.controller.js
│ │ └── users.controller.js
│ ├── models/ # Database models and schemas
│ │ ├── task.model.js
│ │ └── user.model.js
│ ├── routes/ # API routes
│ │ ├── index.js
│ │ ├── users.route.js
│ │ └── tasks.route.js
│ ├── config/ # Configuration files
│ │ └── index.js
│ ├── middleware/ # Middleware functions
│ │ └── error-handler.js
│ ├── loaders/ # Loader functions
│ │ ├── db.js
│ │ ├── express.js
│ │ └── index.js
│ └── utils/ # Utility functions
│ ├── logger.js
│ ├── swagger.comment # Swagger comments
│ │ ├── controller.js
│ │ └── model.js
│ └── swagger.js # Swagger configuration
├── index.js # Entry point of the application
├── app.js # Express app
├── package.json # Project dependencies and scripts
├── .env# Environment variables (ignored by Git)
├── .gitignore # List of ignored files and folders
├── .eslintrc.js # ESLint configuration
└── README.md # Project documentation

## API Endpoints

The API endpoints are described below:

### Authentication

| Method | Endpoint         | Access     | Description            |
| ------ | ---------------- | ---------- | ---------------------- |
| POST   | `/api/v1/signup` | Public     | Register a new account |
| POST   | `/api/v1/login`  | Public     | Login with credentials |
| POST   | `/api/v1/tasks`  | Authorized | create a new task      |
| POST   | `/api/v1/users`  | Authorized | create a new user      |

### Task

| Method | Endpoint        | Access     | Description       |
| ------ | --------------- | ---------- | ----------------- |
| POST   | `/api/v1/tasks` | Authorized | create a new task |

### User

| Method | Endpoint        | Access     | Description       |
| ------ | --------------- | ---------- | ----------------- |
| POST   | `/api/v1/users` | Authorized | create a new user |

## License

Distributed under the MIT License.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

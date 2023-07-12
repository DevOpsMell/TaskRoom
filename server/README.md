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

├── src/                # Source code
│   ├── controllers/    # Controllers handling business logic
│   ├── models/         # Database models and schemas
│   ├── routes/         # API routes
│   ├── config/         # Configuration files
│   ├── middleware/     # Middleware functions
|   |── loaders/        # Loader functions
│   └── utils/          # Utility functions
├── index.js            # Entry point of the application
|── app.js              # Express app
├── package.json        # Project dependencies and scripts
├── .env                # Environment variables (ignored by Git)
├── .gitignore          # List of ignored files and folders
|── .eslintrc.js        # ESLint configuration
└── README.md           # Project documentation

## API Endpoints

The API endpoints are described below:

### Authentication

| Method | Endpoint      | Access | Description            |
| ------ | ------------- | ------ | ---------------------- |
| POST   | `/api/v1/signup` | Public | Register a new account |
| POST   | `/api/v1/login`  | Public | Login with credentials |

## License

Distributed under the MIT License. 

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)


   


# JWT-Auth-Project

# JWT Authentication Project
This project is a full-stack application that implements JWT (JSON Web Token) authentication. It consists of a backend server built with Node.js, Express.js, and MySQL, and a frontend client built with your preferred frontend framework React.
![image](https://github.com/TangadeSandesh/JWT-Auth-Project/assets/129480090/13436089-97dc-42c4-9dd2-919093f831c5)

![image](https://github.com/TangadeSandesh/JWT-Auth-Project/assets/129480090/084b77bb-8307-4e70-8a84-c4ab26043bb9)

## Features

- User registration and login with JWT authentication
- Password hashing using bcrypt
- Secure cookie-based session management
- MySQL database for storing user information

## Prerequisites
- Node.js (v14 or later)
- MySQL server

## Getting Started
 Clone the repository:

### Backend Setup
2. Navigate to the backend directory:
3. Install dependencies:
4. Create a MySQL database and update the database configuration in `index.js`.
5. Start the backend server:


### Frontend Setup
1. Navigate to the frontend directory:
2. Install dependencies:
3. Start the development server:
4. Open your web browser and visit `http://localhost:5173` (or the appropriate URL for your frontend setup).

## Usage

1. Register a new user by providing a name, email, and password.
2. Log in with your registered email and password.
3. Upon successful login, the server will issue a JWT token and store it in a cookie.
4. The frontend client will automatically include the JWT token in subsequent requests to authenticated routes.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

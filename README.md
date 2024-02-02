# User Account Management React App

This React application is designed to facilitate user account management, providing a seamless experience for account creation, login, and profile management. The app includes a login page, a registration page, and a user profile page where users can view and edit their account information.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Clone this repository
- Navigate to the project directory:
  - cd your-user-account-app
- Install dependencies:
   - npm install
- Run the following command to start the development server:
  - npm start
The app will be available at http://localhost:3000 in your browser.

## Dependencies

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/): Declarative routing for React.js.
- [Bootstrap](https://getbootstrap.com/): CSS framework for responsive and mobile-first websites.
- [react-bootstrap](https://react-bootstrap.github.io/): Bootstrap components as React components.

## Local Storage Functions

The application utilizes local storage for persistent data storage. Here are the key local storage functions used:

1. **Saving User Data:**
   - When a user registers or logs in, their information is stored in the local storage.

2. **Retrieving User Data:**
   - User data is retrieved from local storage during login or whenever user details are needed.

3. **Updating User Data:**
   - When a user updates their profile, the local storage is updated with the new information.

4. **Logging Out:**
   - Local storage is cleared when a user logs out, ensuring no sensitive information remains.



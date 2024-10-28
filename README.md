# SecureForm

SecureForm is a web application that implements CSRF protection using TypeScript and React. This project showcases a secure form submission process, ensuring that only authorized requests can be processed by the server.

## Features

- **CSRF Protection**: Utilizes `csurf` middleware to protect against CSRF attacks.
- **Cookie-Based Tokens**: Generates CSRF tokens that are sent via cookies for secure verification.
- **Responsive UI**: Built with React, providing a seamless user experience.

## Technologies Used

- **Frontend**: React, TypeScript, Axios
- **Backend**: Node.js, Express, csurf, dotenv
- **Others**: Cookie-Parser, CORS

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/secureform.git
   cd secureform
   ```

2. Install the dependencies for both frontend and backend:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

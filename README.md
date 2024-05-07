# Food Recipe Web Application - Foodies' Foods

This is a full-stack web application that allows users to browse, search, and add their own food recipes. Users can view recipe details, including images, description, ingredients, and steps. The application also provides authentication functionality for user signup and login.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

1. **Recipe Display**: Display a collection of food recipes with images, descriptions, ingredients, and steps.
2. **Search**: Users can search for recipes based on the name of the food or ingredients used.
3. **User Authentication**: User authentication system allows users to sign up and log in securely.
4. **Add/Edit Recipes**: Authenticated users can add new recipes or edit existing ones.
5. **Responsive Design**: The application is designed to be responsive and work well on various devices.

## Technologies Used

- **Frontend**: React.js, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)
- **Others**: Axios (HTTP client), bcrypt (password hashing), Framer-motion etc.

## Setup

1. **Clone the Repository**: `git clone https://github.com/mananc12/Foodies-Foods.git`
2. **Install Dependencies**:
   - For the frontend: `cd frontend && npm install`
   - For the backend: `cd backend && npm install`
3. **Database Setup**: 
   - Install and set up MongoDB on your local machine or use a cloud-based MongoDB service.
   - Update the MongoDB connection string in the backend configuration file.
4. **Environment Variables**: 
   - Create a `.env` file in the backend directory and add necessary environment variables (e.g., MONGODB_URL, JWT_SECRET, JWT_TOKEN_EXPIRY).
5. **Start the Server**: `cd backend && node app.js`
6. **Start the Client**: `cd frontend && npm start`
7. **Access the Application**: Open your browser and go to `http://localhost:3000`

## Usage

1. **Register/Login**: Sign up for a new account or log in with an existing one.
2. **Browse Recipes**: Explore the collection of food recipes.
3. **Search Recipes**: Use the search feature to find recipes by name or ingredients.
4. **View Recipe Details**: Click on a recipe to view its details, including images, description, ingredients, and steps.
5. **Add/Edit Recipe**: If logged in, users can add new recipes or edit existing ones through the dashboard.

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests.

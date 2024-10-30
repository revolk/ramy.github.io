# ramy.github.io
Natours App
Natours is a comprehensive tour booking application designed using Node.js and Express for backend functionality, and Pug, SCSS, and JavaScript for the front end. It uses MongoDB as the database and integrates several third-party APIs for map and payment features. This guide provides step-by-step instructions on setting up, running, and understanding each part of the project.

Table of Contents
Project Overview
Technology Stack
Backend
Frontend
Installation
1. Clone the Repository
2. Install Dependencies
3. Configure Environment Variables
4. Database Setup
5. Run the Application
Project Structure
Frontend Details
Backend Details
API Documentation
Deployment
Project Overview
Natours allows users to browse, review, and book tours worldwide. The application integrates various features, including:

Tour Information: Each tour has detailed information, including an itinerary, difficulty level, guides, and pictures.
Booking System: Users can book tours and make payments through Stripe integration.
Authentication: The app provides secure login, registration, and password management.
Map Integration: Uses Mapbox to display tour locations interactively.
Technology Stack
Backend
The backend is built with Node.js and Express.js, following the MVC pattern for structured code organization:

Node.js: Handles server-side logic and API requests.
Express.js: Provides routing and middleware support.
MongoDB: Used as a NoSQL database to store user data, tours, bookings, and reviews.
Mongoose: Manages MongoDB data with schemas.
Stripe API: Integrates payment functionality for booking tours.
Mapbox API: Integrates an interactive map to show tour locations.
Nodemailer: Handles email functionality for notifications and password reset.
Frontend
The frontend is built using Pug templates, SCSS for styling, and vanilla JavaScript:

Pug: Templating engine to render dynamic HTML.
SCSS: Preprocessor for advanced styling features, allowing for nested CSS and reusable variables.
JavaScript: Adds interactivity, such as handling form submissions and triggering map functions.
Installation
1. Clone the Repository
To start, clone the Natours repository:

bash
Copy code
git clone https://github.com/username/natours.git
cd natours
2. Install Dependencies
Run the following command to install all the required dependencies for both frontend and backend:

bash
Copy code
npm install
This will install:

Express: Core framework for building backend routes and middleware.
Mongoose: ODM for MongoDB to define schemas.
Pug: Template engine for dynamic frontend pages.
SCSS: Stylesheets precompiled to CSS using the npm run build:css command.
Mapbox, Stripe, and Nodemailer libraries: For map display, payment, and email features.
3. Configure Environment Variables
Create a .env file in the root directory and add the following variables:

plaintext
Copy code
NODE_ENV=development
PORT=3000
DATABASE=<Your MongoDB connection string>
DATABASE_PASSWORD=<Your MongoDB password>
JWT_SECRET=<Your JWT secret>
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
EMAIL_USERNAME=<Your email username>
EMAIL_PASSWORD=<Your email password>
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
STRIPE_SECRET_KEY=<Your Stripe secret key>
MAPBOX_TOKEN=<Your Mapbox access token>
Replace <Your MongoDB connection string>, <Your Stripe secret key>, and other placeholders with your actual credentials.

4. Database Setup
Natours uses MongoDB. If you’re using MongoDB Atlas, make sure to whitelist your IP in Atlas and update the DATABASE variable with your connection string.

Alternatively, you can use a local MongoDB instance and replace DATABASE with mongodb://localhost:27017/natours.

5. Run the Application
Compile SCSS to CSS:

To compile SCSS, use the following command (it runs concurrently with development):

bash
Copy code
npm run watch:css
Start the Server:

For development with hot-reloading:

bash
Copy code
npm run dev
For production:

bash
Copy code
npm start
Access the application at http://localhost:3000.

Project Structure
The project follows the MVC (Model-View-Controller) pattern:

bash
Copy code
natours
├── controllers        # Handles request logic
├── dev-data           # Sample data for testing
├── models             # Database schemas and models
├── public             # Static files (CSS, JavaScript, images)
├── routes             # Route definitions
├── utils              # Helper functions and utilities
├── views              # Pug templates for rendering frontend pages
├── .env               # Environment variables
├── app.js             # Express application setup
└── server.js          # Main server file
Frontend Details
The frontend of Natours is structured with Pug templates and SCSS:

Pug Templates: Located in the views directory. These templates render HTML pages with dynamic data from the backend.
SCSS: Stylesheets are compiled into CSS, and SCSS files are found in public/css. Compiled CSS files are then linked in the templates.
Frontend Interactions:

Interactive Map: Mapbox API displays each tour’s location on a detailed map.
Form Validations and Alerts: JavaScript handles validation for user sign-up/login forms and booking.
Responsive Design: SCSS and Pug templates ensure the app is responsive across devices.
Backend Details
The backend manages routing, user authentication, data handling, and more:

Controllers: Each feature (tours, users, reviews) has a dedicated controller in controllers, ensuring organized and modularized code.
Models: Mongoose models define the structure and relationships between data collections.
Middleware: Authentication, error handling, and data sanitization middleware is used to ensure secure and efficient processing.
API Routing: The app includes both public and API endpoints for accessing tour, user, and booking data, which are defined in the routes directory.
API Documentation
Natours has RESTful API endpoints to interact with tours, users, bookings, and reviews:

/api/v1/tours: Retrieve all tours, add new tours (admin-only), and filter by date, rating, etc.
/api/v1/users: Register, log in, update profile, and reset passwords.
/api/v1/reviews: Add or get reviews for tours.
/api/v1/bookings: Book tours, integrated with Stripe for payment.
Example Endpoints
GET /api/v1/tours: Retrieves all available tours.
POST /api/v1/users/signup: Registers a new user.
PATCH /api/v1/users/updatePassword: Allows users to update their passwords.
Deployment
To deploy Natours:

Use a cloud provider like Heroku or Vercel.

Set environment variables in the provider’s configuration settings.

Run the production build:

bash
Copy code
npm run start
Connect to your MongoDB Atlas database and ensure your app uses the production Stripe API key.



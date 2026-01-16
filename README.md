# ShorterLinkProvider

🔗 ShorterLinkPRovider
ShorterLinkPRovider is a fast and efficient URL shortening service built using the MEN stack (MongoDB, Express, Node.js). It allows users to convert long, cumbersome URLs into neat, short links that are easy to share and track.

🌟 Features
URL Shortening: Generate unique short codes for long URLs.

Instant Redirection: High-speed redirection from short links to original destinations.

Click Tracking: Monitors the total number of times each link is clicked.

Server-Side Rendering: Uses EJS for a dynamic and responsive user interface.

Database Persistence: Uses MongoDB to ensure your links are stored securely.

🛠️ Tech Stack
Backend: Node.js & Express.js

Database: MongoDB (using Mongoose)

Templating Engine: EJS

Styling: CSS / Bootstrap

🚀 Getting Started
Prerequisites
Node.js installed on your machine.

A MongoDB instance (Local or Atlas).

Installation
Clone the repository:

Bash

git clone https://github.com/iamdebrajghosh/ShorterLinkPRovider.git
cd ShorterLinkPRovider
Install dependencies:

Bash

npm install
npm i express
npm i cookie-parser
npm install uuid
npm install ejs
npm i shortid
npm i nodemon 
npm i mongoose
Environment Setup: Create a .env file in the root directory and add:

Code snippet

PORT=8001
MONGODB_URI=your_mongodb_connection_string
Run the application:

Bash

# Using nodemon for development
npm start

# Or using standard node
npm run dev
Open http://localhost:3000 in your browser.

📂 Project Structure
Plaintext

ShorterLinkPRovider/
├── models/         # Mongoose Schema for URLs
├── public/         # Static files (CSS, Assets)
├── routes/         # Express Route handlers
├── views/          # EJS templates for the UI
├── server.js       # Entry point of the application
├── package.json    # Dependencies and scripts
└── .env            # Environment variables
📊 How it Works
Submit: Paste your long URL into the input field.

Generate: The server creates a unique ID and saves it to MongoDB.

Shorten: You receive a shortened link (e.g., localhost:3000/xyz123).

Redirect: When someone visits the short link, the server finds the original URL and redirects them instantly while incrementing the click counter.

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/NewFeature)

Commit your Changes (git commit -m 'Add some NewFeature')

Push to the Branch (git push origin feature/NewFeature)

Open a Pull Request

👤 Author
Debraj Ghosh

GitHub: @iamdebrajghosh

If you liked this project, feel free to give it a ⭐!


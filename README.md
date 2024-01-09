# Quote_Generator-HTML_CSS_JS

# A simple JavaScript application that fetches and displays a random quote using the "https://api.quotable.io/random" API.

# Getting Started
These instructions will help you set up and run the project on your local machine.

# Prerequisites
Make sure you have a modern web browser installed that supports JavaScript.

# Installing
1. Clone the repository to your local machine: https://github.com/BloodlusT02/Quote_Generator-HTML_CSS_JS
   
2. Open the index.html file in your preferred web browser.

# Usage
Click the "Generate Quote" button to fetch and display a random quote. The quote and author will be updated dynamically on each click.

# Code Overview
The main functionality is implemented in the script.js file. Here's an overview of the key components:
- const btnEl: Represents the "Generate Quote" button.
- const quoteEl: Represents the element where the quote will be displayed.
- const authorEl: Represents the element where the author will be displayed.
- const apiURL: Holds the URL for the "https://api.quotable.io/random" API.

# The getQuote function:
- Updates the button text and disables it during the API request.
- Fetches a random quote from the API.
- Updates the HTML content with the fetched quote and author.
- Handles errors during the API request.

# The event listener:
- Listens for a click on the "Generate Quote" button and calls the getQuote function.

# Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize the README further based on additional details or features of your project.

# Cypress Test Automation Project

## Overview
This project uses [Cypress](https://www.cypress.io/) for end-to-end testing of the web application. It includes automated test cases covering key user workflows to ensure application quality and reliability.

## Prerequisites
- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/besnik-jakupi/cypress-automation.git
   cd your-cypress-project

2. Install dependencies:
    npm install

3. Running Tests
    npx cypress open

## Environment Variables

To keep sensitive data like usernames and passwords secure, this project uses environment variables.

1. Create a `.env` file in the root of the project (make sure `.env` is added to `.gitignore` to avoid committing secrets).

2. Add the following variables to the `.env` file:

   ```env
   CYPRESS_BASE_URL=your-url-here
   CYPRESS_USERNAME=your-username-here
   CYPRESS_PASSWORD=your-password-here
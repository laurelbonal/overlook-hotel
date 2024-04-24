# Overlook Hotel 

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

A website that allows you to view and book hotel rooms, and keep track of your bookings

![overlook hotel gif](https://github.com/laurelbonal/overlook-hotel/assets/155783683/7ce7d204-b0cd-4574-ba95-8047798db53d)

**Note:** This website requires a [backend server](https://github.com/turingschool-examples/overlook-api) to be running for it to properly work. The [instructions](#instructions) below will help you get running!

## Context 

This project was done in my 11th and 12th week of learning to code! It took approx. 15 hours of work time, divided over a week. The most challenging part of this project for me was the POST API requests. The most fun part of this project was the testing suites, as well as getting the POST request to work.  

## ⚙️ Installation & Setup

### Requirements

Running this application requires:

- Git - version control software you can [install here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- NPM - package manager that is [part of Node.js](https://nodejs.org/en)

### Instructions

1. Follow the instructions in [this repo]((https://github.com/turingschool-examples/overlook-api)) to pull down and get the backend API server running.
2. Pull down the code for the frontend website

```
git clone git@github.com:laurelbonal/overlook-hotel.git
```

3. Navigate into the `overlook-hotel` folder

```
cd overlook-hotel
```

4. Install the required node packages

```
npm install
```

5. Start the frontend dev server

```
npm run start
```

The frontend server should be running on `localhost:8080`

### Tests

This code also includes a full test suite that I used for testing the core functionality of my application. If you would like to run our test suite, use the following command in your terminal after installing the required node packages:

```
npm run test
```

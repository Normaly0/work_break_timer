<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Normaly0/work_break_timer"> <img alt="node-current" src="https://img.shields.io/node/v/v"> <img alt="npm version" src="https://img.shields.io/badge/npm-v8.1.0-blue"> <img alt="license" src="https://img.shields.io/badge/License-GPL%20-orange">

# Pomodoro Timer App

A pomodoro timer app allowing you to set work and break leanght, adjust it as the timer runs, as well as pause, reset and continue the timer and at point.

## About

This application was build as part of the [Front End Development Libraries Certification](https://www.freecodecamp.org/certification/normaly/front-end-development-libraries).
It uses the react framework and it's class based component system, in combination with the redux library.

The biggest challenge of this project was creating a timer that would be accurate regardless of how many other processes the CPU is currently handling aka. a timer that wouldn't get unprecise after a certain amount of time. To accomplish that I've used the principles of `deltatime`, which allowed me to correct the timer via a function and therefore ensure that it stays accurate.

Future ideas:
- add animations to the background (props like a book or coffee)
- 3D model a scene that would serve as a more interesting background
- add a button that would make the timer loopable


## How To Run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Therefore make sure that you have [Node.js](https://nodejs.org/en/) installed.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

For more information check out the [React documentation](https://reactjs.org/)!

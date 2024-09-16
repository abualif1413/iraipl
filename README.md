# iraipl

## Getting Started

-   Make sure you have docker installed
-   Make sure you are using NVM to manage your Node version, if you are not please manage to install and configure it first and feel free to check their documentation [here](https://github.com/nvm-sh/nvm/blob/master/README.md)
-   Run `nvm use` from terminal to automatically use the version of Node of this project
-   Run `npm i` from terminal to install all dependencies

## Run application

### Spin up service

-   Run `docker compose up -d` to spin-up our docker and start our services like database and cache
-   Run `npm run db:migrate:up` to run database migration
-   (Optional) You may want to run database seeder by running `npm run db:seed:up` to fill in all default record

### Run application in development environment

-   Make sure you are using the project's version of Node, run `nvm use` from terminal to ensure it
-   Run `npm run dev` (or `npm run dev-win` if your are using Windows and you can consider Powershell or Command Prompt as terminal) to run and it will run in `http://localhost:3000`
-   If you have trouble running on port `3000`, you can change the port by looking into `bin/www` file and look for `var port = normalizePort(process.env.PORT || '3000');`, feel free to change the port to any port that works for you

## Dev Notes

This project built in NodeJS and ReactJS and they are managed in this one repository. The idea is to have frontend application running directly under the same host with backend so it doesn't require any additional setting for URL to communicate them using Rest API.

### Backend

The backend service is using Express to manage all backend application related. The starting point is `app.js` where we can put all middleware and all route rules. For the detailed router rule, please do any route handler inside `route` folder.

Please look at example, let's say we are just adding `welcome.js` under `route` folder and we meant it to be accessible at `/api/welcome/` so we add these in `route/welcome.js`

```
const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
    // your route logic here
});

module.exports = router;
```

and add this in `app.js`

```
var welcomeRouter = require('./routes/welcome');

app.use('/api/welcome', welcomeRouter);
```

so, whatever inside `route/welcome.js` is more like a route group and it's attached to the prefix route in `app.js`

### Frontend

The frontend application is using ReactJS to create UI and manage the presentation logic. The starting point is `web-app/app.jsx` where we can put all application wrapper like Redux or React Router over there. The `web-app/index.js` is just a helper that render the react app into HTML DOM.
So, please avoid to write any component or React related outside `web-app` folder because it won't work.

For the UI, we are using [MUI](https://mui.com/material-ui/getting-started/) and we can follow it's best practice to modify style rather than writing a native CSS and if you really have to write CSS, please do this in `public/stylesheets/style.css` or if you want to create a new CSS file, put this under
`public/stylesheets` folder and then include it to our application by adding `<link>` tag in `views/index.twig`, see example below

```
<link rel="stylesheet" href="/stylesheets/[your_new_css_file].css" />
```

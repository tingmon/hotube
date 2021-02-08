// const express = require("express"); // import express module
//import
import express from 'express'; // thanks to babel
import morgan from 'morgan'; // one example of middleware for logging
import helmet from 'helmet'; // for security
import bodyParser from 'body-parser'; // to process data recieved from the page(form) -> can be url format, json format...
import cookieParser from 'cookie-parser'; // to use cookie and sessions
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import homeRouter from './routers/homeRouter';
import routes from './routes';
// execute express(server)
const app = express(); 

//middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

//route
console.log(routes.users);
app.use(routes.home, homeRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app; // allow 'init' js file import 'app' object
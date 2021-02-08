import express from 'express';
import { login, logout, signup } from '../controllers/userController';
import { home, search } from '../controllers/videoController';
import routes from '../routes';

const homeRouter = express.Router();

homeRouter.get(routes.home, home);
homeRouter.get(routes.signup, signup);
homeRouter.get(routes.login, login);
homeRouter.get(routes.logout, logout);
homeRouter.get(routes.search, search);

export default homeRouter;
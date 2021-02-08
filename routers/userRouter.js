import express from 'express';
import { changePassword, editProfile, userDetail, users } from '../controllers/userController';
import routes from '../routes';

const userRouter = express.Router(); //allow import for other js file

// http://localhost:4000/users/users 현재 이렇게 해야 실행되는중...
userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;

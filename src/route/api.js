import express from "express";
import APIController from "../controller/APIController"

let route = express.Router();

const initAPIRoute = (app) => {
    route.get('/users', APIController.getAllUsers);//method GET->READ data

    app.post('/create-user', APIController.createNewUser);//method POST->create data

    app.put('/update-user/', APIController.updateUser)//method PUT->Update data

    app.delete('/delete-user/:id', APIController.deleteUser)//method DELETE->delete data

    app.use('/api/v1/', route);
}

export default initAPIRoute;
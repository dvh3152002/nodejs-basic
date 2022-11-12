import express from "express";
import homeController from "../controller/homeController"

let route = express.Router();

const initWebRoute = (app) => {
    route.get('/', homeController.getHomePage);

    route.get('/about', (req, res) => {
        res.send(`i'm H`);
    });

    route.get('/detail/user/:id', homeController.getDetailPage);

    route.post('/create-new-user', homeController.createNewUser);

    app.use('/', route);
}

export default initWebRoute;
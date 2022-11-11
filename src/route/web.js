import express from "express";
import homeController from "../controller/homeController"

let route = express.Router();

const initWebRoute = (app) => {
    route.get('/', homeController.getHomePage);

    route.get('/about', (req, res) => {
        res.send(`i'm H`);
    });

    route.get('/detail/user/:id', homeController.getDetailPage);

    app.use('/', route);
}

export default initWebRoute;
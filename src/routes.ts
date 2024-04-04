import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();


router.get("/", (request, response) => {
    return response.json({ message: "Hello World - NLW04" });
});

router .get("/users", (request, response) => {
    return response.json({ message: "Hello World - NLW04" });
});

router.post("/users", (request, response) => {
    return  createUserController.handle(request, response);
});

export { router }
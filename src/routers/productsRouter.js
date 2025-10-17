import { Router } from "express";
import { body } from "express-validator";
import { 
    getProducts, 
    getProduct, 
    postProduct, 
    putProduct, 
    deleteProduct 
} from "../controllers/productsController.js";

const router = Router();

// Validaciones para productos
const validarProducto = [
    body("nombre")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({ min: 1, max: 100 })
        .withMessage("El nombre debe tener entre 1 y 100 caracteres"),
    body("tipo")
        .isIn(["juego", "consola"])
        .withMessage("El tipo debe ser 'juego' o 'consola'"),
    body("precio")
        .isFloat({ gt: 0 })
        .withMessage("El precio debe ser mayor que 0"),
    body("cantidad")
        .isInt({ min: 0 })
        .withMessage("La cantidad debe ser un número entero mayor o igual a 0")
];

// Rutas para productos
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", validarProducto, postProduct);
router.put("/:id", validarProducto, putProduct);
router.delete("/:id", deleteProduct);

export default router;
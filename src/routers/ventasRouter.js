import { Router } from "express";
import { body } from "express-validator";
import { 
    getVentas, 
    getVenta, 
    postVenta, 
    getEstadisticasVentas,
    getVentasPorFecha
} from "../controllers/ventasController.js";

const router = Router();

// Validaciones para ventas
const validarVenta = [
    body("producto")
        .isMongoId()
        .withMessage("El ID del producto debe ser válido"),
    body("cantidadVendida")
        .isInt({ min: 1 })
        .withMessage("La cantidad vendida debe ser un número entero mayor que 0")
];

// Rutas para ventas
router.get("/", getVentas);
router.get("/estadisticas", getEstadisticasVentas);
router.get("/por-fecha", getVentasPorFecha);
router.get("/:id", getVenta);
router.post("/", validarVenta, postVenta);

export default router;

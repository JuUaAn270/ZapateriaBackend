const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/empleados",      cors(), controller.readEmpleados);   // Read All
router.get    ("/empleados/:id",  cors(), controller.readEmpleado);    // Read
router.delete ("/empleados/:id",  cors(), controller.deleteEmpleado);  // Delete
router.put    ("/empleados/:id",  cors(), controller.updateEmpleado);  // Update
router.post   ("/empleados",      cors(), controller.createEmpleado);  // Create

router.get    ("/zapatos",     cors(), controller.readZapatos);  // Read All
router.get    ("/zapatos/:id", cors(), controller.readZapato);   // Read
router.delete ("/zapatos/:id", cors(), controller.deleteZapato); // Delete
router.put    ("/zapatos/:id", cors(), controller.updateZapato); // Update
router.post   ("/zapatos",     cors(), controller.createZapato); // Create


module.exports = router;
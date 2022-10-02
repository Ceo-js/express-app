const express = require( "express" ),
      router = express.Router(),
      productsController = require( "../controllers/ProductsController" );
/* ------------------------------- */


router.get( "/", productsController.index );
router.get( "/erase/:id", productsController.erase );
router.get( "/create/:id", productsController.create );


/* [ module ]
================================== */
module.exports = router;
const express = require( "express" ),
      router = express.Router(),
      productsController = require( "../controllers/products" );
/* ----------------------------------- */


router.get( "/", productsController.index );
router.get( "/:id", productsController.cerveja01 );


/* [ module ]
===================================== */
module.exports = router;
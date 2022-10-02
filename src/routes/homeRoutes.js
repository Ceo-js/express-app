const express = require( "express" ),
      router = express.Router(),
      homeController = require( "../controllers/HomeController" );
/* ------------------------------- */


router.get( "/", homeController.index );


/* [ module ]
================================== */
module.exports = router;
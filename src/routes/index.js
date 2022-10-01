const express = require( "express" ),
      router = express.Router(),
      index_controller = require( "../controllers/index" );
/* ------------------------------ */


router.get( "/", index_controller.index );


/* [ module ]
============================ */
module.exports = router;
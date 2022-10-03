const express = require( "express" ),
      router = express.Router(),
      seriesController = require( "../controllers/series" );
/* ------------------------------------------------------ */


router.get( "/", seriesController.index );
router.get( "/:id", seriesController.serieId );


/* [ module ]
============================ */
module.exports = router;
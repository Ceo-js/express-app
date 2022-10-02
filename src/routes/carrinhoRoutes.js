const express = require( "express" ),
      router = express.Router(),
      CarrinhoController = require('../controllers/CarrinhoController');
/* ------------------------------- */


router.get( "/:item", CarrinhoController.addItem );


/* [ module ]
================================== */
module.exports = router;
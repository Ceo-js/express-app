const path = require( "path" );
/* ---------------------------- */


let productsController = {
    index: ( req, res ) => {
        res.sendFile( path.join( __dirname, "../views/products.html" ) );
    },
    create: "",
    cerveja01: ( req, res ) => {
        res.send( req.params );
    }
};


/* [ module ]
============================== */
module.exports = productsController;
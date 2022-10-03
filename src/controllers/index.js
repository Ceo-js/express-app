const path = require( "path" );
/* ---------------------------- */


let indexController = {
    index: ( req, res ) => {
        res.sendFile( path.join( __dirname, "../views/index.html" ) );
    },
};


/* [ module ]
============================== */
module.exports = indexController;
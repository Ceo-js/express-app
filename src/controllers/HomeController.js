const path = require( "path" );

let homeController = {
    index: ( req, res ) => {
        res.sendFile( path.join( __dirname, "../views/home.html" ) );
    },
};


/* [ module ]
========================= */
module.exports = homeController;
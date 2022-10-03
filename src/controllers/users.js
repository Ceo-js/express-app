const path = require( "path" );
/* ---------------------------- */


let usersController = {
    index: ( req, res ) => {
        res.sendFile( path.join( __dirname, "../views/users.html" ) );
    },
};


/* [ module ]
============================== */
module.exports = usersController;
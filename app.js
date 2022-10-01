const lyh = require( "lyhstack" ),
      express = require( "express" ),
      app = express(),
      router = express.Router(),
      path = require( "path" );
/* ---------------------------------- */


/* [ properties ]
=========================== */
let gate = process.env.PORT || 7879,
    indexRoutes = require( "./src/routes/index.js" );


/* [ routes ]
========================== */
app.get( "/", indexRoutes );

/* [ bootstrap ]
=========================== */
app.use( express.static( path.join( __dirname, "src/public" ) ) );
app.use( "/", router );
app.listen( gate, print( `\x1b[40m-----------[ Live at: ]-----------
    \x1b[33m[ http://localhost:${gate} ]\x1b[0m
\x1b[40m----------------------------------\x1b[0m` ) );
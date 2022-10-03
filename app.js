const lyh = require( "lyhstack" ),
      express = require( "express" ),
      app = express(),
      router = express.Router(),
      path = require( "path" );
/* -------------------------------- */


/* [ properties ]
=================================== */
let gate = process.env.PORT || 7879,
    indexRouter = require( "./src/routes/index" ),
    productsRouter = require( "./src/routes/products" ),
    seriesRouter = require( "./src/routes/series" ),
    usersRouter = require( "./src/routes/users" );


/* [ routes ]
=================================== */
app.use( "/", indexRouter );
app.use( "/products", productsRouter );
app.use( "/users", usersRouter );
app.use( "/series", seriesRouter );

/* [  ]
=================================== */


/* [ server bootstrap ]
=================================== */
app.use( express.static( path.join( __dirname, "src/public" ) ) );
app.use( "/", router );
app.listen( gate, print( `---------------------------
Live at: \x1b[33m[ http://localhost:${gate} ]\x1b[0m
Users: \x1b[33m[ http://localhost:${gate}/users ]\x1b[0m
Products: \x1b[33m[ http://localhost:${gate}/products ]\x1b[0m
---------------------------` ) );
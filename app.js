const lyh = require( "lyhstack" ),
      express = require( "express" ),
      app = express(),
      router = express.Router(),
      path = require( "path" );
/* ------------------------------- */


/* [ properties ]
================================ */
let gate = process.env.PORT || 7879,
    homeRoutes = require( "./src/routes/homeRoutes" ),
    productsRoutes = require( "./src/routes/productsRoutes" );

/* [ routes ]
================================ */
app.get( "/", homeRoutes );
app.use( "/products", productsRoutes );

/* [ bootstrap ]
================================ */
app.use( express.static( path.join( __dirname, "./src/public" ) ) );
app.use( "/", router );
app.listen( gate, print( `------- [ server's up ] -------

Live at: \x1b[34m[ http://localhost:${gate} ]\x1b[0m
home: \x1b[34m[ http://localhost:${gate}/ ]\x1b[0m
products: \x1b[34m[ http://localhost:${gate}/products ]\x1b[0m
erase: \x1b[32m[ http://localhost:${gate}/products/erase/fsd ]\x1b[0m
create: \x1b[32m[ http://localhost:${gate}/products/create/fsd ]\x1b[0m

------- [ server's up ] -------` ) );
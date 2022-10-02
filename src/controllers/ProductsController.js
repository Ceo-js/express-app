const path = require( "path" );

let productsController = {
    index: ( req, res ) => {
        res.sendFile( path.join( __dirname, "../views/products.html" ) );
    },
    erase: ( req, res ) => {
        let {id} = req.params;
        res.send( `Deletando o produto com o id: ${id}` );
    },
    create: ( req, res ) => {
        let {id} = req.params;
        res.send( `Criando o produto com o id: ${id}` );
    },
};


/* [ module ]
========================= */
module.exports = productsController;
const path = require( "path" ),
      series = require( "../modules/series.js" );
/* ----------------------------- */


let seriesController = {
    index( req, res ) {
        res.sendFile( path.join( __dirname, `../views/series.html` ) );
    },
    serieId( req, res ) {
        let { id } = req.params,
            pageId = 0;
        
        // res.send(
        //     series.find( v => {
        //         if( v.id == id ) {
        //             return v;
        //         }
        //     } )
        // );
        
        series.find( v => v.id == id ? pageId = id : pageId = 0 );

        res.sendFile( path.join( __dirname, "../views", `${pageId}.html` ) );
    },
};


/* [ module ]
========================== */
module.exports = seriesController;
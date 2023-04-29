const express = require( 'express' )
const app = express()

const fileUpload = require("express-fileupload")

app.use(express.json())
app.use(fileUpload())

app.post('/', ( req, res ) => {
    console.log('====================================');
    console.log(req.files);
    console.log( '====================================' );
    const { nima } = req.files
    nima.mv( process.cwd() + "/uploads/" + Date.now() + nima.mimetype.split( "/" )[1] )
    res.send("gf")
} )
 
app.listen( 4000, () => {
     console.log('====================================');
     console.log(4000);
     console.log('====================================');
 })
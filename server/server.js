const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 3000

const userRoutes = require('./routes/user.routes')
const app = express()
app.use(cors())


app.use(bodyParser.json())
require("./routes/user.routes")(app);







app.get('/', function(req,res){
    res.send('Hello from server')
})

app.listen(PORT, function(){
    console.log('Server running on localhost: ' + PORT)
})


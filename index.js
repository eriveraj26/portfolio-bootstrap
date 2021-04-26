const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const path = require('path')


app.get ('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})
app.get ('/education', function(req,res) {
    res.sendFile(path.join(__dirname + '/education.html'))
})
app.get ('/whereiam', function(req,res) {
    res.sendFile(path.join(__dirname + '/whereiam.html'))
})
app.get ('/whereimgoing', function(req,res) {
    res.sendFile(path.join(__dirname + '/whereimgoing.html'))
})




app.listen(4000, function() {
    console.log("Listening on port 4000...")
})
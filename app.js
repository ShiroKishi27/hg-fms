const express = require('express')
const path = require("path");
const app = express()
const port = 5000

//Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + '/public/css'))
app.use('/img',express.static(__dirname + '/public/img'))

app.set('views','./views')
app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render('landingpage')
})

app.get(['/login', '/register', '/signup'], (req, res) => {
  res.render('signin'); 
});

app.get(['/home'],(req,res) => {
    res.render('home')
})

app.get('/register',(req,res) => {
    res.render('signin')
})

app.get('/login',(req,res) => {
    res.render('signin')
})

app.get('/about',(req,res) => {
    res.render('about')
})

app.get('/contacts',(req,res) => {
    res.render('contacts')
})

app.get('/services',(req,res) => {
    res.render('services')
})

app.use('*',(req,res) => {
    res.render('notfound')
})





app.listen(port, () => console.info(`Listening on port ${port}, http://localhost:${port}/`))
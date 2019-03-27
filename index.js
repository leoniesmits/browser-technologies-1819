// Third party modules
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fs = require('fs')
// const dataJson = require('./app/data/ingredients.json')

// Create new express app in const app
const app = express()

// Add a config object and define port
const config = {
    port: 2000
}

async function dataParse() {
    // let data = fs.readFile('./app/data/ingredients.json', (err, data) => {  
    //     if (err) throw err;
    //     return JSON.parse(data);
    // });



};

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'))

// const router = require('./router/router.js')

// Link templating engine to my express app
app.set('view engine', 'ejs');

// Create a route for home
app.get('/', function (req, res) {
    res.render('home');
})

app.get('/quiz', function (req, res) {
    res.render('quiz')
})

// app.get('/quiz', function (req, res) {
//     res.render('quiz' , {

//     })
// })

app.get('/quiz/1', function (req, res) {
    res.render('quiz/1')
})

app.post('/quiz/2', function (req, res) {
    const state = {
        routine: req.body.routine,
        skin_type: req.body.skin_type
    };

    console.log(state)

    res.cookie('filled_in_values', JSON.stringify(state), { maxAge: 900000, httpOnly: true })
    res.render('quiz/2', state)
})

app.get('/quiz/2', function (req, res) {
    if (req.cookies && req.cookies.filled_in_values) {
        const cookieValue = JSON.parse(req.cookies.filled_in_values)
        console.log(cookieValue)
        res.render('quiz/2', {
            skin_type: cookieValue.skin_type,
            routine: cookieValue.routine
        })
    } else {
        res.redirect('/quiz/1')
    }
})

app.post('/quiz/3', function (req, res) {
    console.log(res.body)
    const state = {
        routine: req.body.routine,
        skin_type: req.body.skin_type
    }
    console.log(state)
    res.render('quiz/3', state)
})

app.post('/quiz/4', function (req, res) {
    console.log(res.body)
    const state = {
        skin_type: req.body.skin_type,
        routine: req.body.routine,
        skin_concern: req.body.skin_concern
    }
    console.log(state)
    res.render('quiz/4', state)
})

app.post('/quiz/result', async function (req, res) {
    await fs.readFile('./app/data/ingredients.json', (err, data) => {  
        if (err) throw err;
        const state = {
            skin_type: req.body.skin_type,
            routine: req.body.routine,
            skin_concern: req.body.skin_concern.split(','),
            shave: req.body.shave,
            makeup: req.body.makeup,
            data:  JSON.parse(data)
        }
        console.log(state)
        res.render('quiz/result', state)
    });    
})

// app.post('/quiz/3', function (req, res) {
//     console.log(req)
//     const cookieValue = JSON.parse(req.cookies.filled_in_values);
//     cookieValue.state = eq.body.concern
//     res.cookie('filled_in_values', JSON.stringify(cookieValue), { maxAge: 900000, httpOnly: true })
//     res.render('quiz/3', cookieValue)
// })


app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('../config/passport-config')
const usercontroller = require('../controller/user-controller')
const homecontroller = require('../controller/home-controller')

initializePassport(
    passport
);

let initWebRouter = function (app) {

    app.use(flash());
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(methodOverride('_method'))

    function checkAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login')
    }

    function checkNotAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return res.redirect('/')
        }
        next();
    }

    // Route 
    app.post('/user/signup', usercontroller.signup);
    app.post('/user/login', usercontroller.login);
    app.post('/user/logout', usercontroller.logout);

    // home login
    app.get('/login', checkNotAuthenticated, homecontroller.login)

    app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    // home page
    app.get('/', homecontroller.homepage)

    // signup
    app.get('/signup', checkNotAuthenticated, (req, res) => {

        res.render('signup.ejs');
    });

    app.post('/signup', checkNotAuthenticated, async (req, res) => {
        try {
            res.redirect('/login');
        } catch {
            res.redirect('/signup');
        }
    });

    app.delete('/logout', (req, res) => {
        req.logOut()
        res.redirect('/login')
    });
}

module.exports = {
    initWebRouter: initWebRouter,
}

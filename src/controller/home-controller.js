let login = async (req, res) => {
    res.render('login.ejs');
}
let signup = async (req, res) => {
    res.render('signup.ejs');
}
let logout = async (req, res) => {
    res.render('login.ejs');
}
let homepage = async (req, res) => {
    res.render('home.ejs');
}

module.exports = {
    login: login,
    signup: signup,
    logout: logout,
    homepage: homepage,
}
const e = require('express');
const db = require('../config/database-config');

const User = function (user) {
    this.id = user.id_user;
    this.name = user.name_user;
    this.pass = user.pass_user;
    this.sdt = user.sdt_user;
}

User.checkPhoneUser = (phone) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM user WHERE sdt_user = ?', phone, (err, res) => {
                if (err) {
                    Error.code1001(res);
                } else {
                    console.log('Check phone number successfully');
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};

User.checkPassUser = (phoneNumber, pass) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`SELECT * FROM user WHERE pass_user ='${pass}' AND sdt_user ='${phoneNumber}'`, (err, res) => {
                if (err) {

                    Error.code1001(res);
                } else {

                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};


User.updateTokenUser = (idUser, token) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`UPDATE user SET token='${token}' WHERE id_user = '${idUser}'`, (err, res) => {
                if (err) {
                    Error.code1001(res);
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};
User.checkUserByToken = (token) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM user WHERE Token = ?', token, (err, res) => {
                if (err) {
                    Error.code1001(res);
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};


User.deleteUser = (id) => {
    //console.log(id);

    return new Promise(async (resolve, reject) => {
        try {
            db.query(`DELETE FROM user WHERE id_user = '${id}'`, (err, res) => {
                if (err) {
                    console.log('tai sao loi o day');
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    });
};
User.updatePassWorkUser = (idUser, passWord) => {
    //  console.log(idUser+passWord);
    return new Promise((async (resolve, reject) => {
        try {
            db.query(`UPDATE user SET pass_user='${passWord}' WHERE sdt_user = '${idUser}'`, (err, res) => {
                if (err) {
                    Error.code1001(res);
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};

User.checkuserbyid = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            db.query('SELECT * FROM user WHERE id_user = ?', id, (err, res) => {
                if (err) {
                    Error.code1001(res);
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    }));
};

module.exports = User;

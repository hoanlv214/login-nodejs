const usermodel = require('../models/user-model')

let checkphoneuser = (phone) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.checkPhoneUser(phone);
            if (user != null && user != undefined) {
                if (user.length != 0) {
                    resolve(user[0]);
                }
                else {
                    resolve(null);
                }
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}

let checkPassUser = (phoneNumber, passUser) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.checkPassUser(phoneNumber, passUser);

            console.log(user);
            if (user != null && user != undefined) {
                if (user.length != 0) {
                    resolve(user[0]);
                }
                else {
                    resolve(null);
                }
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}

let updateTokenUser = (idUser, token) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.updateTokenUser(idUser, token);
            // console.log(user);
            if (user.changedRows == 1) {
                resolve(true);
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}

let updatePassWorkUser = (idUser, passWord) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.updatePassWorkUser(idUser, passWord);
            // console.log(user);
            if (user.changedRows == 1) {
                resolve(true);
            }
            else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    }));
}

let deleteUser = async (idUser) => {
    return new Promise((async (resolve, reject) => {
        try {
            let user = await usermodel.deleteUser(idUser);
            //  console.log("vao den vervices");
            //  console.log(user);
            if (user != null) {
                resolve(true);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}

let checkiduser = (id) => {
    return new Promise((async (resolve, reject) => {
        try {
            let data = await usermodel.checkuserbyid(id);
            if (data != 0) {
                //     console.log(data[0]);
                resolve(data[0]);
            }
            else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    }));
}
module.exports = {
    checkphoneuser: checkphoneuser,
    checkPassUser: checkPassUser,
    updateTokenUser: updateTokenUser,
    updatePassWorkUser: updatePassWorkUser,
    deleteUser: deleteUser,
    checkiduser: checkiduser,
}
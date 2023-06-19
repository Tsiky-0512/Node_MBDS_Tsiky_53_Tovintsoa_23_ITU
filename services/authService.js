
const bcrypt = require("bcrypt");
const User = require('../model/user');
const jwtService = require('../security/auth');
const { use } = require("../server");



const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10).then((hash) => {
            resolve(hash);
        }).catch((error) => { reject(error) });
    })
}


const comparePasswordencrypted = (inputPassword, databasePassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(inputPassword, databasePassword).then((valid) => {
            if (!valid) {
                resolve(true);
            }
            resolve(false);
        }).catch((error) => {
            reject(`Error on compare Password ${error}`);
        });
    })
}

const saveUser = async (userBody) => {
    try {
        const userModel = new User();
        userModel.name = userBody.name;
        userModel.email = userBody.email;
        userModel.password = await encryptPassword(userBody.password);
        userModel.role = userBody.role;
        return new Promise((resolve, reject) => {
            userModel.save((err) => {
                if (err) {
                    reject(`cant post user :  ${err.message}`);
                }
                resolve(userModel);
            })
        })
    } catch (error) {
        throw `ATOOOO Error : ${error}`;
    }
}

const checkPasswordUser = async (user) => {
    try {

        return new Promise((resolve, reject) => {
            User.findOne({ email: user.email }, async (err, userBase) => {
                if (err) { reject(err) };
                const userPasswordEncrypted = await encryptPassword(user.password);
                const resultCheck = await comparePasswordencrypted(userPasswordEncrypted, userBase.password);
                if (resultCheck) {
                    const res = {
                        email : userBase.email,
                        name : userBase.name,
                        role : userBase.role,
                        token : jwtService.generateToken(user._id),
                    }
                    resolve(res);
                }
                reject('Password incorrect');
            });
        });
    } catch (error) {
        throw `error : ${error}`
    }
}

module.exports = { saveUser, checkPasswordUser };

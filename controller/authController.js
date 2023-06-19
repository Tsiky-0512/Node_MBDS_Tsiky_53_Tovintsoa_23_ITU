const userService = require("../services/authService");

const addUser = async (req,res) => {
    try {
        const user = await userService.saveUser(req.body.user);
        res.status(200).json({
            data:user,
            status:200
        })
    } catch (error) {
        res.status(400).json({
            data:error,
            status:400
        })
    }
}

const loginUser = async (req,res) => {
    try {
        const user = await userService.checkPasswordUser(req.body.user);
        res.status(200).json({
            data:user,
            status:200
        })
    } catch (error) {
        res.status(400).json({
            data:error,
            status:400
        })
    }
}


module.exports = { addUser,loginUser };

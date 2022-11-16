import pool from "../configs/connectDB"

let getAllUsers = async (req, res) => {
    let [row, fields] = await pool.execute("select * from users");

    return res.status(200).json({
        message: 'ok',
        data: row,
    })
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: "Error"
        })
    }
    await pool.execute('insert into users (firstName,lastName,email,address) values (?,?,?,?)', [firstName, lastName, email, address]);
    return res.status(200).json({
        message: "ok"
    })
}

let updateUser = async (req, res) => {
    let { id, firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: "Error"
        })
    }
    await pool.execute('UPDATE users SET firstName=?,lastName=?,email=?,address=? WHERE id=?', [firstName, lastName, email, address, id]);
    return res.status(200).json({
        message: "ok"
    })
}

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: "Error"
        })
    }
    await pool.execute('delete from users where id=?', [userId]);
    return res.status(200).json({
        message: "ok"
    })
}

module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
}
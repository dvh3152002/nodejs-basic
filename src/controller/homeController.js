import pool from '../configs/connectDB'

console.log("Creating connection pool...");

let getHomePage = async (req, res) => {
    const [rows] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute('select * from users where id=?', [userId]);
    return res.send(JSON.stringify(user));
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users (firstName,lastName,email,address) values (?,?,?,?)', [firstName, lastName, email, address]);

    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where id=?', [userId]);
    return res.redirect('/');
}

let getEditUser = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('select * from users where id=?', [id]);
    return res.render('updateUser.ejs', { dataUser: user[0] });
}

let postUpdateUser = async (req, res) => {
    let { id, firstName, lastName, email, address } = req.body;
    await pool.execute('UPDATE users SET firstName=?,lastName=?,email=?,address=? WHERE id=?', [firstName, lastName, email, address, id]);
    return res.redirect('/');
}

module.exports = {
    getHomePage, getDetailPage, createNewUser, deleteUser, getEditUser, postUpdateUser
}
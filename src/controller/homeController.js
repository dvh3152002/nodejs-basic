import pool from '../configs/connectDB'

console.log("Creating connection pool...");

let getHomePage = async (req, res) => {
    const [rows] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    const [user] = await pool.execute('select * from users where id=?', [userId]);
    return res.send(JSON.stringify(user));
}

module.exports = {
    getHomePage, getDetailPage
}
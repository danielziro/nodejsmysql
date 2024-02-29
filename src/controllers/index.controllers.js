
import { pool } from '../db.js'
import jwt from "jsonwebtoken";


export const login = async (req, res) => {
    const { userName, password } = req.body;
    const [userLogin] = await pool.query("SELECT * FROM user WHERE userName = ? and password = ?", [userName, password]);
    if (userLogin.length) return res.json({

        message: "User Not Fount or Invalid Password"
    })

    const token = jwt.sign({ id: userLogin[0].id }, 'abbbcc', { expiresIn: '1h' });

    res.json({ token })

}

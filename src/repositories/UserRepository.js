import { pool } from "../db.js";

class UserRepository {
  async getUsers() {
    const [rows] = await pool.query("SELECT * FROM user");
    return rows;
  }

  async getUser(id) {
    const [rows] = await pool.query("SELECT * FROM user WHERE id = ?", [id]);
    if (rows.length === 0) {
      throw new Error("User not found");
    }
    return rows[0];
  }

  async createUser(document, fullName, edad, userName, password) {
    const [rows] = await pool.query(
      "INSERT INTO user (document, fullName, edad, userName,password) VALUES (?, ?, ?, ?,?)",
      [document, fullName, edad, userName, password]
    );
    return {
      id: rows.insertId,
      document,
      fullName,
      edad,
      userName,
    };
  }

  async deleteUser(id) {
    const [result] = await pool.query("DELETE FROM user WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      throw new Error("User not found");
    }
  }

  async updateUser(id, fullName, edad) {
    const [result] = await pool.query(
      "UPDATE user SET fullName = ?, edad = ? WHERE id = ?",
      [fullName, edad, id]
    );
    if (result.affectedRows === 0) {
      throw new Error("User not found");
    }
    const [rows] = await pool.query("SELECT * FROM user WHERE id = ?", [id]);
    return rows[0];
  }

  async getUserbyPassUser(userName,password) {
    const [rows] = await pool.query("SELECT * FROM user WHERE userName = ? and password = ?", [userName, password])
    if (rows.length === 0) {
      throw new Error("User not found");
    }
    return rows[0];
  }


}

export default new UserRepository();
const connect = require('../db/connect');

module.exports = class userController {
    static async createUser(req, res) {
        const { cpf, email, password, name } = req.body
        const query = `INSERT into user (cpf=?, email=?, password=?, name=?)`
        const values = [cpf, email, password, name]

        if (!cpf || !email || !password || !name) {
            return res.status(400).json({ error: "All fields are required!" })
        }
        if (isNaN(cpf) || cpf.length !== 11) {
            return res.status(400).json({ error: "Invalid CPF. Must contain 11 numeric characters." })
        }
        if (!email.include('@')) {
            return res.status(400).json({ error: "Invalid Email. Must contain @" })
        }

        try {
            connect.query(query, values, (err) => {
                if (err) {
                    if (err === "ER_DUP_ENTRY") {
                        return res.status(400).json({ error: "CPF or Email already registered." })
                    }
                    return res.status(400).json({ error: "" })
                }
            })
        } catch (error) {
            
        }
    }
}
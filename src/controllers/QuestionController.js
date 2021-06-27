const Database = require('../db/config')

module.exports = {
    index(req, res){
        const roomId = req.params.roomId
        const questionId = req.param.question
        const action = req.params.action
        const password = req.body.password

        console.log(`room - ${roomId}, questionId = ${questionId}
        action = ${action}, password = ${password}`)
    },

    async create(req, res){
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        await db.run(`INSERT INTO questions(
            title,
            room,
            read
        )VALUES(
            "${question}",
            ${roomId}
            0
        )`)

        req.redirect(`/room/${roomId}`)
    }
}
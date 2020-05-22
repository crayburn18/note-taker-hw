const fs = require("fs");
const path = require("path");

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        let createNote = fs.readFileSync(path.join(__dirname + "/../db/db.json"),"utf8");

        return res.json(JSON.parse(createNote));

    });

    app.post("/api/notes", (req, res) => {
        let createNote = fs.readFileSync(path.join(__dirname + "/../db/db.json"),"utf8");

        const createNoteParse = JSON.parse(createNote)

        const newNote = req.body;
        
        const createID = new Date().getTime();

        newNote.id = createID;

        createNoteParse.push(newNote);

        fs.writeFileSync(path.join(__dirname + "/../db/db.json"), JSON.stringify(createNoteParse))

        res.json(newNote)

    });

    app.delete("/api/notes/:id", (req, res) => {
        let createNote = fs.readFileSync(path.join(__dirname + "/../db/db.json"),"utf8");

        const createNoteParse = JSON.parse(createNote)

        const newID = parseInt(req.params.id);

        let newNote = createNoteParse.filter((note) => {

            console.log(note.id, newID, note.id === newID)

            return note.id !== newID;

        });
        console.log(newNote);

        fs.writeFileSync(path.join(__dirname + "/../db/db.json"), JSON.stringify(newNote));

        res.JSON(newNote);

    })
};
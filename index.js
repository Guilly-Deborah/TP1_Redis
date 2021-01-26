const express = require('express')
const app = express()

app.get('/donnee', (req,res) => {
    res.send("blabla")
})

app.listen(3000, () => {
    console.log('Serveur connecté au port 3000')
})
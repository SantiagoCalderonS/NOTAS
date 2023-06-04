const express= require("express")
const router= express.Router()
const {ver, poner}= require("./controllers")

router.get("/ver", ver )
router.post("/poner", poner)

module.exports= router
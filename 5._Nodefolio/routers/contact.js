import express from "express";
const router = express.Router();
import nodemailer from "nodemailer"
const email = "";
const pwd = "";
import fs from "fs"


router.post("/api/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/contact");
});



export default router 
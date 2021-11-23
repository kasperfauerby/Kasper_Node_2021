import express from "express";
const router = express.Router();

import { createPage } from "./render.js";

/* Ready the pages */
const frontpagePage = createPage("frontpage/frontpage.html", {title: "Nodefolio | Welcome"});
const projectsPage = createPage("projects/projects.html", {title: "Nodefolio | Projects"});
const contactPage = createPage("contact/contact.html", {title: "Nodefolio | Contact"});
const cvPage = createPage("cv/cv.html", {title: "Nodefolio | CV"});


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

app.get("/cv", (req, res) => {
    res.send(cvPage);
});


export default router
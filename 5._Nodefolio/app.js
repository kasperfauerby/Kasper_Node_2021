const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());

const { createPage } = require("./render.js");

/* Import and use routes */

const pageRouter = require("./pageRouter.js");
const projectsRouter = require("./routers/projects.js");
const contactRouter = require("./routers/contact.js");


app.use(projectsRouter.router);
app.use(pageRouter.router);
app.use(contactRouter.router);

// const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html", "utf8");
// const projects = fs.readFileSync("./public/pages/projects/projects.html", "utf8");

// const contactPage = fs.readFileSync("./public/pages/contact/contact.html", "utf8");

/* Ready the pages */
const frontpagePage = createPage("frontpage/frontpage.html", {title: "Nodefolio | Welcome"});
const projectsPage = createPage("projects/projects.html");
const contactPage = createPage("contact/contact.html");
const cvPage = createPage("cv/cv.html")


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

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
       console.log("error is", error); 
    }
    console.log("The server is running on port", PORT);
});
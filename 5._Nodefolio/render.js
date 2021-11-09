const fs = require("fs");
const nav = fs.readFileSync("./public/components/nav/nav.html", "utf8");
const footer = fs.readFileSync("./public/components/footer/footer.html", "utf8");

function createPage(path, options) {

const page = fs.readFileSync(`./public/pages/${path}`, "utf8")
return (nav + page + footer).replace("%%DOCUMENT_TITLE%%", options?.title || "Nodefolio");
}



module.exports = {
    createPage
}
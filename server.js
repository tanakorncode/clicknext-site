const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

/* const express = require('express')
const serveStatic = require('serve-static')
const PORT = 8081
const app = express()
app.use(serveStatic('dist', { index: ['index.html', 'index.htm'] })) */
app.listen(PORT, () => console.log(`app listening on http://localhost:${PORT}`));

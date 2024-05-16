import express from 'express';

const app = express();
const port = 8001;

app.get("/", (req, res) => {
                                res.send("ok");
})


app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
})
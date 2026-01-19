const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {connectToMongoDB} = require('./connect');
const { checkFroAuthentication, restrictToLoggedinUserOnly } = require('./middlewares/auth');
const URL = require('./models/url');


const urlRoute = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const userRoute = require('./routes/user');


const app = express();
const port = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortener")
.then(() => {
    console.log("Connected to MongoDB");
})

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkFroAuthentication);

app.use("/url",restrictToLoggedinUserOnly(['NORMAL', 'ADMIN']), urlRoute);
app.use("/user", userRoute);
app.use("/", staticRouter);

app.get('/url/:shortId', async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    });
    return res.redirect(entry.redirectUrl);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
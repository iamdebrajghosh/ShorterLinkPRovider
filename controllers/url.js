const shortid = require('shortid');
const Url = require('../models/url');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'URL is required'});
    const shortID = shortid();
    await Url.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });
    return res.render('home', {id: shortID});
    // return res.status(201).json({id: shortID});
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const url = await Url.findOne({shortId});
    return res.json({
        totalClicks: url.visitHistory.length,
        analytics: url.visitHistory
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
};
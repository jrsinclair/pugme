'use strict';
/*eslint env-node:true*/
var request = require('request'),
    cheerio = require('cheerio'),
    Promise = require('bluebird');

Promise.promisifyAll(request);

function run() {
    request.getAsync('http://pugbomb.me/').spread(function(req, body) {
        var $ = cheerio.load(body);
        process.stdout.write($('.pug img').attr('src'));
    });
}

module.exports = run;

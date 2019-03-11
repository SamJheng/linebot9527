var linebot = require('linebot');
var express = require('express');
const lineSetting = {
    channelId: '1553715069',
    channelSecret: '8ce86563f45b99dedc137f7a984ca9ea',
    channelAccessToken: '85Bj12LVNLWtyDXRenIqMoR7ue6dOLJdOJ9UZDTZI7oWMDdwMKEG/Q7+jr10YdqVrr9EehJemL3mZ+Mq8hFZwMQutm4EgK4L1Iv6XCg82kGddIwOrInwH2czLiPEwO/VmnihJ03sXW+mDTUW9YKeXAdB04t89/1O/w1cDnyilFU='
}
var bot = linebot(lineSetting);
bot.on('message', function (event) {
    console.log(event); //把收到訊息的 event 印出來看看
});
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
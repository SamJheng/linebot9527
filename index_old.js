const linebot = require('linebot');
const express = require('express');
const schedule = require('node-schedule');
const lineSetting = {
    channelId: '1553715069',
    channelSecret: '8ce86563f45b99dedc137f7a984ca9ea',
    channelAccessToken: '85Bj12LVNLWtyDXRenIqMoR7ue6dOLJdOJ9UZDTZI7oWMDdwMKEG/Q7+jr10YdqVrr9EehJemL3mZ+Mq8hFZwMQutm4EgK4L1Iv6XCg82kGddIwOrInwH2czLiPEwO/VmnihJ03sXW+mDTUW9YKeXAdB04t89/1O/w1cDnyilFU='
}
const bot = linebot(lineSetting);
const linebotParser = bot.parser();
const app = express();
const userId = 'U482763170d993f5baf750dbdd784630a';
app.post('/', linebotParser);
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
    const replyMsg = `reply:${event.message.text}`;
    event.reply(replyMsg).then(function (data) {
    // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
        console.log(error);
    });
});
setTimeout(function () {
    
    const sendMsg = "伺服器已經啟動...";
    bot.push(userId, [sendMsg]);
    console.log('userId: ' + userId);
    console.log('send: ' + sendMsg);
}, 3000);
const date = new Date('2019-3-11 22:11');
schedule.scheduleJob(date, function(){
    bot.push(userId, ['現在時間'+date]);
    console.log('The world is going to end today. time:'+date);
});

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
    console.log('[BOT已準備就緒]');
    
});

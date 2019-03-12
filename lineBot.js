const linebot = require('linebot');
const schedule = require('node-schedule');
function LineBot(){
    const bot = linebot({
        channelId: '1553715069',
        channelSecret: '8ce86563f45b99dedc137f7a984ca9ea',
        channelAccessToken: '85Bj12LVNLWtyDXRenIqMoR7ue6dOLJdOJ9UZDTZI7oWMDdwMKEG/Q7+jr10YdqVrr9EehJemL3mZ+Mq8hFZwMQutm4EgK4L1Iv6XCg82kGddIwOrInwH2czLiPEwO/VmnihJ03sXW+mDTUW9YKeXAdB04t89/1O/w1cDnyilFU='
    });
    this.linebotParser = bot.parser();
    this.userId = 'U482763170d993f5baf750dbdd784630a';
    this.botStart = ()=>{
        // 先延遲三秒
        console.log(bot);
        setTimeout(function () {
            const sendMsg = "伺服器已經啟動...";
            bot.push(this.userId, [sendMsg]);
            console.log(sendMsg);
        }, 3000);
    }
    this.replyMessage = ()=>{
        bot.on('message', function (event) {
            // event.message.text是使用者傳給bot的訊息
            const replyMsg = `你剛剛說:${event.message.text}`;
            // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
            event.reply(replyMsg)
            .then(function (data) {
                // 當訊息成功回傳後的處理
            })
            .catch(function (error) {
                // 當訊息回傳失敗後的處理
                console.log(error);
            });
        });
    }
    this.timeUpReply = (date)=>{
        schedule.scheduleJob(date, function () {
            bot.push(userId, ['現在時間'+date]);
            console.log('The world is going to end today. time:'+date);
        });
    }
}
module.exports = LineBot;
const express = require('express');

function Server(){
    this.app = express();
    this.listenerPost = (linebotParser)=>{
        this.app.post('/', linebotParser);
    }
    this.listenerProt = ()=>{
        //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
        const server = this.app.listen(process.env.PORT || 8080, function () {
            const port = server.address().port;
            console.log("[BOT已準備就緒] on port", port);
        });
    }
}
module.exports = Server;
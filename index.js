const LineBot = require('./lineBot');
const Server = require('./server');

let lineBot = new LineBot();
let server = new Server();
server.listenerPost(lineBot.linebotParser);
server.listenerProt();
lineBot.botStart();
lineBot.replyMessage();
lineBot.timeUpReply(new Date('2019-3-12 15:02'));



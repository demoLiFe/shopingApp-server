var express = require('express')
var expressWs = require('express-ws');

var router = express.Router();

expressWs(router)

//随机生成nanoid
const nanoid = (size = 21)=>{
    let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
    let id = ''
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    let i = size
    while (i--) {
      // `| 0` is more compact and faster than `Math.floor()`.
      id += urlAlphabet[(Math.random() * 64) | 0]
    }
    return id
  };

router.ws('/api/session/list', function (ws, req) {
    const sessionData = [
        {
            chatid: 1,
            avatar: '/static/missing-face.png',
            uName: '申的帅',
            msg: '今天天气不错',
            msgType: 0,
            noRead: 8,
            dateTime: '2022-10-12'
        },
        {
            chatid: 2,
            avatar: '/static/notice.png',
            msg: '系统临时维护通知',
            title: '系统通知',
            msgType: 1,
            noRead: 8,
            dateTime: '2022-10-12'
        }
    ]

    ws.send(JSON.stringify(sessionData));
    ws.on('message', function (msg) {
        console.log(msg)
        // ws.send('2222',msg)  
    })
})

const msgData = [
    {
        dateTime: '2022-10-15 22:00',
        list: [
            {
                id:nanoid(32),
                uid: 'syh-123456',
                avatar: 'https://img2.baidu.com/it/u=1336340007,2015118511&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                nickName: '',
                msg: '今天天气真好',
                pic: '',
                voice: ''
            },
            {
                id:nanoid(32),
                uid: 'syh-888888',
                avatar: 'https://img0.baidu.com/it/u=3375911127,635571288&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665939600&t=7029e8b7be0870a89869b76310752358',
                nickName: '',
                msg: '是啊 真不错',
                pic: '',
                voice: ''
            },
        ]
    }
]



// const wss = expressWs(express()).getWss('/sockt/api/message/list')
let  timer = null;
router.ws('/api/message/list', function (ws, req) {
    ws.on('message', function (msg_data) {
        console.log(msg_data)
        if(!!msg_data){
            msgData[0].list.push(
                {
                    id:nanoid(32),
                    uid: JSON.parse(msg_data).user,
                    avatar: JSON.parse(msg_data).avatar,
                    nickName: '',
                    msg: JSON.parse(msg_data).msg,
                    pic: '',
                    voice: ''
                }
            ) 
        }
    }) 
     //模拟心跳 一秒发送一次
     timer = setInterval(()=>{
        ws.send(JSON.stringify(msgData));    
    },1000) 
    ws.on('close',function(){
        console.log('websockt关闭')
        clearInterval(timer)
    });
    ws.on('error',function(){
        clearInterval(timer)
    })
})


//通知列表
const noticeList = [
     {
         dateTime:new Date().getTime(),
         list:[
             {
                 id:nanoid(32),
                 noticeType:'系统通知',
                 img:'https://img2.baidu.com/it/u=2284125091,546481771&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1668099600&t=7428178edcf76b34ef552d9622060b3f',
                 title:'重要通知',
                 content:'关于系统维护，将于2022年11月10日 进行服务器维护 届时将无法使用该App,给你带来不便，还请谅解'
             }
         ]
     }
]

router.ws('/api/notice/list',function(ws,req){
    ws.send(JSON.stringify(noticeList));
    ws.on('message', function (msg) {
        console.log(msg)
        // ws.send('2222',msg)  
    });
    ws.on('close',function(){
        console.log('websockt关闭')
    });
    ws.on('error',function(){
        console.log('websockt出现错误')
    });   
})

module.exports = router;
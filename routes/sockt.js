var express = require('express')
var expressWs = require('express-ws');

var router = express.Router();

expressWs(router)

router.ws('/api/session/list', function (ws, req) {
    const data = [
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

    ws.send(JSON.stringify(data));
    ws.on('message', function (msg) {
        console.log(msg)
        // ws.send('2222',msg)  
    })
})

router.ws('/api/message/list', function (ws, req) {
    const data = [
        {
            dateTime: '2022-10-15 22:00',
            list: [
                {
                    uid: '888888',
                    avatar: 'https://img1.baidu.com/it/u=3353873514,1997887075&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
                    nickName: '',
                    msg: '今天天气真好',
                    pic: '',
                    voice: ''
                },
                {
                    uid: '000000',
                    avatar: 'https://img0.baidu.com/it/u=3375911127,635571288&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665939600&t=7029e8b7be0870a89869b76310752358',
                    nickName: '',
                    msg: '是啊 真不错',
                    pic: '',
                    voice: ''
                },
                {
                    uid: '000000',
                    avatar: 'https://img0.baidu.com/it/u=3375911127,635571288&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665939600&t=7029e8b7be0870a89869b76310752358',
                    nickName: '',
                    msg: '帅哥在干嘛呢',
                    pic: '',
                    voice: ''
                },
                {
                    uid: '888888',
                    avatar: 'https://img1.baidu.com/it/u=3353873514,1997887075&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
                    nickName: '',
                    msg: '你猜啊',
                    pic: '',
                    voice: ''
                },
                {
                    uid: '000000',
                    avatar: 'https://img0.baidu.com/it/u=3375911127,635571288&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665939600&t=7029e8b7be0870a89869b76310752358',
                    nickName: '',
                    msg: '直男 喝岩浆去吧 抽鞭炮 抽鞭炮 抽鞭炮 抽鞭炮',
                    pic: '',
                    voice: ''
                },
                {
                    uid: '888888',
                    avatar: 'https://img1.baidu.com/it/u=3353873514,1997887075&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
                    nickName: '',
                    msg: '我抽你大爷 你个二怂',
                    pic: '',
                    voice: ''
                },
                {
                    uid: '000000',
                    avatar: 'https://img0.baidu.com/it/u=3375911127,635571288&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665939600&t=7029e8b7be0870a89869b76310752358',
                    nickName: '',
                    msg: '拉黑 再见 狗东西！',
                    pic: '',
                    voice: ''
                },
                {
                    uid: '888888',
                    avatar: 'https://img1.baidu.com/it/u=3353873514,1997887075&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
                    nickName: '',
                    msg: '滚蛋',
                    pic: '',
                    voice: ''
                },
                {
                    uid: '888888',
                    avatar: 'https://img1.baidu.com/it/u=3353873514,1997887075&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
                    nickName: '',
                    msg: '什么玩意儿 我是你鸡哥',
                    pic: '',
                    voice: ''
                },
            ]
        }
    ]

    ws.send(JSON.stringify(data));
    ws.on('message', function (msg) {
        console.log(msg)
        data[0].list.push(
            {
                uid: '888888',
                avatar: 'https://img1.baidu.com/it/u=3353873514,1997887075&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
                nickName: '',
                msg: msg,
                pic: '',
                voice: ''
            }
        )
        ws.send(JSON.stringify(data));
        // ws.send('2222',msg)  
    })
})

module.exports = router;
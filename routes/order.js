var express = require('express')
var router = express.Router();
//查询订单
router.get('/api/list',function(req,res,next){
    const res_data = {
        status:200,
        data:[
            {
                dateTime: '2022-10-11 12:00:00',
                state: 1,
                goodsNum: 8,
                relPrice: '30.80',
                goodsName: '爱国者（aigo）64GB USB3.2 U盘 U330金属旋转系列 银色 快速传输 出色出众',
                goodsAttr: '3.2金属旋转高速U盘',
                goodsPrice: '36.80',
                img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/42906/11/19323/53719/632839e5Eadddf33d/c19b7f2d6cac3684.jpg!q70.dpg.webp',
            },
            {
                dateTime: '2022-10-11 14:00:00',
                state: 2,
                goodsNum: 3,
                relPrice: '260.00',
                goodsName: '【无游戏】Svpmecn 华 为手机适用华强北S8插卡电话手表5G全网通青少年初高中生通话定位视频 黑色Y5【零钱支付+视频通话+精准定位+上课禁用】',
                goodsAttr: '黑色Y5【零钱支付+视频通话+精准定位+上课禁用】',
                goodsPrice: '288.00',
                img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/139834/14/29859/67663/63281553Ee1031434/4df8d7556c9fe30d.jpg!q70.dpg.webp',
            },
            {
                dateTime: '2022-10-11 15:00:00',
                state: 3,
                goodsNum: 5,
                relPrice: '35.00',
                goodsName: '酷睿冰尊（ICE COOREL）A9 黑色笔记本散热器（电脑支架/笔记本散热架/散热垫/可调速/17英寸以下）',
                goodsAttr: 'A9 黑色【带调速+五档高度】',
                goodsPrice: '35.00',
                img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/194831/6/28971/279367/63256908E7b4b9d6d/a401dacc90f8ea96.jpg!q70.dpg.webp',
            },
            {
                dateTime: '2022-10-11 16:00:00',
                state: 4,
                goodsNum: 2,
                relPrice: '100.00',
                goodsName: '雷柏（Rapoo） V500PRO 机械键盘 有线键盘 游戏键盘 104键混光键盘 吃鸡键盘 电脑键盘 黑色 黑轴',
                goodsAttr: 'V500PRO【白色茶轴】',
                goodsPrice: '109.00',
                img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/201709/31/16982/646706/61a5a319Eba43fa75/896ab6ece902cc7f.jpg!q70.dpg.webp',
            },
            {
                dateTime: '2022-10-11 17:00:00',
                state: 5,
                goodsNum: 2,
                relPrice: '18.00',
                goodsName: '闪魔 苹果11钢化膜 iphoneXR/XsMax/11promax手机膜高清非全屏抗蓝光防窥保护膜 XR/11【6.1英寸^加强版】2片+神器',
                goodsAttr: 'X/XS/11Pro【5.8英寸蓝光版】3片+神器',
                goodsPrice: '22.00',
                img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/178618/23/17933/539382/610b90f5E71b6dc6a/5506c079d831a0e8.jpg!q70.dpg.webp',
            },
        ]
    };
    if(Object.keys(req.query).length > 0){
        if(Number(req.query.state) !== 0 ){// 0全部 1待付款  2待收货  3待评价 4交易完成 5订单已关闭
            res_data.data = res_data.data.filter(v=>{
                return  v.state === Number(req.query.state)
            });    
        };
    }; 
    res.header('Access-Control-Origin','*')
    res.send(res_data)
})

//取消订单
router.post('/api/cancel/list',function(req,res,next){
    const res_data = {
        status:''
    };
    res.header('Access-Control-Origin','*')//设置跨域
    res.send() 
})
module.exports = router
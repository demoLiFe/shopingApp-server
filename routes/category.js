var express = require('express');
var router = express.Router();

//获取左侧导航菜单
router.get('/api/nav/list', function (req, res, next) {
    const res_data = {
        status: 200,
        data: [
            {
                title: '手机数码',
                id: 1,
            },
            {
                title: '鲜花礼品',
                id: 2,
            },
            {
                title: '男装女装',
                id: 3,
            },
        ]
    }
    res.header("Access-Control-Allow-Origin", "*");//设置跨域
    res.send(res_data)
});

//获取分类商品
router.get('/api/navGoods/list', function (req, res, next) {
    const res_data = {
        status: 200,
        data: [
            {
                title: '手机通讯',
                pid: 1,
                list: [
                    {
                        name: '全面屏手机',
                        picture: '/static/temp/cate2.jpg'
                    },
                    {
                        name: '游戏手机',
                        picture: '/static/temp/cate3.jpg'
                    },
                    {
                        name: '老人机',
                        picture: '/static/temp/cate1.jpg'
                    },
                    {
                        name: '拍照手机',
                        picture: '/static/temp/cate4.jpg'
                    },
                    {
                        name: '女性手机',
                        picture: '/static/temp/cate5.jpg'
                    },
                    {
                        name: '合约机',
                        picture: '/static/temp/cate1.jpg'
                    },
                    {
                        name: '选好卡',
                        picture: '/static/temp/cate4.jpg'
                    },
                ]
            },
            {
                title: '礼品鲜花',
                pid: 2,
                list: [
                    {
                        name: '公益摆件',
                        picture: '/static/temp/cate7.jpg'
                    },
                    {
                        name: '创意礼品',
                        picture: '/static/temp/cate8.jpg'
                    },
                    {
                        name: '鲜花',
                        picture: '/static/temp/cate9.jpg'
                    },
                    {
                        name: '每周一花',
                        picture: '/static/temp/cate10.jpg'
                    },
                    {
                        name: '卡通花束',
                        picture: '/static/temp/cate11.jpg'
                    },
                    {
                        name: '永生花',
                        picture: '/static/temp/cate12.jpg'
                    },
                ]
            },
            {
                title: '男装女装',
                pid: 3,
                list: [
                    {
                        name: '男士T恤',
                        picture: '/static/temp/cate13.jpg'
                    },
                    {
                        name: '男士外套',
                        picture: '/static/temp/cate14.jpg'
                    },
                    {
                        name: '裙装',
                        picture: '/static/temp/cate15.jpg'
                    },
                    {
                        name: 'T恤',
                        picture: '/static/temp/cate16.jpg'
                    },
                    {
                        name: '上装',
                        picture: '/static/temp/cate15.jpg'
                    },
                    {
                        name: '下装',
                        picture: '/static/temp/cate16.jpg'
                    },
                ]
            }
        ]
    };
    if (Object.keys(req.query).length > 0) {
        res_data.data = res_data.data.filter(v => {
            return v.pid === Number(req.query.id)
        });
    };
    res.header("Access-Control-Allow-Origin", "*");//设置跨域
    res.send(res_data);
})

//获取商品列表
router.get('/api/goods/list', function (req, res, next) {
    const res_data = {
        status: 200,
        data: [
            {
                pid: 1,
                image: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/47025/33/15210/122888/5dc1191aE65cca900/896f15a118bc357d.jpg!q70.dpg.webp",
                name: "新年情人节走心的生日礼物男生送男友特别实用送爸爸父亲老公男朋友创意定制高档兄弟死党男闺蜜保温杯 套装7件套",
                price: 389.99,
                sales: 8,
            },
            {
                pid: 2,
                image: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/21179/40/17558/389232/62d6227cEa8107255/fa576a1014bd77cc.jpg!q70.dpg.webp",
                name: "恩科（ENKOR）mini2电脑迷你小音响 有线台式低音炮 多媒体笔记本电脑桌面音箱",
                price: 29.00,
                sales: 10,
            },
            {
                pid: 1,
                image: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/204560/30/2830/168215/6125f866E1812e1c3/d764949f19773a4b.jpg!q70.dpg.webp",
                name: "Orion 好丽友 营养早餐点心零食 礼盒  送礼礼盒  巧克力味派 30枚 1020g/盒 （新老包装随机发货）",
                price: 39.20,
                sales: 3,
            },
            {
                pid: 2,
                image: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/215549/26/18729/149438/628e2ec3E9b47f86f/07098235bad34ebd.jpg!q70.dpg.webp",
                name: "卉亿新品冷水壶大容量玻璃密封盖子凉水壶套装加厚透明家用凉白开水壶大容量饮料果汁壶扎啤壶 鸭嘴壶",
                price: 11.99,
                sales: 30,
            },
            {
                pid: 1,
                image: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/11454/31/8498/152576/5c6e57f0Eab43613f/4d004b5a879a229d.jpg!q70.dpg.webp",
                name: "奥利奥 夹心饼干 原味 466g(8包独立装)",
                price: 23.50,
                sales: 20,
            },
            {
                pid: 2,
                image: "https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/98383/14/29308/182840/629ffe77E94880d9e/177fe67c8d9d61ac.jpg!q70.dpg.webp",
                name: "LURAD 拖鞋男软弹厚底踩屎感居家用女情侣室内浴室洗澡凉拖鞋家居拖 灰色 270（适合42-43码）",
                price: 29.99,
                sales: 60,
            }
        ]
    };
    if (Object.keys(req.query).length > 0) {
        if (req.query.searchType == 1) {//销量优先排序 
            res_data.data = res_data.data.sort((a, b) => {
                return b.sales - a.sales
            });
        } else if (req.query.searchType == 2) {//价格排序 
            res_data.data = res_data.data.sort((a, b) => {
                return b.price - a.price
            });
        };
        //分类筛选
        if(Number(req.query.goodsClassify) !== -1){
            res_data.data = res_data.data.filter(v => {
                return v.pid === Number(req.query.goodsClassify)
            });   
        };
    };
    res.header("Access-Control-Allow-Origin", "*");//设置跨域
    res.send(res_data);
})

//获取分类列表 .
router.get('/api/classify/list', function (req, res, next) {
    const res_data = {
        status: 200,
        data: [
            {
                id: -1,
                title: '全部'
            },
            {
                id: 1,
                title: '零食类'
            },
            {
                id: 2,
                title: '生活用品类'
            },
        ]
    };
    res.header("Access-Control-Allow-Origin", "*");//设置跨域
    res.send(res_data);
})

module.exports = router;
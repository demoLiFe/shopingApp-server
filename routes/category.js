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
                        name: '商务',
                        picture: 'https://img10.360buyimg.com/n3/jfs/t1/105276/22/32553/2278/630dfe44Eee19cc5a/203a059a52c3ca9b.jpg'
                    },
                    {
                        name: '持久续航',
                        picture: 'https://img11.360buyimg.com/n3/jfs/t1/186154/14/27683/2735/630dfe35E90242ef4/ef78945f173c8a78.jpg'
                    },
                    {
                        name: '高性能',
                        picture: 'https://img12.360buyimg.com/n3/jfs/t1/25208/11/19392/3180/630dfe3bE0a99c4d8/6dce772424c51183.jpg'
                    },
                    {
                        name: '折叠屏',
                        picture: 'https://img13.360buyimg.com/n3/jfs/t1/16125/25/17913/3206/630dfe2bE4d102be7/9ccd06a63964ee4b.jpg'
                    },
                    {
                        name: '拍照',
                        picture: 'https://img12.360buyimg.com/n3/jfs/t1/52524/35/22190/2739/630dfe47E80350c28/cef0216d333faa6b.jpg'
                    },
                    {
                        name: '电竞',
                        picture: 'https://img13.360buyimg.com/n3/jfs/t1/188643/40/28724/3322/630e0618Ed5f02bc9/88c4380bdfd6e5a6.jpg'
                    },
                    {
                        name: '高性价比',
                        picture: 'https://img10.360buyimg.com/n3/jfs/t1/121048/11/29427/3052/630e060dE34dfd936/c2974cd108366bfd.jpg'
                    },
                ]
            },
            {
                title: '礼品鲜花',
                pid: 2,
                list: [
                    {
                        name: '鲜花礼盒',
                        picture: 'https://img10.360buyimg.com/n3/jfs/t1/204186/25/18236/17291/61b31773E03c4be39/4051db85140fcc57.jpg'
                    },
                    {
                        name: '每周一花',
                        picture: 'https://img12.360buyimg.com/n3/jfs/t1/173980/10/22509/14809/61b3177cE003b1075/b23789dcca785bcf.jpg'
                    },
                    {
                        name: '玫瑰',
                        picture: 'https://img13.360buyimg.com/n3/jfs/t1/214779/30/7295/15657/61b31776E3efdb6ca/8450eefcbac586b2.jpg'
                    },
                    {
                        name: '生日礼物',
                        picture: 'https://img14.360buyimg.com/n3/jfs/t1/7234/33/19139/9495/6316bfacEa3f0054e/1811aa3e764577f2.jpg'
                    },
                    {
                        name: '表白礼物',
                        picture: 'https:////img13.360buyimg.com/n3/jfs/t1/161428/27/30437/4649/6316bfbaE11c2ff60/745ba502c77d07c5.jpg'
                    },
                    {
                        name: '鲜花花束',
                        picture: 'https://img10.360buyimg.com/n3/jfs/t1/211042/21/12135/16667/61b31770Eb623ecb8/ecfcd5a1b829dc71.jpg'
                    },
                ]
            },
            {
                title: '男装女装',
                pid: 3,
                list: [
                    {
                        name: '男士T恤',
                        picture: 'https://img10.360buyimg.com/n3/jfs/t1/26185/1/19113/3603/62f4cd66Ea6686c72/d65a587828eedc5e.jpg'
                    },
                    {
                        name: '男士衬衫',
                        picture: 'https://img11.360buyimg.com/n3/jfs/t1/222807/24/19289/1709/62f4cd6fEe8ab7403/6f03472bd43d862a.jpg'
                    },
                    {
                        name: '卫衣',
                        picture: 'https://img13.360buyimg.com/n3/jfs/t1/70/39/18479/3578/62f4cd97E28014b8c/3ca0022086ba3866.jpg'
                    },
                    {
                        name: '棒球服',
                        picture: 'https://img12.360buyimg.com/n3/jfs/t1/169802/40/29156/4095/62f4cde7Ec6f09148/de4b7e2213e434ac.jpg'
                    },
                    {
                        name: '裙子',
                        picture: 'https://img11.360buyimg.com/n2/s370x370_jfs/t1/190224/32/28513/222736/633be9a4E09e12f17/3649f567521d4039.jpg!q70.jpg.webp'
                    },
                    {
                        name: '女士卫衣',
                        picture: 'https://img12.360buyimg.com/n2/s370x370_jfs/t1/199049/9/20032/221009/61b5c978E921e0881/189c5a1ccd318869.jpg!q70.jpg.webp'
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
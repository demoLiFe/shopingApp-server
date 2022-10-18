var express = require('express');
var router = express.Router();

/* 获取首页banner图列表 */

router.get('/api/banner/list', function (req, res, next) {
  //连接数据库


  //响应返回数据 暂时模拟 后期对接数据库
  const res_data = {
    status: 200,
    data: [
      {
        src: "https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/159944/10/24807/123813/61db8b3cE235baed1/cb7cf5029afef5e3.jpg!cr_1053x420_4_0!q70.jpg",
        background: "#FFF2D0",
      },
      {
        src: "https://m15.360buyimg.com/mobilecms/jfs/t1/10032/19/18200/45687/62be5b25E04c6c7d0/441474db85936f71.jpg!cr_1125x449_0_166!q70.jpg",
        background: "#E66CA7",
      },
      {
        src: "https://m15.360buyimg.com/mobilecms/jfs/t1/71335/33/20634/82165/62cf4752E0dfde956/471dab3897de0c41.jpg!cr_1125x449_0_166!q70.jpg",
        background: "#835DFE",
      },
      {
        src: "https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/159944/10/24807/123813/61db8b3cE235baed1/cb7cf5029afef5e3.jpg!cr_1053x420_4_0!q70.jpg",
        background: "#F4C45F",
      },
      {
        src: "https://m15.360buyimg.com/mobilecms/jfs/t1/166366/34/24795/95878/62cf1622E1fda3449/121c36e27de8b056.jpg!cr_1125x449_0_166!q70.jpg",
        background: "#780CD7",
      }
    ]
  }
  res.header("Access-Control-Allow-Origin", "*");//设置跨域
  res.send(res_data)
});
//获取秒杀商品
router.get('/api/seckill/goods/list', function (req, res, next) {
  const res_data = {
    status: 200,
    data: [
      {
        image: 'https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/181693/35/6293/57502/60b0bc49E7788075f/c8b4a19307ea47fe.jpg.dpg',
        price: 19.9,
        name: '男士女士袜子'
      },
      {
        image: 'https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/42659/39/19021/278926/63228211Ecd81681d/86177fff33365fa5.jpg.dpg',
        price: 5599,
        name: '家具茶具套装'
      },
      {
        image: 'https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/158198/34/3489/90963/6000099bE238ebaa0/784d997e784a867b.jpg.dpg',
        price: 8199,
        name: 'iphone14'
      },
      {
        image: 'https://m.360buyimg.com/seckillcms/jfs/t1/187942/28/25284/385880/62aadf1dE48f56118/adac1a379eb0a53f.jpg!q60.webp',
        price: 99,
        name: '八享时黄桃罐头礼盒425g*6'
      },
      {
        image: 'https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/112702/24/30273/110162/634cffe5E22130d29/86a042369d7ceac3.jpg.dpg',
        price: 399,
        name: 'Shiseido 资生堂红妍肌活精华露红腰子精华 肌底液傲娇精华液 姿生堂 送人秋冬护肤 资生堂全新3.0第三代红腰子精华75ml'
      },
      {
        image: 'https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/219864/21/21912/113083/634d452fEc922d4a8/68a522a2954c73b6.jpg.dpg',
        price: 399,
        name: '豪特（Hote）直喷宝除积碳清洗剂燃油宝汽油添加剂 高浓度PEA 单瓶装250ml 汽车用品'
      },
    ]
  }
  res.header("Access-Control-Allow-Origin", "*");//设置跨域
  res.send(res_data)
});

//获取精品团购
router.get('/api/groupbuying/goods/list', function (req, res, next) {
  const res_data = {
    status: 200,
    data: [
      {
        image: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/219235/32/22280/199379/634cf2afEc81168f3/83ed8b322e498d66.jpg!q70.dpg.webp',
        price: 3999,
        nprice: 4399,
        name: '容声(Ronshen) 529升对开门冰箱风冷无霜变频超薄净味双开门冰箱 BCD-529WD18HP',
        image1: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/124975/3/22292/90275/61e65ea1Ec30979d6/cf1f78b47c0f977b.jpg!q70.dpg.webp',
        personNum: 10,
        price1: 199,
        nprice1: 230,
        name1: '佳农 马来西亚冷冻 猫山王榴莲果肉 D197稀缺果王肉 单盒装 300g/盒 榴莲 生鲜水果',
        personNum1: 3,
      },
      {
        image: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/146489/25/28403/89007/6329714bEc10c6346/3f9c180a70e1971c.jpg!q70.dpg.webp',
        price: 5999,
        nprice: 6299,
        name: '【现货当天发】OPPO Reno7 5G全网通NFC美颜拍照闪充Reno5reno6pro升级版 Reno7 星雨心愿 8+128GB 官方标配：享90天碎屏保',
        image1: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/61275/14/18772/251450/62b1b7e4E0f535efc/711bf58d50454569.jpg!q70.dpg.webp',
        personNum: 6,
        price1: 5999,
        nprice1: 6299,
        name1: 'Rockit乐淇 新西兰进口苹果 5粒超大筒装 单筒重约465g',
        personNum1: 3,
      },
    ]
  }
  res.header("Access-Control-Allow-Origin", "*");//设置跨域
  res.send(res_data)
});
//获取分类精选商品
router.get('/api/cate/goods/list',function(req,res,next){
   const res_data = {
     status:200,
     data:[
       {
         bgimage:'https://m15.360buyimg.com/mobilecms/jfs/t1/22165/37/18802/139315/62f32638E5d8e3577/263fbeef6a38974a.jpg!cr_1125x449_0_166!q70.jpg',
         list:[
           {
             name:'康师傅 方便面 经典系列泡面袋面一整箱装混合口味休闲零食宵夜五连包煮面 【五连包】红烧牛肉面104*5袋',
             image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/104482/3/32319/509859/6336cb83E2dadbb23/3dae5e1a60d3bed8.png.webp',
             price:'15.90' 
           },
           {
            name:'仁和药业祛斑美白霜套装 淡斑美白祛黄提亮肤色补水保湿水乳霜护肤品套装女 烟酰胺美白化妆品礼盒套装 祛斑美白水乳霜三件套',
            image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/22526/14/18973/116987/62ec95f3E16df1aad/b2b76bd6da7ff3f3.jpg!q70.dpg.webp',
            price:'99.90' 
           },
           {
            name:'广意  304不锈钢泡面碗+304勺子筷子 带盖防漏防烫耐摔学生饭盒餐盒 上班族食堂快餐杯 黑色1000ML GY7665',
            image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/186996/40/26945/477605/62fb4b3cEceb6b5e7/5012b675b4d787c3.jpg!q70.dpg.webp',
            price:'29.90' 
           },
           {
            name:'TIANDLIFE 纯钛保温杯直身保冷茶水分离杯大容量养生商务男士女士车载真空杯 磨砂灰保温杯【480ml】含茶隔',
            image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/116822/35/20857/393380/622f0867Ee4ab761e/05f0f182f33452f5.jpg!q70.dpg.webp',
            price:'69.99' 
           },
           {
            name:'乐事Lay’s无限薯片 休闲零食 104g*3组合装（番茄+原味+烤肉）膨化食品',
            image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/49705/5/17041/152917/61387a52E7d5f02f3/c98e2b7ecbffbcfe.jpg!q70.dpg.webp',
            price:'25.00' 
           }
         ]
       },
       {
        bgimage:'https://m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/77794/2/19408/128102/62e27222E6cfb9aa8/a467d16fbd54ff8a.jpg!cr_1053x420_4_0!q70.jpg',
        list:[
          {
            name:'洁云 无线洗车机家用锂电高压洗车水枪便携洗车神器大功率清洗机多功能浇花浇菜手持洗车泵SA-A',
            image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/165879/20/27879/78285/63428fc3Edd2142df/a91a27a080577f13.jpg!q70.dpg.webp',
            price:'268.90' 
          },
          {
           name:'Aveeno 艾惟诺婴儿润肤乳儿童面霜身体乳宝宝乳液润肤露婴儿油天然燕麦每日倍护（无香型）227g',
           image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/32668/28/18453/129613/63493475Eecbfbd59/7bb305d27d9ee527.jpg!q70.dpg.webp',
           price:'99.90' 
          },
          {
           name:'三星（SAMSUNG）京品家电 65英寸QX1 超薄全面屏 4K超高清HDR液晶 AI智能语音 QLED量子点电视QA65QX1AAJXXZ',
           image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/211794/27/22410/106049/6348f5feE2b7ab4de/f7596bdaa8f6c820.jpg!q70.dpg.webp',
           price:'5499.00' 
          },
          {
           name:'飞科（FLYCO） 便携吹风机电吹风负离子家用大功率深度养发吹风筒速干可折叠 【1800W速干】负离子FH6276-奶白色',
           image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/157055/38/31569/90003/6348d518E0a7d6805/6659df4beaa53283.jpg!q70.dpg.webp',
           price:'79.99' 
          },
          {
           name:'TCL雷鸟电视雀4 55英寸电视 4K超清超薄全面屏 全生态HDR10 AI远场语音 液晶智能电视机55F265C 以旧换新',
           image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/190564/4/29324/101269/634832d7E2418d5f4/bfa149ca3611f4e2.jpg!q70.dpg.webp',
           price:'1999.00' 
          }
        ]
      }
     ]
   };
   res.header('Access-Control-Allow-Oringin','*')
   res.send(res_data);
})

//获取导航列表
router.get('/api/nav/list', function (req, res, next) {
  const res_data = {
    status: 200,
    data: [
      {
        list: [
          {
            title: '数码电器',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
            path: ''
          },
          {
            title: '京东新百货',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png',
            path: ''
          },
          {
            title: '京东生鲜',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png',
            path: ''
          },
          {
            title: '京东到家',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png',
            path: ''
          },
          {
            title: '美妆馆',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/182378/35/13924/7463/60ec14c6E1f434a60/37fba58239f3547e.png',
            path: ''
          },
          {
            title: '领券',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png',
            path: ''
          },
          {
            title: 'PLUS会员',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png',
            path: ''
          },
          {
            title: '附近好店',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/34248/39/16616/4689/62bbbdccE9f11132e/d51caf15f2f412b2.png',
            path: ''
          }
        ]
      }, {
        list: [
          {
            title: '沃尔玛',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/185282/10/13877/6658/60ec1404E0fc4061a/a7c213f76e37a8d6.png',
            path: ''
          },
          {
            title: '拍拍二手',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/36551/10/16098/5792/60ec1589E755822d7/f958b896e706008a.png',
            path: ''
          },
          {
            title: '全部',
            icon: 'https://m15.360buyimg.com/mobilecms/jfs/t1/192665/22/12752/7912/60ec15cbE261a32bf/3ace51badf80e71b.png',
            path: ''
          }
        ]
      }

    ]
  }

  res.header("Access-Control-Allow-Origin", "*");//设置跨域
  res.send(res_data)
})

//猜你喜欢
router.get('/api/like/goods/list',function(req,res,next){
   const res_data = {
      status:200,
      data:[
         {
           name:'梦特娇（MONTAGUT）女包单肩包经典印花手提包欧美风大容量女士包包百搭托特包礼物R3712511311杏色',
           image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/62393/28/20571/110028/634d36b0Ed5dbdd27/2b075eed5a97e89f.jpg!q70.dpg.webp',
           price:'799.00'
         },
         {
          name:'加多宝 凉茶植物饮料 茶饮料 310ml*12罐 整箱',
          image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/104801/17/31040/300740/62cfb06dEd60744a0/a00d5e6c4ffa542b.jpg!q70.dpg.webp',
          price:'35.00'
        },
        {
          name:'蒙牛 纯牛奶全脂灭菌乳苗条装 200ml×24包  礼盒装 送礼佳选',
          image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/23304/25/19020/250080/632891a3E421135a6/d94431ab8d7a57c8.jpg!q70.dpg.webp',
          price:'53.90'
        },
        {
          name:'适用于汽车遥控汉兰达普拉多霸道RAV4凯美瑞锐志皇冠雷凌钥匙外壳 单独小钥匙(双面齿)',
          image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/189593/33/17699/76300/61122676E2f12536f/f87fdcb7864f0f25.jpg!q70.dpg.webp',
          price:'29'
        },
        {
          name:'百雀羚套装女 草本精粹惊喜礼盒 洗面奶水乳面霜护肤化妆品四件套装补水保湿深层清洁滋润清爽官方自营官网 洁面膏+爽肤水+保湿乳+精华霜',
          image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/12160/29/19664/135476/634950d4Ee8365445/d853bc2990c57a9b.jpg!q70.dpg.webp',
          price:'148.00'
        },
        {
          name:'乌苏啤酒（wusu）大红乌苏500ml*12听 整箱装',
          image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/163263/37/31064/191087/634d1a5aE5fa432e7/26165ea9e15cdf3e.jpg!q70.dpg.webp',
          price:'79.00'
        }  
      ]
   }
   res.header("Access-Control-Allow-Origin", "*");//设置跨域
   res.send(res_data) 
})

module.exports = router;

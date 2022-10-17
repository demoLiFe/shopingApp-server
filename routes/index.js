var express = require('express');
var router = express.Router();

/* 获取首页banner图列表 */

router.get('/api/banner/list', function (req, res, next) {
  //连接数据库


  //响应返回数据 暂时模拟 后期对接数据库
  const res_data = {
      status:200,
      data:[
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
router.get('/api/seckill/goods/list',function(req,res,next){
    const res_data = {
         status:200,
         data:[
          {
            image:'https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/181693/35/6293/57502/60b0bc49E7788075f/c8b4a19307ea47fe.jpg.dpg',
            price:19.9,
            name:'男士女士袜子'
          },
          {
            image:'https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/42659/39/19021/278926/63228211Ecd81681d/86177fff33365fa5.jpg.dpg',
            price:5599,
            name:'家具茶具套装'
          },
          {
            image:'https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/158198/34/3489/90963/6000099bE238ebaa0/784d997e784a867b.jpg.dpg',
            price:8199,
            name:'iphone14'
          },
          {
            image:'https://m.360buyimg.com/seckillcms/jfs/t1/187942/28/25284/385880/62aadf1dE48f56118/adac1a379eb0a53f.jpg!q60.webp',
            price:99,
            name:'八享时黄桃罐头礼盒425g*6'
          },
          {
            image:'https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/112702/24/30273/110162/634cffe5E22130d29/86a042369d7ceac3.jpg.dpg',
            price:399,
            name:'Shiseido 资生堂红妍肌活精华露红腰子精华 肌底液傲娇精华液 姿生堂 送人秋冬护肤 资生堂全新3.0第三代红腰子精华75ml'
          },
          {
            image:'https://m.360buyimg.com/seckillcms/s150x150_jfs/t1/219864/21/21912/113083/634d452fEc922d4a8/68a522a2954c73b6.jpg.dpg',
            price:399,
            name:'豪特（Hote）直喷宝除积碳清洗剂燃油宝汽油添加剂 高浓度PEA 单瓶装250ml 汽车用品'
          },   
         ] 
    } 
    res.header("Access-Control-Allow-Origin", "*");//设置跨域
    res.send(res_data)
});

//获取精品团购
router.get('/api/groupbuying/goods/list',function(req,res,next){
  const res_data = {
       status:200,
       data:[
        {
          image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/219235/32/22280/199379/634cf2afEc81168f3/83ed8b322e498d66.jpg!q70.dpg.webp',
          price:3999,
          nprice:4399,
          name:'容声(Ronshen) 529升对开门冰箱风冷无霜变频超薄净味双开门冰箱 BCD-529WD18HP',
          image1:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/124975/3/22292/90275/61e65ea1Ec30979d6/cf1f78b47c0f977b.jpg!q70.dpg.webp',
          personNum:10,
          price1:199,
          nprice1:230,
          name1:'佳农 马来西亚冷冻 猫山王榴莲果肉 D197稀缺果王肉 单盒装 300g/盒 榴莲 生鲜水果',
          personNum1:3,
        },
        {
          image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/146489/25/28403/89007/6329714bEc10c6346/3f9c180a70e1971c.jpg!q70.dpg.webp',
          price:5999,
          nprice:6299,
          name:'【现货当天发】OPPO Reno7 5G全网通NFC美颜拍照闪充Reno5reno6pro升级版 Reno7 星雨心愿 8+128GB 官方标配：享90天碎屏保',
          image1:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/61275/14/18772/251450/62b1b7e4E0f535efc/711bf58d50454569.jpg!q70.dpg.webp',
          personNum:6,
          price1:5999,
          nprice1:6299,
          name1:'Rockit乐淇 新西兰进口苹果 5粒超大筒装 单筒重约465g',
          personNum1:3,
        },
       ] 
  } 
  res.header("Access-Control-Allow-Origin", "*");//设置跨域
  res.send(res_data)
});

module.exports = router;

var express = require('express');
var router = express.Router();

//内置账号 后期从数据库获取
const Account = ['syh-123456', 'syh-888888'];
const Password = ['pwd12345678'];

//随机生成nanoid
const nanoid = (size = 21) => {
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



/* 登陆 */
router.post('/api/login', function (req, res, next) {
  if (!!req) {
    const { account, password } = req.body
    const res_data = {};
    if (Account.includes(account) && Password.includes(password)) {
      res_data['status'] = 200;
      res_data['msg'] = '登陆成功';
      res_data['data'] = {
        token: nanoid(32),
        userName: account,
        gender: '男',
        autograph: '',
        introduce: '',
        vipLevel: 0,//会员级别
        avatar: account === 'syh-123456' ? 'https://img2.baidu.com/it/u=1336340007,2015118511&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' : 'https://img0.baidu.com/it/u=3375911127,635571288&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665939600&t=7029e8b7be0870a89869b76310752358',
        moneyBag: {
          money: 888,
          coupon: 10,
          integral: 30000
        },
        vipTimeLimit: 20,//会员期限
      }
    } else {
      res_data['status'] = 500;
      res_data['msg'] = '账号或密码错误,请重新输入';
    };
    res.send(res_data);
  };
});

router.post('/api/logout', function (req, res, next) {
  const res_data = {
    status: 200,
    data: {
      msg: '操作成功'
    }
  };
  res.send(res_data)
})

//历史记录
router.get('/api/history/record/list', function (req, res, next) {
  const res_data = {
    status: 200,
    data: [
      {
        id: nanoid(32),
        img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/193512/24/27864/290910/63663937E476b7bbc/6b1522f1f42bc08f.jpg!q70.dpg.webp'
      },
      {
        id: nanoid(32),
        img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/216963/26/23106/87468/636b15e5Ec41a4304/026de478d530267f.jpg!q70.dpg.webp'
      },
      {
        id: nanoid(32),
        img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/178618/23/17933/539382/610b90f5E71b6dc6a/5506c079d831a0e8.jpg!q70.dpg.webp'
      },
      {
        id: nanoid(32),
        img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/59576/15/22702/54782/635b94caE22c9981a/2e028da53265b2d4.jpg!q70.dpg.webp'
      },{
        id: nanoid(32),
        img:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/126073/8/31447/77622/636a07a1E72a4f6e7/eef73bf1129ad43d.jpg!q70.dpg.webp'
      }
    ]
  };
  res.send(res_data)
})

//地址管理查询
const res_data = {
  status:200,
  data:[
    {
      uid:1,
      address:'四川省成都市武侯区',
      phoneNum:135231231132,
      uname:'张的帅',
      doorNum:100,
      isDefault:true
    },
    {
      uid:2,
      address:'四川省成都市成华区',
      phoneNum:19212034113,
      uname:'申的帅',
      doorNum:200,
      isDefault:false
    },  
  ] 
};
router.get('/api/address/list/get',function(req,res,next){ 
  res_data.data
    res.send(res_data)
})

//地址管理编辑
router.post('/api/address/list/edit',function(req,res,next){
    if(!!req){
        try {
           const index = res_data.data.findIndex(v => v.uid === req.body.uid)
           res_data.data[index] = req.body
           res.send(res_data)
        }catch(err){
           console.log(err)
        }
    }
});

//地址管理新增
router.post('/api/address/list/create',function(req,res,next){
  if(!!req){
      try{
        res_data.data.push(req.body);
        res.send(res_data)
      }catch(err){
        console.log(err)  
      }
  }
})


//地址管理删除
router.post('/api/address/list/delete',function(req,res,next){

});

//收藏列表
router.get('/api/collection/list',function(req,res,next){
   const res_data = {
     status:200,
     data:[
      {
        id: nanoid(32),
        title: '爱国者（aigo）64GB USB3.2 U盘 U330金属旋转系列 银色 快速传输 出色出众',
        img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/42906/11/19323/53719/632839e5Eadddf33d/c19b7f2d6cac3684.jpg!q70.dpg.webp',
        name:'syh的商店',
        date:'10月1日'
    },
    {
        id: nanoid(32),
        title: '【无游戏】Svpmecn 华 为手机适用华强北S8插卡电话手表5G全网通青少年初高中生通话定位视频 黑色Y5【零钱支付+视频通话+精准定位+上课禁用】',
        img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/139834/14/29859/67663/63281553Ee1031434/4df8d7556c9fe30d.jpg!q70.dpg.webp',
        name:'syh的商店',
        date:'10月10日'
    },
    {
        id: nanoid(32),
        title: '酷睿冰尊（ICE COOREL）A9 黑色笔记本散热器（电脑支架/笔记本散热架/散热垫/可调速/17英寸以下）',
        img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/194831/6/28971/279367/63256908E7b4b9d6d/a401dacc90f8ea96.jpg!q70.dpg.webp',
        name:'syh的商店',
        date:'10月20日'
    },
    {
        id: nanoid(32),
        title: '雷柏（Rapoo） V500PRO 机械键盘 有线键盘 游戏键盘 104键混光键盘 吃鸡键盘 电脑键盘 黑色 黑轴',
        img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/201709/31/16982/646706/61a5a319Eba43fa75/896ab6ece902cc7f.jpg!q70.dpg.webp',
        name:'syh的商店',
        date:'11月1日'
    },
    {
        id: nanoid(32),
        title: '闪魔 苹果11钢化膜 iphoneXR/XsMax/11promax手机膜高清非全屏抗蓝光防窥保护膜 XR/11【6.1英寸^加强版】2片+神器',
        img: 'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/178618/23/17933/539382/610b90f5E71b6dc6a/5506c079d831a0e8.jpg!q70.dpg.webp',
        name:'syh的商店',
        date:'11月10日'
    },
     ]
   };
   if(!!req){
      res_data.data = res_data.data.filter(v=> v.title.indexOf(req.query.searchKey) > -1) 
   }
   res.send(res_data)
})


//我的评价列表
router.get('/api/appraise/list',function(req,res,next){
  const res_data = {
    status:200,
    data:[]
  };
  const maps = [
    {
      type:0,
      data:[
        {
          name:'闪魔旗舰店',
          goodsName:'闪魔 苹果11钢化膜 iphoneXR/XsMax/11promax手机膜高清非全屏抗蓝光防窥保护膜 XR/11【6.1英寸^磨砂版】+神器',
          goodsAttr:'X/XS/11Pro【5.8英寸磨砂版】+神器',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/169996/17/22109/366017/618394cdEc97d8da3/2243b840a308b9a4.jpg!q80.dpg'
        },
        {
          name:'际麟金贝塔专卖店',
          goodsName:'【可禁用】儿童智能电话手表初中高中生5G全网通视频通话GPS精准定位超长续航防水际麟 豪华版-耀黑色{精准定位+视频通话+无游戏}',
          goodsAttr:'豪华版-耀黑色{精准定位+视频通话+无游戏}',
          img:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/160700/10/32321/82594/636363fbEb1f897ee/fea79fef48acc63b.jpg!q70.dpg.webp'
        },
        {
          name:'雷柏京东自营官方旗舰店',
          goodsName:'雷柏（Rapoo） V500PRO 机械键盘 有线键盘 游戏键盘 104键混光键盘 吃鸡键盘 电脑键盘 黑色 黑轴',
          goodsAttr:'V500PRO【混光茶轴】',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/205537/37/28060/206351/63633b1cE5ef4ecd0/46b50edf4b8afc67.jpg!q80.dpg'
        },
        {
          name:'酷睿冰尊京东自营旗舰店',
          goodsName:'酷睿冰尊（ICE COOREL）F1 笔记本抽风式散热器 （抽风式散热扇/笔记本配件/侧吸/吸风式散热)',
          goodsAttr:'F1 5V供电【无极调速 直抽高温】',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/123110/16/26620/168602/624ed651Edecfb15d/7350732a19b20b7a.jpg!q80.dpg'
        }
      ]
    },
    {
      type:1,
      data:[
        {
          goodsName:'三只松鼠乳酸菌小伴侣面包 营养早餐代餐口袋手撕面包网红零食生日520g/箱',
          goodsAttr:'【酸甜爆浆】乳酸菌520g 约26包',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/142219/2/31254/117001/636e48d6Eebf3b9ac/190e0a9a74a38cd9.jpg!q80.dpg'
        },
        {
          goodsName:'乐事 薯片 超值三种口味组合装 104g*3',
          goodsAttr:'104g*3 (黄瓜味+原味+青柠味）',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/85779/27/7387/209920/5dfaf1b8E384fdc7e/1f780f0827469c66.jpg!q80.dpg'
        },
        {
          goodsName:'卡乐比（Calbee）波塔比系列 海苔味薯片68g*2 印尼进口零食 休闲膨化食品 薯条薯片',
          goodsAttr:'蜂蜜黄油奶酪味薯片60g*2',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/156722/24/27746/210792/61c0394bE773d9e10/8bfe6bf044ae6c8d.jpg!q80.dpg'
        },
        {
          goodsName:'港荣蒸蛋糕 奶香味900g整箱 饼干蛋糕营养早餐小面包休闲零食糕点',
          goodsAttr:'全蛋奶不加水奶香蒸蛋糕900g/箱',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/210380/4/27387/132825/636df95aEb963d0b1/7b3f8ff279b0881d.jpg!q80.dpg'
        },
        {
          goodsName:'乐事薯片超值分享装210g 零食大礼包（新老包装交替发货）',
          goodsAttr:'红烩味+烧烤味+大波浪鱿鱼味',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/141913/3/30685/145242/635b9275Eec6c25d5/84eb7ee185d9dc24.jpg!q80.dpg'
        },
        {
          goodsName:'【2022新品】华为适用蓝牙耳机无线双耳运动跑步游戏低延迟苹果vivo荣耀oppo小米手机通用固质 ',
          goodsAttr:'白色升级版【改名+开盖即连+HIFI音质+不闪灯】',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/70046/16/21423/55532/6329e0e7Ed2b8a42f/8ec061710bba0acc.jpg!q80.dpg'
        }
      ]
    },
    {
      type:2,
      data:[
        {
          dateTime:'2022-11-12',
          goodsName:'三星（SAMSUNG）27英寸 曲面 可壁挂 HDMI接口 节能爱眼认证 FreeSync CF39 电脑办公显示器 C27F390FHC',
          goodsAttr:'【爆款】27英寸/IPS/可壁挂/爱眼',
          statusTxt:'公开',
          appraise:'这个商品真的太好的 值得推荐',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/91332/25/20825/72373/636a2eaeEed718e2d/da3a0ba41a74f7c0.jpg!q80.dpg'
        },
        {
          dateTime:'2022-11-12',
          goodsName:'AOCSXM 24英寸直面2K75HZ游戏电竞电脑显示器165HZ升降旋转IPS台式液晶 24寸直黑2K75HZ HDR400 升降 旋转',
          goodsAttr:'24寸直黑2K75HZ HDR400 升降 旋转',
          statusTxt:'公开',
          appraise:'这个商品真的太好的 值得推荐',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/86249/37/31587/88005/6356b694E3e298a4d/329f8a4b57975b76.jpg!q80.dpg'
        },
        {
          dateTime:'2022-11-12',
          goodsName:'AOC 23.8英寸 IPS 2K高清 微边框 低蓝光不闪 双HDMI接口 人体工学支架可升降 液晶电脑显示器 Q2490PXQ',
          goodsAttr:'27英寸/2K/IPS/广色域/三边微框',
          appraise:'这个商品真的太好的 值得推荐',
          statusTxt:'公开',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/212903/39/23728/117727/636e6dd7E617279a6/86c45e5b36554bfc.jpg!q80.dpg'
        },
        {
          dateTime:'2022-11-12',
          goodsName:'【11.11返场钜惠】 施华洛世奇蓝调天鹅 DAZZLING SWAN 项链 璀璨 镀白金色 5521074',
          goodsAttr:'镀白金色 5521074',
          statusTxt:'公开',
          appraise:'这个商品真的太好的 值得推荐',
          img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/132462/21/31327/91297/636e7b15E1ee4affd/e609a3a8a0103411.jpg!q80.dpg'
        }
      ]
    }
  ]
  if(!!req){
     const item = maps.find(v => v.type === Number( req.query.type))
     if(!!item){
        res_data.data = item.data
     }
  };
  res.send(res_data)
})
module.exports = router;

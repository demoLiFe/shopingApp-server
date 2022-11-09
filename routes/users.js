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
    res.send(res_data)
})

//地址管理新增编辑
router.post('/api/address/list/edit',function(req,res,next){
    if(!!req){
        try {
           const index = res_data.data.findIndex(v => v.uid === req.body.uid)
           res_data.data[index] = req.body
        }catch(err){
           console.log(err)
        }
    }
});

//地址管理删除
router.post('/api/address/list/delete',function(req,res,next){

});

module.exports = router;

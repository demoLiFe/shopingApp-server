var express = require('express');
var router = express.Router();

//内置账号 后期从数据库获取
const Account = 'syh-123456';
const Password = 'pwd12345678';

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


/* 登陆 */
router.post('/api/login', function (req, res, next) {
  if (!!req) {
    const { account, password } = req.body
    const res_data = {};
    if (account === Account && password === Password) {
      res_data['status'] = 200;
      res_data['msg'] = '登陆成功';
      res_data['data'] = {
         token:nanoid(32),
         userName:'syh',
         gender:'男',
         autograph:'',
         introduce:'',
         vipLevel:0,//会员级别
         avatar:'https://img2.baidu.com/it/u=1336340007,2015118511&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
         moneyBag:{
           money:888,
           coupon:10,
           integral:30000
         },
         vipTimeLimit:20,//会员期限
      }
    }else {
      res_data['status'] = 500;
      res_data['msg'] = '账号或密码错误,请重新输入';
    };
    res.header('Access-Control-Origin', '*')//设置跨域
    res.send(res_data);
  };
});

router.post('/api/logout',function(req,res,next){
     const res_data = {
        status:200,
        data:{
          msg:'操作成功'
        }
     };
    
    res.header('Access-Control-Origin','*')//设置跨域
    res.send(res_data)
})

module.exports = router;

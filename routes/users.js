var express = require('express');
var router = express.Router();

//内置账号 后期从数据库获取
const Account =  ['syh-123456','syh-888888']; 
const Password = [ 'pwd12345678'];

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
    if ( Account.includes(account)  &&  Password.includes(password)) {
      res_data['status'] = 200;
      res_data['msg'] = '登陆成功';
      res_data['data'] = {
         token:nanoid(32),
         userName:account,
         gender:'男',
         autograph:'',
         introduce:'',
         vipLevel:0,//会员级别
         avatar: account === 'syh-123456' ? 'https://img2.baidu.com/it/u=1336340007,2015118511&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' : 'https://img0.baidu.com/it/u=3375911127,635571288&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665939600&t=7029e8b7be0870a89869b76310752358',
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
    res.send(res_data)
})

module.exports = router;

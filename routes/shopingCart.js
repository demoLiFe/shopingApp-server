var express = require('express');
var router = express.Router();

router.get('/api/list',function(req,res,next){
    const res_data  = {
        status:200,
        data:[
            {
                name:'卉亿新品摇摇杯蛋白粉自动搅拌杯咖啡奶粉电动健身奶昔杯便携式户外运动水杯子大容量代餐粉 锥形粉+杯刷 容量450ml含2节7号电池',
                image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/201746/12/6819/854448/61405727E0e9cc91b/3c1334948885cac7.png.webp',
                attr:' 锥形粉+杯刷，容量450ml含2节7号电池，1个',
                stock:10,
                price:'70.80',
                number:1,
            },
            {
                name:'ihold 德国儿童保温杯智能测温吸管杯316不锈钢大容量直饮杯男女小学生幼儿园宝宝水杯杯子壶 蓝色恐龙（3盖版）',
                image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/97340/25/33013/75122/632286edE1ee50e82/de1ff9601e04b15a.jpg!q70.dpg.webp',
                attr:' 蓝色恐龙（3盖版）',
                stock:5,
                price:'89.00',
                number:1,
            },
            {
                name:'源宏图 暖暖杯加热杯垫日礼物女生送女友闺蜜老婆妈妈恒温杯热奶咖啡马克杯实用智能保温杯礼盒套装杯子女士 A款【小圆粉暖杯垫+智能保温杯+皇冠杯】',
                image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/209557/6/4854/168574/6165024fE987a0a41/12bca9cddfb8fd8c.jpg!q70.dpg.webp',
                attr:' A款【小圆粉暖杯垫+智能保温杯+皇冠杯】',
                stock:8,
                price:'168.00',
                number:1,
            },
            {
                name:'乐事Lay’s无限薯片 原味 104克*2 208克 休闲零食 膨化食品',
                image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/85580/9/18081/111934/61387cbaE1a01b3b2/5124ced8e1468466.jpg!q70.dpg.webp',
                attr:' 原味 208g',
                stock:20,
                price:'17.40',
                number:1,
            },
            {
                name:'奥利奥（Oreo）夹心饼干休闲零食 早餐饼干办公室下午茶网红小吃 经典原味349g独立小包装（包装随机发）',
                image:'https://img10.360buyimg.com/mobilecms/s360x360_jfs/t1/117376/24/29401/116623/634e09f6Ea55d6753/a4247c6baf571871.jpg!q70.dpg.webp',
                attr:' 【经典口味】原味夹心饼干349g',
                stock:18,
                price:'12.10',
                number:1,
            },
            
        ]   
    };
    res.header("Access-Control-Allow-Origin", "*");//设置跨域
    res.send(res_data);
})

module.exports = router
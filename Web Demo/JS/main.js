let computer = { //创建对象
    color: 'black',
    heavy: '5kg',
    type: '联想',
    useful: ["打代码", "看电影", "听音乐"]
}
console.log(computer.color, computer.heavy, computer.type, computer.useful);

function Car(heavy, color, type, purpose) { //构造函数创建对象
    this.heavy = heavy;
    this.color = color;
    this.type = type;
    this.purpose = function() {
        console.log('可以载人拉货耕田');
    };
}

let Bao = new Car('600kg', 'black', 'baoma');
for (k in Bao) {
    console.log(Bao[k]);
}
Bao.purpose();

function reverse(arr) { //冒泡排序
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let arr1 = reverse([3, 2, 6, 4, 5, 1]);
console.log(arr1.length);
console.log(arr1);

let time = new Date() //获取当前毫秒数
console.log(time.valueOf());

function conutDown(time) { //倒计时
    let nowTime = +new Date();
    let inputTime = +new Date(time);
    let times = (inputTime - nowTime) / 1000;
    let d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    let h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    let m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    let s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    return d + '天' + h + '时' + m + '分' + s + '秒';
}
console.log(conutDown('2021-7-22 20:00:00'));
let date = new Date()
console.log(date);

let arr = new Array('shit', 'fuck'); //另一种创建数组方式
console.log(arr);

function reverseX(arrX) { //反转数组
    if (arrX instanceof Array) {
        let newArr = [];
        for (let i = arrX.length - 1; i >= 0; i--) {
            newArr[newArr.length] = arrX[i];
        }
        return newArr;
    } else {
        return '这个参数的格式要求必须是数组格式[1,2,3]'
    }
}
console.log(reverseX([1, 2, 3]));
console.log(reverseX(1, 2, 3));
//(1)instanceof 运算符 它可以用来检测是否为数组
let arrZ = [];
let obj = {};
console.log(arrZ instanceof Array);
console.log(obj instanceof Array);
//(2)Array.isArray(参数);H5新增的方法 IE9以上版本支持
console.log(Array.isArray(arrZ));
console.log(Array.isArray(obj));

//1.push()在我们数组的末尾 添加一个或者多个数组元素
let arr2 = [1, 2, 3];
arr2.push(4, 'peek');
console.log(arr2);
//2.unshift()在数组开头 添加一个或者多个数组元素
arr2.unshift('red', 'purple');
console.log(arr2);
//3.pop() 它可以删除数组的最后一个元素
console.log(arr2.pop());
console.log(arr2);
//4.shift() 它可以删除数组的第一个元素
console.log(arr2.shift());
console.log(arr2);

// 1.反转数组
// 数组名.reverse();
// 2.数组排序(冒泡排序)
// 数组名.sort();
let arr3 = [13, 4, 77, 1, 7];
arr3.sort(function(a, b) {
    //return a-b; 升序的顺序排列
    return b - a; //降序的顺序排列
});
console.log(arr3);

// 1.indexOf(数组元素) 作用就是返回该数组元素的索引号
//它值返回第一个满足条件的索引号
//如果在该数组里面找不到元素，则返回的是-1
//2.lastIndexOf(数组元素) 从后开始查找

//1.toString() 将我们的数组转换为字符串
//2.join(分隔符)
//3.concat()链接两个或多个数组 不影响原数组 返回一个新的数组
//4.slice() 数组截取slice(begin,end) 返回被截取项目的新数组
//5.splice() 数组删除splice(从第几个开始,要删除的个数) 返回被删除的新数组
//注意:(5)会影响原数组

//基本包装类型 就是把简单数据类型包装成为了复杂数据类型
//(1)把简单数据类型包装为复杂数据类型
//let temp = new String('andy');
//(1)把临时变量的值给str
//str = temp;
//(3)销毁这个临时变量
//temp = null;

//字符串对象，根据字符返回位置 str.indexof('要查找的字符',[起始位置])
let sss = ['red', 'blue', 'red', 'green', 'pink', 'red'];
let index = sss.indexOf('red');
let num = 0;
while (index !== -1) {
    console.log(index);
    num++;
    index = sss.indexOf('red', index + 1);
}
console.log('red出现的次数是:' + num);

//根据位置返回字符
//charAt(index)返回指定位置的字符(index 字符串的索引号)
//使用str.charAt(0)
//charCodeAt(index)返回指定位置处的字符的ASCII码(index索引号)
//使用str.charCodeAt(0)
//str[index]获取指定位置处字符 HTML5,IE8.0+和charAt()等效


/*var btn = document.querySelector('button');
var div = document.querySelector('div');
btn.onclick = function() {
    div.innerText = getDate();
}

function getDate() {
    var date = new Date()
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var day = date.getDay();
    return '今天是:' + year + '年' + month + '月' + dates + '日' + arr[day];
}
var p = document.querySelector('p');
p.innerText = getDate();*/
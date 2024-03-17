// 设计哈希函数

// 1. 将字符串转为比较大的数字：hashCode
// 2. 将大的数字hashCode压缩到数组范围(大小)之内
function hashFunc(str, size) {
  // 1.定义hashCode变量
  let hashCode = 0;

  // 2.霍纳算法来计算hashCode
  // cats -> Unicode编码
  for (let i = 0; i < str.length; i++) {
    // 幂的底数一般用一个指数，一般用37
    hashCode = 37 * hashCode + str.charCodeAt(i); // 31 37 41 43
  }

  // 3.区域操作
  return index;
}

//测试
console.log(hashFunc("abc", 7)); // 4
console.log(hashFunc("cba", 7)); // 3
console.log(hashFunc("nba", 7)); // 5

// 哈希表实现

function hashTable() {
  //属性
  this.storage = [];
  this.count = 0; // 记录当前数组中已经存在了多少个元素
  this.limit = 7; // 用于标记数组中一共可以存放多少数据
  // loadFactor加载因子 > 0.75 ||  <0.25 大于0.75时要进行扩容，小于0.25时减少容量

  //方法
}

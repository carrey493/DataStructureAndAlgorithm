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

function HashTable() {
  //属性
  this.storage = []; // 数组中存放相关的元素
  this.count = 0; // 记录当前数组中已经存在了多少个元素
  this.limit = 7; // 用于标记数组中一共可以存放多少数据
  // loadFactor加载因子 > 0.75 ||  <0.25 大于0.75时要进行扩容，小于0.25时减少容量

  //方法
  // 哈希函数

  // 1. 将字符串转为比较大的数字：hashCode
  // 2. 将大的数字hashCode压缩到数组范围(大小)之内
  HashTable.prototype.hashFunc = function (str, size) {
    // 1.定义hashCode变量
    let hashCode = 0;

    // 2.霍纳算法来计算hashCode
    // cats -> Unicode编码
    for (let i = 0; i < str.length; i++) {
      // 幂的底数一般用一个指数，一般用37
      hashCode = 37 * hashCode + str.charCodeAt(i); // 31 37 41 43
    }

    // 3.取余操作
    let index = hashCode % size;
    return index;
  };

  // 1.插入&修改操作
  HashTable.prototype.put = function (key, value) {
    // 1. 根据key获取index
    let index = this.hashFunc(key, this.limit);

    // 2. 根据index取出对应的bucket
    let bucket = this.storage[index];

    // 3. 判断该bucket是否为null
    if (bucket === null) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 4. 判断是否为修改数据
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]; // 元组
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    // 5. 进行添加操作
    bucket.push([key, value]);
    this.count += 1;
  };

  // 2.获取方法
  HashTable.prototype.get = function (key) {
    // 1. 根据key获取index
    let index = this.hashFunc(key, this.limit);

    // 2. 根据index获取对应的bucket
    let bucket = this.storage[index];

    // 3. 判断bucket是否为 null
    if (bucket === null) return null;

    // 4. 有bucket，那么就进行线性查找
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]; // 元组
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    // 5.依然没有找到，那么返回null
    return null;
  };
}

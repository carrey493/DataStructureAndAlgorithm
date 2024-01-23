// 封装集合类
function Set() {
  // 属性
  this.items = {}; //使用Object定义集合，因为Object的key值本身就是不可重复的

  //方法
  // 1. add方法
  Set.prototype.add = function (value) {
    // 判断当前集合中是否已经包含了该元素
    if (this.has(value)) {
      return false;
    }
    // 将元素添加到集合中
    this.items[value] = value;
    return true;
  };

  // 2. has方法
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
  };

  // 3. remove方法
  Set.prototype.remove = function (value) {
    // 1. 判断该集合中是否包含该元素
    if (!this.has(value)) {
      return false;
    }
    // 2. 将元素从属性中删除
    delete this.items[value];
    return true;
  };

  // 4. clear方法
  Set.prototype.clear = function () {
    this.items = {};
  };

  // 5. size方法
  Set.prototype.size = function () {
    return Object.keys(this.items).length;
  };

  // 6. 获取集合所有的值
  Set.prototype.values = function () {
    return Object.keys(this.items);
  };

  // 集合间操作

  // 1.并集
  Set.prototype.union = function (otherSet) {
    /* 
    this: 集合A
    otherSet: 集合B
    */
    // 1. 创建新集合
    let unionSet = new Set();
    // 2. 将A集合中所有的元素添加到新集合中
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    // 3. 去除B集合的元素，判断是否需要加到新集合中
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  };

  // 2. 交集
  Set.prototype.intersection = function (otherSet) {
    /* 
    this: 集合A
    otherSet: 集合B
    */
    // 1. 创建新集合
    let intersectionSet = new Set();

    // 2. 从A中取出一个元素，判断是否同时存在于集合B中，存在放入新集合中。
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    }

    return intersectionSet;
  };

  // 3. 差集
  Set.prototype.difference = function (otherSet) {
    /* 
    this: 集合A
    otherset: 集合B
    */

    // 1. 创建新集合
    let differenceSet = new Set();

    // 2.取出A集合中的一个元素，判断是否同时存在于B中，若不存在B中，则添加到新集合中
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      if (!otherSet.has(item)) {
        differenceSet.add(item);
      }
    }
    return differenceSet;
  };

  // 4. 子集
  Set.prototype.subset = function (otherSet) {
    /* 
    this: 集合A
    otherset: 集合B
    遍历集合A中所有的元素，如果发现，集合A中的元素，在集合B中不存在，那么false
    加果遍历完整个集合，依然没有返回false，那么返回true即可
    */

    // 1. 创建新集合
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      if (!otherSet.has(item)) {
        return false;
      }
    }

    return true;
  };
}

// 测试
let set = new Set();
set.add("abc");
set.add("oef");
set.add("abc");
set.add("nba");
set.add("cba");

console.log(set); //Set { items: { abc: 'abc', oef: 'oef' } }
console.log(set.values()); //[ 'abc', 'oef' ]

set.remove("oef");
console.log(set); //Set { items: { abc: 'abc', nba: 'nba', cba: 'cba' } }
console.log(set.has("cba")); //true
console.log(set.size()); //3
set.clear();
console.log(set.size()); //0

let setA = new Set();
setA.add("111");
setA.add("222");

let setB = new Set();
setB.add("333");
setB.add("444");
setB.add("111");

let unionSet = setA.union(setB);
console.log(unionSet); // items: { '111': '111', '222': '222', '333': '333', '444': '444' }

let intersectionSet = setA.intersection(setB);
console.log(intersectionSet); //{ items: { '111': '111' } }

console.log({ setA }, { setB });
let differenceSet = setB.difference(setA);
console.log("差集：", differenceSet);
console.log("子集：", setA.subset(setB));

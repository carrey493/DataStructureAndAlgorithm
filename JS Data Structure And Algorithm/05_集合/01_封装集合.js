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
}

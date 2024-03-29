function Dictionay() {
  // 字典属性
  this.items = {};

  // 字典操作方法
  // 在字典中添加键值对
  Dictionay.prototype.set = function (key, value) {
    this.items[key] = value;
  };

  // 判断字典中是否有某个key
  Dictionay.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
  };

  // 从字典中移除元素
  Dictionay.prototype.remove = function (key) {
    // 1.判断字典中是否有这个key
    if (!this.has(key)) return false;

    // 2.从字典中删除key
    delete this.items[key];
    return true;
  };

  // 根据key去获取value
  Dictionay.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
  };

  // 获取所有的keys
  Dictionay.prototype.keys = function () {
    return Object.keys(this.items);
  };

  // 获取所有的value
  Dictionay.prototype.values = function () {
    return Object.values(this.items);
  };

  // size方法
  Dictionay.prototype.size = function () {
    return this.keys().length;
  };

  // clear方法
  Dictionay.prototype.clear = function () {
    this.items = {};
  };
}

// 创建字典对象
var dict = new Dictionay();

// 在字典中添加元素
dict.set("age", 18);
dict.set("name", "Coderwhy");
dict.set("height", 1.88);
dict.set("address", "广州市");

// 获取字典的信息
alert(dict.keys()); // age,name,height,address
alert(dict.values()); // 18,Coderwhy,1.88,广州市
alert(dict.size()); // 4
alert(dict.get("name")); // Coderwhy

// 字典的删除方法
dict.remove("height");
alert(dict.keys()); // age,name,address

// 清空字典
dict.clear();

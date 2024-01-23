// 封装双向链表

function DoublyLinkedList() {
  //内部类：节点类
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
  // 属性
  this.head = null;
  this.tail = null;
  this.length = 0;

  //1.append方法
  DoublyLinkedList.prototype.append = function (data) {
    var newNode = new Node(data);
    // 判断是否添加的是第一个节点
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
  };

  //2.链表转字符串方法
  DoublyLinkedList.prototype.toString = function () {
    return this.backwardString();
  };
  DoublyLinkedList.prototype.forwardString = function () {
    // 定义变量
    let current = this.tail;
    let resultString = "";
    //依次向前遍历,获取每一个节点
    while (current) {
      resultString += current.data + " ";
      current = current.prev;
    }
    return resultString;
  };
  DoublyLinkedList.prototype.backwardString = function () {
    // 定义变量
    let current = this.head;
    let resultString = "";

    //依次向后遍历,获取每一个节点
    while (current) {
      resultString += current.data + " ";
      current = current.next;
    }
    return resultString;
  };

  // 3.insert方法
  DoublyLinkedList.prototype.insert = function (position, data) {
    //1.越界判断
    if (position < 0 || position > this.length) return false;

    //2.创建新的节点
    let newNode = new Node(data);

    //3.判断原来的链表是否为空
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //3.1判断position是否为0
      if (position === 0) {
        this.head.prev = newNode; //原来的第一个节点的prev=newNode
        newNode.next = this.head; //newNode的next=原来的第一个节点
        this.head = newNode; //this.head等于新的节点
      } else if (position === this.length) {
        //3.1判断position是否为最后一个
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      }
      this.length += 1;
      return true;
    }
  };

  // 4.get方法
  DoublyLinkedList.prototype.get = function (position) {
    //1.越界判断
    if (position < 0 || position >= this.length) return false;
    //2.获取元素
    let current = this.head;
    let index = 0;

    /* this.length / 2  > position //从头向后遍历
   this.length / 2  < position //从后向前遍历*/

    while (index++ < position) {
      current = current.next;
    }

    return current.data;
  };

  //5.indexOf方法
  DoublyLinkedList.prototype.indexOf = function (data) {
    //1.定义变量
    let current = this.head;
    let index = 0;

    //2.查找和data相同的节点
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index += 1;
    }

    return -1;
  };

  //6.update方法
  DoublyLinkedList.prototype.update = function (position, newData) {
    //1.越界判断
    if (position < 0 || position >= this.length) return false;

    //2.寻找正确的节点
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }

    //3.修改找到节点的信息
    current.data = newData;
    return true;
  };

  //7.removeAt方法
  DoublyLinkedList.prototype.remveAt = function (position) {
    //1.越界判断
    if (position < 0 || position >= this.length) return null;
    if (this.length === 0) return null;

    //2.判断是否只有一个节点
    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //判断是否删除的是第一个节点
      if (position === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {
        console.log(55555555);
        //表示删除最后一个节点
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        console.log(55555555);
        let index = 0;

        while (index++ < position) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }

    //3.length - 1
    this.length -= 1;

    return current.data;
  };

  //8.remove方法
  DoublyLinkedList.prototype.remove = function (data) {
    //1.根据data获取下标值
    let index = this.indexOf(data);

    //2.根据index删除对应节点
    return this.remveAt(index);
  };

  //9.isEmpty方法
  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  };

  //10.size方法
  DoublyLinkedList.prototype.size = function () {
    return this.length;
  };

  //11.获取链表的第一个元素
  DoublyLinkedList.prototype.getHead = function () {
    return this.head.data;
  };

  //12.获取链表的最后有一个元素
  DoublyLinkedList.prototype.getTail = function () {
    return this.tail.data;
  };
}

let list = new DoublyLinkedList();
list.append("abc");
list.append("opi");
list.append("yui");
console.log(list);
console.log(list.toString()); //abc opi yui
list.insert(0, "qqq");
list.insert(4, "opidd");
list.insert(2, "piaq");
console.log(list);
console.log(list.toString()); //qqq abc piaq opi yui opidd
console.log(list.get(3)); //opi
console.log(list.indexOf("opi")); //3
console.log(list.indexOf("opia")); //-1
console.log(list.toString());
console.log(list.update(0, "oooo"));
console.log(list.toString());
list.remveAt(0);
console.log(list.toString());

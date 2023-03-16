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

  //1.appen方法
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
    return this.backwardString()
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
}

let list = new DoublyLinkedList()
list.append('abc')
list.append('opi')
list.append('yui')
console.log(list);
console.log(list.toString());//abc opi yui 


// 封装链表类

function LinkedList() {
    //内部类：节点类
    function Node(data) {
        this.data = data
        this.next = null
    }

    //属性
    this.head = null
    this.length = 0

    //1.追加方法
    LinkedList.prototype.append = function (data) {
        //1.创建一个新节点
        var newNode = new Node(data)
        //2.判断是否添加的是第一个节点
        if (this.length === 0) {
            //2.1是第一个节点
            this.head = newNode
        } else {
            //2.2不是第一个节点
            let current = this.head
            while (current.next) {
                current = current.next
            }
            //2.3最后节点的next指向新的节点
            current.next = newNode
        }
        //3.节点长度加一
        this.length += 1
    }

    //2.toString方法
    LinkedList.prototype.toString = function () {
        //1.定义变量
        var current = this.head
        var listString = ''

        //2.循环获取一个节点
        while (current) {
            listString += current.data + ''
            current = current.next
        }

        return listString
    }

    //3.insert方法
    LinkedList.prototype.insert = function (position, data) {
        //1.对position进行越界判断
        if (position < 0 || position > this.length) return false

        //2.根据data创建newNode
        let newNode = new Node(data)

        //3.插入数据:看位置是否是第一个
        if (position === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let index = 0
            let current = this.head
            let previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }

        //4.长度+1
        this.length += 1

        return true
    }

    //4.get方法
    LinkedList.prototype.get = function (position) {
        //1.越界判断
        if (position < 0 || position >= this.length) return null

        //2.获取对应的数据
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        return current.data
    }

    //5.indexOf方法
    LinkedList.prototype.indexOf = function (data) {
        //1.定义变量
        let current = this.head
        let index = 0

        //2.开始查找
        while (current) {
            if (current.data === data) {
                return index
            }
            current = current.next
            index += 1
        }

        //3.最后没有找到返回-1
        return -1
    }

    //6.update方法
    LinkedList.prototype.update = function (position, newData) {
        //1.对position进行越界判断
        if (position < 0 || position >= this.length) return false

        //2.查找正确的节点
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }

        //3.将position位置的node修改成为newData
        current.data = newData
        return true
    }

    //7.removeAt()方法
    LinkedList.prototype.removeAt = function (position) {
        //1.对position进行越界判断
        if (position < 0 || position >= this.length) return null

        //2.判断是否删除的是第一个节点
        let current = this.head
        if (position === 0) {
            this.head = this.head.next
        } else {
            let index = 0
            let previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            //前一个节点的next指向current的next即可
            previous.next = current.next
        }
        this.length -= 1
        return current.data
    }

    //8.remove方法
    LinkedList.prototype.remove = function (data) {
        //1.根据data获取在列表中的位置
        let position = this.indexOf(data)
        //2.根据位置信息删除节点
        this.length -= 1
        return this.removeAt(position)
    }

    //9.isEmpty方法
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0
    }

    //10.size方法
    LinkedList.prototype.size = function () {
        return this.length
    }
}

//1.创建linkList
var list = new LinkedList()

//2.测试append方法
list.append('abc')
list.append('cba')
list.append('nba')

console.log(list);
/* LinkedList {
    head: Node { data: 'abc', next: Node { data: 'cba', next: [Node] } },
    length: 3
  } */
console.log(list.toString());//abccbanba

//3.测试insert方法
list.insert(0, 'aaa')
list.insert(3, 'opi')
list.insert(5, 'clo')
console.log(list);
/* 
LinkedList {
    head: Node { data: 'aaa', next: Node { data: 'abc', next: [Node] } },
    length: 6
  } 
*/
console.log(list.toString());//aaaabccbaopinbaclo
console.log(list.get(5));//clo

console.log(list.indexOf('opi'));//3
console.log(list.indexOf('cba'));//2

console.log(list.update(0, 'qqqqqq'));
console.log(list);
/* 
LinkedList {
    head: Node { data: 'qqqqqq', next: Node { data: 'abc', next: [Node] } },
    length: 6
  } 
*/
console.log(list.removeAt(0));
console.log(list);
/* 
qqqqqq
LinkedList {
  head: Node { data: 'abc', next: Node { data: 'cba', next: [Node] } },
  length: 5
}
*/
console.log(list.removeAt(3));
console.log(list);
/* 
nba
LinkedList {
  head: Node { data: 'abc', next: Node { data: 'cba', next: [Node] } },
  length: 4
}
*/
console.log(list.remove('abc'));
console.log(list);
/* 
abc
LinkedList {
  head: Node { data: 'cba', next: Node { data: 'opi', next: [Node] } },
  length: 3
}
*/
console.log(list.isEmpty());//false
console.log(list.size());//

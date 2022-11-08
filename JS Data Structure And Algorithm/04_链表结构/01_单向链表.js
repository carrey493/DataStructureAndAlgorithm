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

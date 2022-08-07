// 封装链表类

function LinkList() {
    //内部类：节点类
    function Node(data) {
        this.data = data
        this.next = null
    }

    //属性
    this.head = null
    this.length = 0
}
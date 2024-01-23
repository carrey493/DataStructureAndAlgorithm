//封装优先级队列
function PriorityQueue() {
    //在PriorityQueue重新创建了一个类
    function QueueElemnt(element, priority) {
        this.element = element
        this.priority = priority
    }

    //封装属性
    this.items = []

    //1.实现插入方法
    PriorityQueue.prototype.enqueue = function (element, priority) {
        //创建QueueElement对象
        let queueElemnt = new QueueElemnt(element, priority)

        //判断队列是否为空
        if (this.items.length === 0) {
            this.items.push(queueElemnt)
        } else {
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                if (queueElemnt.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElemnt)
                    added = true
                    break
                }
            }
            if (!added) {
                this.items.push(queueElemnt)
            }
        }
    }

    //2.从队列中删除前端元素
    PriorityQueue.prototype.dequeue = function () {
        return this.items.shift()
    }

    //3.查看前端元素
    PriorityQueue.prototype.front = function () {
        return this.items[0]
    }

    //4.查看队列是否为空
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length === 0
    }

    //5.查看队列中元素的个数
    PriorityQueue.prototype.size = function () {
        return this.items.length
    }

    //6.toString方法
    PriorityQueue.prototype.toString = function () {
        let resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ''
        }
        return resultString
    }
}

// 测试代码
let pq = new PriorityQueue()
pq.enqueue('abc', 111)
pq.enqueue('cba', 151)
pq.enqueue('nba', 66)
pq.enqueue('wba', 856)
console.log(pq);
//封装队列类
function Queue() {
    //属性
    this.items = []
    //方法

    //1.将元素加入到队列中
    Queue.prototype.enqueue = function (element) {
        this.items.push(element)
    }

    //2.从队列中删除前端元素
    Queue.prototype.dequeue = function () {
        return this.items.shift()
    }

    //3.查看前端元素
    Queue.prototype.front = function () {
        return this.items[0]
    }

    //4.查看队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0
    }

    //5.查看队列中元素的个数
    Queue.prototype.size = function () {
        return this.items.length
    }

    //6.toString方法
    Queue.prototype.toString = function () {
        let resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ''
        }
        return resultString
    }
}

//使用队列
let queue = new Queue

queue.enqueue('first')
queue.enqueue('second')
queue.enqueue('third')
queue.enqueue('fourth')
console.log(queue);//Queue { items: [ 'first', 'second', 'third', 'fourth' ] }

queue.dequeue()
console.log(queue);//Queue { items: [ 'second', 'third', 'fourth' ] }
queue.dequeue()
console.log(queue);//Queue { items: [ 'third', 'fourth' ] }

console.log(queue.front());//third

console.log(queue.isEmpty());//false

console.log(queue.size());//2

console.log(queue.toString());//thirdfourth

//击鼓传花
function paseGame(nameList, num) {
    //创建一个队列
    let queue = new Queue()

    //将所有人依次加入队列
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    //开始数数字
    while (queue.size() > 1) {
        //不是num的时候吗，重新加入到队列的末尾
        //num数字之前的人重新放入到队列的末尾
        for (let i = 0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue())
        }
        //num对应的这个人直接从队列中删除 
        queue.dequeue()
    }
    //获取剩下的结果
    let endName = queue.front()
    console.log(endName);
    return nameList.indexOf(endName)
}

paseGame(['lisi', 'zhangsan', 'fgbfd', 'tom', 'jack', 'lisa', 'ez', 'laoshu', 'jikdf', 'dsada', 'poru', 'fjds'], 6)//fgbfd
//封装栈类

// method:和某一个对象实例有关系
// function:对象外部创建

function Stack() {
    //栈中的属性
    this.items = []

    //栈的相关操作

    //1.将元素压入栈
    // this.push = function(){} 给某一个对象的实例添加方法
    Stack.prototype.push = function (element) {
        this.items.push(element)
    }//给整个类添加方法，是共享的，节省内存，提升效率

    //2.从栈中取出元素
    Stack.prototype.pop = function () {
        return this.items.pop()
    }

    //3.查看栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1]
    }

    //4.判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0
    }

    //5.获取栈中元素的个数
    Stack.prototype.size = function () {
        return this.items.length
    }

    //6.toString方法
    Stack.prototype.toString = function () {
        let resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ''
        }
        return resultString
    }
}

//栈的使用
let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

console.log(stack);//Stack { items: [ 10, 20, 30, 40, 50 ] }

console.log(stack.pop());//50
console.log(stack.pop());//40
console.log(stack.pop());//30

console.log(stack.peek());//20

console.log(stack.isEmpty());//false

console.log(stack.size());//2

console.log(stack.toString());//1020


//十进制转换为二进制
function dec2bin(decNumber) {
    //1.定义一个栈对象
    let stack = new Stack()

    //2.循环操作
    while (decNumber > 0) {
        //2.1获取余数，并且放入到队列中
        stack.push(decNumber % 2)
        //2.2获取整除后的结果作为下次运算的数字
        decNumber = Math.floor(decNumber / 2)
    }

    //3.从栈中取出0和1

    let binaryString = ''
    while (!stack.isEmpty()) {
        binaryString += stack.pop()
    }
    return binaryString
}

console.log(dec2bin(100));//1100100
console.log(dec2bin(1000));//1111101000

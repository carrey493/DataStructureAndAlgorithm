### 一.认识栈结构

- 栈也是一种非常常见的数据结构,并且在程序中的应用非常广泛
- 数组
  - 我们知道数组是一种线性结构，并且可以在数组的任意位置插入和删除数据.
  - 但是有时候,我们为了实现某些功能,必须对这种任意性加以限制.
  - 而栈和队列就是比较常见的受限的线性结构,我们先来学习栈结构.
- 栈结构示意图

![](https://img2022.cnblogs.com/blog/2332774/202205/2332774-20220531002453112-626187989.png)

- 栈( stack ) ，它是一种受限的线性表,后进先出(LIFO)
  - 其限制是仅允许在表的一端进行插入和删除运算。这一端被称为栈顶，相对地，把另一端称为栈底。
  - LIFO(last in first out)表示就是后进入的元素，第一个弹出栈空间.类似于自动餐托盘，最后放上的托盘,往往先把拿出去使用.
  - 向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素;
  - 从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。
- 生活中类似于栈的
  - 自助餐的托盘,最新放上去的,最先被客人拿走使用.
  - 收到很多的邮件(实体的),从上往下依次处理这些邮件.(最新到的邮件，最先处理)
  - 注意:不允许改变邮件的次序，比如从最小开始,或者处于最紧急的邮件，否则就不再是栈结构了.而是队列或者优先级队列结构.
- 程序中什么是使用栈实现的呢?
  - 学了这么久的编程,是否听说过,函数调用栈呢?
  - 我们知道函数之间和相互调用:A调用B, B中又调用C,C中又调用D.
  - 那样在执行的过程中,会先将A压入栈,A没有执行完,所有不会弹出栈.
  - 在A执行的过程中调用了B,会将B压入到栈这个时候B在栈顶,A在栈底.
  - 如果这个时候B可以执行完,那么B会弹出栈.但是B有执行完吗?没有,它调用了C.
  - 所以C会压栈，并且在栈顶.而C调用了D,D会压入到栈顶.
  - 所以当前的栈顺序是:栈顶A->B->C->D栈顶
  - D执行完,弹出栈.C/B/A依次弹出栈.
  - 所以我们有函数调用栈的称呼,就来自于它们内部的实现机制.(通过栈来实现的)

![](https://img2022.cnblogs.com/blog/2332774/202205/2332774-20220531003353944-1622521499.png)

### 二.栈的面试题

![](https://img2022.cnblogs.com/blog/2332774/202206/2332774-20220609004029311-276316902.png)

3 4 6 5 2 1

![](https://img2022.cnblogs.com/blog/2332774/202206/2332774-20220609004558919-1003612747.png)

### 三.栈结构的实现

- 实现栈结构有两种比较常见的方式:
  - 基于数组实现
  - 基于链表实现
- 什么是链表?
  - 也是一种数据结构,目前我们还没有学习，并且JavaScript中并没有自带链表结构.
  - 后续,我们会自己来实现链表结构,并且对比数组和链表的区别.
- 因此,我们这里实现的栈结构基于数组.
```js
function Stack() {
    //栈中的属性
    this.items = []
}
```

### 四.栈的操作
- 常见有哪些操作呢?
  - push(element):添加一个新元素到栈顶位置
  - pop()∶移除栈顶的元素，同时返回被移除的元素。
  - peek():返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它)。
  - isEmpty()∶如果栈里没有任何元素就返回true，否则返回false。
  - size():返回栈里的元素个数。这个方法和数组的length属性很类似。
  - toString():将栈结构的内容以字符形式返回。

现在,我们可以在类中一一实现这些方法!
```js
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
```

### 五.栈的应用
**十进制转二进制**
- 我们已经学会了如何使用Stack类，现在就用它解决一些计算机科学中的问题。
- 为什么需要十进制转二进制?
  - 现实生活中，我们主要使用十进制。
  - 但在计算科学中，二进制非常重要，因为计算机里的所有内容都是用二进制数字表示的(0和1)。
  - 没有十进制和二进制相互转化的能力，与计算机交流就很困难。
- 如何实现十进制转二进制?
  - 要把十进制转化成二进制，我们可以将该十进制数字和2整除
(二进制是满二进一），直到结果是0为止。
  - 举个例子，把十进制的数字10转化成二进制的数字，过程大概是这样:
  
 ![](https://img2022.cnblogs.com/blog/2332774/202206/2332774-20220627002235169-491416018.png)

- 实现
```js
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
```
## JS 数据结构与算法概述

> 学习地址：https://www.bilibili.com/video/BV1yD4y127vy

- 数据结构: 计算机存储, 组织数据的方式, 就像锅碗瓢盆

- 算法: 一系列解决问题的清晰指令, 就像食谱

- 两者关系: 程序 = 数据结构 + 算法

## 邂逅数据结构与算法

### 一.什么是数据结构与算法

#### 什么是数据结构

- 数据结构是数据对象，以及存在于该对象的实例和组成实例的数据元素之间的各种联系。这些联系可以通过定义相关的函数来给出。
- 数据结构是 ADT（抽象数据类型 Abstract Data Type )的物理实现。
- 数据结构（ data structure )是计算机中存储、组织数据的方式。通常情况下，精心选择的数据结构可以带来最优效率的算法。

**数据结构就是在计算机中，存储和组织数据的方式**

#### 常见的数据结构

`数组` `栈` `链表` `图` `散列表` `队列` `树` `堆`

- 每一种都有其对应的应用场景,不同的数据结构的不同操作性能是不同的
- 有的查询性能很快,有的插入速度很快,有的是插入头和尾速度很快
- 有的做范围查找很快,有的允许元素重复,有的不允许重复等等
- 在开发中如何选择,要根据具体的需求来选择

#### 什么是算法(Algorithm)

- 一个有限指令集,每条指令的描述不依赖于语言
- 接受一些输入(有些情况下不需要输入)
- 产生输出
- 一定在有限步骤之后终止
- Algorithm 这个单词本意就是解决问题的办法/步骤逻辑
- 数据结构的实现,离不开算法

### 二.生活中的数据结构与算法

**数据结构与算法在生活中的使用随处可见，使用数据结构与算法会极大的提高人类生产的效率**

## 数组结构

- 几乎所有的编程语言都原生支持数组类型，因为数组是最简单的内存数据结构。
- 数组通常情况下用于存储一系列同一种数据类型的值。
- 但在 JavaScript 里，也可以在数组中保存不同类型的值。
- 但我们还是要遵守最佳实践，别这么做（大多数语言都没这个能力）。

**补充普通语言的数组封装(比如 Java 的 ArrayList)**

- 常见语言的数组不能存放不同的数据类型,因此所有在封装时通常存放在数组中的是 Object 类型
- 常见语言的数组容量不会自动改变.(需要进行扩容操作)
- 常见语言的数组进行中间插入和删除操作性能比较低

### 一.数组的基本使用

- 几乎所有的编程语言都原生支持数组类型，因为数组是最简单的内存数据结构。
- 数组通常情况下用于存储一系列同一种数据类型的值。
- 在 JavaScript 里，也可以在数组中保存不同类型的值。

#### 1.为什么使用数组?

100 个变量的是非常不方便管理的, 而且当我们需要找到某一个时, 从 100 个变量中去搜索也是一个问题.

#### 2.创建和初始化数组

用 JavaScript 声明、创建和初始化数组很简单，就像下面这样：

```js
// 创建和初始化数组
var daysOfWeek = new Array();
var daysOfWeek = new Array(7);
var daysOfWeek = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);
```

- 使用 new 关键字，就能简单地声明并初始化一个数组
- 用这种方式，还可以创建一个指定长度的数组.
- 另外，也可以直接将数组元素作为参数传递给它的构造器
- 用 new 创建数组并不是最好的方式。如果你想在 JavaScript 中创建一个数组，只用中括号（[]）的形式就行了

#### 3.数组长度和遍历数组

- 如果我们希望获取数组的长度, 有一个 length 属性

```js
// 获取数组的长度
alert(daysOfWeek.length);
```

- 也可以通过下标值来遍历数组:

```js
// 普通for方式遍历数组
for (var i = 0; i < daysOfWeek.length; i++) {
  alert(daysOfWeek[i]);
}

// 通过foreach遍历数组
daysOfWeek.forEach(function (value) {
  alert(value);
});
```

### 二. 数组的常见操作

**数组中常见的操作有: 添加元素、删除元素、修改元素、获取元素.**

#### 1.添加元素

- JavaScript 中, 进行我们上述的操作都比较简单: 因为语言本身都已经封装好了这些特定.
- 添加一个元素到数组的最后位置:

```js
// 添加一个元素到数组的最后位置
// 方式一:
numbers[numbers.length] = 10;

// 方式二:
numbers.push(11);
numbers.push(12, 13);

alert(numbers);
```

- 在数组首位插入一个元素:

```js
// 在数组首位插入一个元素
for (var i = numbers.length; i > 0; i--) {
  numbers[i] = numbers[i - 1];
}
numbers[0] = -1;
alert(numbers); // -1,0,1,2,3,4,5,6,7,8,9,10,11,12,13
```

- 考虑上面代码实现的性能怎么呢?
  - 性能并不算非常高
  - 这也是数组和链表(后面我们会学习到)相对比的一个劣势: 在中间位置插入元素的效率比链表低.
- 我们在数组首位插入数据可以直接使用 unshift 方法

```js
// 通过unshift在首位插入数据
numbers.unshift(-2);
numbers.unshift(-4, -3);
alert(numbers); // -4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13
```

#### 2.删除元素

- 如果希望删除数组最后的元素, 可以使用 pop()方法

```js
// 删除最后的元素
numbers.pop();
alert(numbers); // -4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12
```

- 如果我们希望移除的首位元素, 自己实现代码:

```js
// 删除首位的元素
for (var i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}
numbers.pop();
alert(numbers);
```

- 我们可以直接使用 shift 方法来实现:

```js
numbers.shift();
alert(numbers);
```

#### 3.任意位置

- 任意位置?
  - 前面我们学习的主要是在数组的开头和结尾处添加和删除数据.
  - 那如果我们希望在数组的中间位置进行一些操作应该怎么办呢?
- 一方面, 我们可以自己封装这样的函数, 但 JS 已经给我们提供了一个 splice 方法
- 通过 splice 删除数据

```js
// 删除指定位置的几个元素
numbers.splice(5, 3);
alert(numbers); // -4,-3,-2,-1,0,4,5,6,7,8,9,10,11,12,13
```

- 代码解析:
  - 上面的代码会删除索引为 5, 6, 7 位置的元素.
  - 第一个参数表示索引起始的位置为 5(其实是第 6 个元素, 因为索引从 0 开始的), 删除 3 个元素.
- 如果我们希望使用 splice 来插入数据呢?

```js
// 修改指定位置的元素
numbers.splice(5, 3, "a", "b", "c");
alert(numbers); // -4,-3,-2,-1,0,a,b,c,4,5,6,7,8,9,10,11,12,13
```

- 代码解析:
  - 上面的代码会从索引 5 的位置开始修改数据, 修改多少个呢? 第二个参数来决定的.
  - 第一个参数依然是索引的位置为 5(第六个位置)
  - 第二个参数是要将数组中多少个元素给替换掉, 我们这里是 3 个(也可以使用 3 个元素来替换 2 个, 可以自己尝试一下)
  - 后面跟着的就是要替换的元素.

### 三. 数组的其他操作

上面学习的是对数组的一些基本操作.

JavaScript 中添加了很多方便操作数据的方法, 我们一些来简单回顾一下.

#### 1.常见方法

- 我们先对常见的方法简单来看一下

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9e15783c0ae4c259d6aa345e0deb6ab~tplv-k3u1fbpfcp-zoom-1.image)

#### 2.数组合并

- 数组的合并非常简单, 使用 concat 即可(也可以直接+进行合并)

```js
// 数组的合并
var nums1 = [1, 2, 3];
var nums2 = [100, 200, 300];
var newNums = nums1.concat(nums2);
alert(newNums); // 1,2,3,100,200,300

newNums = nums1 + nums2;
alert(newNums); // 1,2,3,100,200,300
```

#### 3.迭代方法

- 为了方便操作数组, JS 提供了很多迭代器方法, 我们来回顾一下
- every()方法
  - every()方法是将数组中每一个元素传入到一个函数中, 该函数返回 true/false.
  - 如果函数中每一个元素都返回 true, 那么结果为 true, 有一个为 false, 那么结果为 false
- every()练习:
- 判断一组元素中是否都包含某一个字符

```js
// 定义数组
var names = ["abc", "cb", "mba", "dna"];

// 判断数组的元素是否都包含a字符
var flag = names.every(function (t) {
  return t.indexOf("a") != -1;
});
alert(flag);
```

- some()方法

  - some()方法是将数组中每一个元素传入到一个函数中, 该函数返回 true/false
  - 但是和 every 不同的是, 一旦有一次函数返回了 true, 那么迭代就会结束. 并且结果为 true

- some()练习

```js
// 定义数组
var names = ["abc", "cb", "mba", "dna"];

// 判断数组中是否包含有a字符的字符
var flag = names.some(function (t) {
  alert(t);
  return t.indexOf("a") != -1;
});
alert(flag);
```

- forEach()方法
  - forEach()方法仅仅是一种快速迭代数组的方式而已.
  - 该方法不需要返回值
- forEach 的使用

```js
// 定义数组
var names = ["abc", "cb", "mba", "dna"];

// forEach的使用
names.forEach(function (t) {
  alert(t);
});
```

- filter()方法
  - filter()方法是一种过滤的函数
  - 首先会遍历数组中每一个元素传入到函数中
  - 函数的结果返回 true, 那么这个元素会被添加到最新的数组中, 返回 false, 则忽略该元素.
  - 最终会形成一个新的数组, 该数组就是 filter()方法的返回值
- filter()的练习:

```js
// 定义数组
var names = ["abc", "cb", "mba", "dna"];

// 获取names中所有包含'a'字符的元素
var newNames = names.filter(function (t) {
  return t.indexOf("a") != -1;
});
alert(newNames);
```

- map()方法
  - map()方法提供的是一种映射函数.
  - 首先会遍历数组中每一个元素传入到函数中.
  - 元素会经过函数中的指令进行各种变换, 生成新的元素, 并且将新的元素返回.
  - 最终会将返回的所有元素形成一个新的数组, 该数组就是 map()方法的返回值
- map()练习:

```js
// 定义数组
var names = ["abc", "cb", "mba", "dna"];

// 在names中所有的元素后面拼接-abc
var newNames = names.map(function (t) {
  return t + "-abc";
});
alert(newNames);
```

- reduce 方法
  - 我们单独拿出 reduce 方法, 因为这个方法相对来说难理解一点
  - 首先, 我们来看这个方法需要的参数:

```js
arr.reduce(callback[, initialValue])
```

- 参数 - callback（一个在数组中每一项上调用的函数，接受四个函数：） - previousValue（上一次调用回调函数时的返回值，或者初始值） - currentValue（当前正在处理的数组元素） - currentIndex（当前正在处理的数组元素下标） - array（调用 reduce()方法的数组） - initialValue（可选的初始值。作为第一次调用回调函数时传给 previousValue 的值）
- 理解
  - 求一个数字中数字的累加和
- 使用 for 实现:

```js
// 1.定义数组
var numbers = [1, 2, 3, 4];

// 2.for实现累加
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
alert(total); // 10
```

- 使用 forEach 简化 for 循环
  - 相对于 for 循环, forEach 更符合我们的思维(遍历数组中的元素)

```js
// 3.使用forEach
var total = 0;
numbers.forEach(function (t) {
  total += t;
});
alert(total);
```

- 使用 reduce 方法实现

```js
// 4.使用reduce方法
var total = numbers.reduce(function (pre, cur) {
  return pre + cur;
});
alert(total);
```

- 代码解析:

  - pre 中每次传入的参数是不固定的, 而是上次执行函数时的结果保存在了 pre 中
  - 第一次执行时, pre 为 0, cur 为 1
  - 第二次执行时, pre 为 1 (0+1, 上次函数执行的结果), cur 为 2
  - 第三次执行时, pre 为 3 (1+2, 上次函数执行的结果), cur 为 3
  - 第四次执行时, pre 为 6 (3+3, 上次函数执行的结果), cur 为 4
  - 当 cur 为 4 时, 数组中的元素遍历完了, 就直接将第四次的结果, 作为 reduce 函数的返回值进行返回.

- 似乎和 forEach 比较没有太大的优势呢?
  - 通过这个代码你会发现, 你不需要在调用函数前先定义一个变量, 只需要一个变量来接收方法最终的参数即可.
  - 但是这就是优势吗? 不是, 优势在于 reduce 方法有返回值, 而 forEach 没有.
  - 这算什么优势? 如果 reduce 方法有返回值, 那么 reduce 方法本身就可以作为参数直接传递给另外一个需要 reduce 返回值的作为参数的函数. 而 forEach 中你只能先将每次函数的结果保存在一个变量, 最后再将变量传入到参数中.
  - 没错, 这就是最近非常流行的函数式编程. 也是为了几乎每个可以使用函数式编程的语言都有 reduce 这个方法的原因.
  - 关于函数式编程, 不再本次课程的讨论之中, 只是看到了这个函数, 给大家延伸了一下而已.(后面有机会和大家分享函数式编程)
- initialValue 还需要讲吗?
  - 其实就是第一次执行 reduce 中的函数时, pre 的值.
  - 因为默认 pre 第一次执行时为 0.

## 栈结构

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
  - 我们知道函数之间和相互调用:A 调用 B, B 中又调用 C,C 中又调用 D.
  - 那样在执行的过程中,会先将 A 压入栈,A 没有执行完,所有不会弹出栈.
  - 在 A 执行的过程中调用了 B,会将 B 压入到栈这个时候 B 在栈顶,A 在栈底.
  - 如果这个时候 B 可以执行完,那么 B 会弹出栈.但是 B 有执行完吗?没有,它调用了 C.
  - 所以 C 会压栈，并且在栈顶.而 C 调用了 D,D 会压入到栈顶.
  - 所以当前的栈顺序是:栈顶 A->B->C->D 栈顶
  - D 执行完,弹出栈.C/B/A 依次弹出栈.
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
  - 也是一种数据结构,目前我们还没有学习，并且 JavaScript 中并没有自带链表结构.
  - 后续,我们会自己来实现链表结构,并且对比数组和链表的区别.
- 因此,我们这里实现的栈结构基于数组.

```js
function Stack() {
  //栈中的属性
  this.items = [];
}
```

### 四.栈的操作

- 常见有哪些操作呢?
  - push(element):添加一个新元素到栈顶位置
  - pop()∶ 移除栈顶的元素，同时返回被移除的元素。
  - peek():返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它)。
  - isEmpty()∶ 如果栈里没有任何元素就返回 true，否则返回 false。
  - size():返回栈里的元素个数。这个方法和数组的 length 属性很类似。
  - toString():将栈结构的内容以字符形式返回。

现在,我们可以在类中一一实现这些方法!

```js
function Stack() {
  //栈中的属性
  this.items = [];

  //栈的相关操作

  //1.将元素压入栈
  // this.push = function(){} 给某一个对象的实例添加方法
  Stack.prototype.push = function (element) {
    this.items.push(element);
  }; //给整个类添加方法，是共享的，节省内存，提升效率

  //2.从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop();
  };

  //3.查看栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };

  //4.判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  //5.获取栈中元素的个数
  Stack.prototype.size = function () {
    return this.items.length;
  };

  //6.toString方法
  Stack.prototype.toString = function () {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + "";
    }
    return resultString;
  };
}
//栈的使用
let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack); //Stack { items: [ 10, 20, 30, 40, 50 ] }

console.log(stack.pop()); //50
console.log(stack.pop()); //40
console.log(stack.pop()); //30

console.log(stack.peek()); //20

console.log(stack.isEmpty()); //false

console.log(stack.size()); //2

console.log(stack.toString()); //1020
```

### 五.栈的应用

**十进制转二进制**

- 我们已经学会了如何使用 Stack 类，现在就用它解决一些计算机科学中的问题。
- 为什么需要十进制转二进制?
  - 现实生活中，我们主要使用十进制。
  - 但在计算科学中，二进制非常重要，因为计算机里的所有内容都是用二进制数字表示的(0 和 1)。
  - 没有十进制和二进制相互转化的能力，与计算机交流就很困难。
- 如何实现十进制转二进制?

  - 要把十进制转化成二进制，我们可以将该十进制数字和 2 整除
    (二进制是满二进一），直到结果是 0 为止。
  - 举个例子，把十进制的数字 10 转化成二进制的数字，过程大概是这样:

    ![](https://img2022.cnblogs.com/blog/2332774/202206/2332774-20220627002235169-491416018.png)

- 实现

```js
//十进制转换为二进制
function dec2bin(decNumber) {
  //1.定义一个栈对象
  let stack = new Stack();

  //2.循环操作
  while (decNumber > 0) {
    //2.1获取余数，并且放入到队列中
    stack.push(decNumber % 2);
    //2.2获取整除后的结果作为下次运算的数字
    decNumber = Math.floor(decNumber / 2);
  }

  //3.从栈中取出0和1

  let binaryString = "";
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }
  return binaryString;
}

console.log(dec2bin(100)); //1100100
console.log(dec2bin(1000)); //1111101000
```

## 队列结构

### 一.认识队列

- 受限的线性结构: - 我们已经学习了一种受限的线性结构:栈结构. - 并且已经知道这种受限的数据结构对于解决某些特定问题,会有特别的
  效果. - 下面,我们再来学习另外一个受限的数据结构:队列.
- 队列(Queue)，它是一种受限的线性表,先进先出(FIFO First ln First Out)
  - 受限之处在于它只允许在表的前端( front ）进行删除操作
  - 而在表的后端(rear)进行插入操作
- 生活中类似的队列结构
  - 生活中类似队列的场景就是非常多了
  - 比如在电影院,商场,甚至是厕所排队.
  - 优先排队的人,优先处理.(买票,结账, WC)

### 二.队列的应用

- 打印队列:
  - 有五份文档需要打印,这些文档会按照次序放入到打印队列中.
  - 打印机会依次从队列中取出文档,优先放入的文档，优先被取出，并且对该文档进行打印.
  - 以此类推,直到队列中不再有新的文档.
- 线程队列:
  - 在开发中,为了让任务可以并行处理,通常会开启多个线程.
  - 但是,我们不能让大量的线程同时运行处理任务.(占用过多的资源)
  - 这个时候,如果有需要开启线程处理任务的情况,我们就会使用线程队列.
  - 线程队列会依照次序来启动线程,并且处理对应的任务.
- 队列如何实现呢?
  - 我们一起来研究一下队列的实现.

### 三.队列类的创建

- 队列的实现和栈一样,有两种方案:
  - 基于数组实现
  - 基于链表实现

```js
function Queue() {
  //属性
  this.items = [];
}
```

### 四.队列的常见操作

- 队列有哪些常见的操作呢?
  - enqueue(element):向队列尾部添加一个(或多个)新的项。
  - dequeue()∶ 移除队列的第一(即排在队列最前面的)项，并返回被移除的元素。
  - front():返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与 Stack 类的 peek 方法非常类似)。
  - isEmpty):如果队列中不包含任何元素，返回 true，否则返回 false。
  - size():返回队列包含的元素个数，与数组的 length 属性类似。
  - toString():将队列中的内容,转成字符串形式
- 现在，,我们来实现这些方法.
  - 其实很栈中方法的实现非常相似.因为我们的队列也是基于数组的

```js
//1.将元素加入到队列中
Queue.prototype.enqueue = function (element) {
  this.items.push(element);
};

//2.从队列中删除前端元素
Queue.prototype.dequeue = function () {
  return this.items.shift();
};

//3.查看前端元素
Queue.prototype.front = function () {
  return this.items[0];
};

//4.查看队列是否为空
Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

//5.查看队列中元素的个数
Queue.prototype.size = function () {
  return this.items.length;
};

//6.toString方法
Queue.prototype.toString = function () {
  let resultString = "";
  for (let i = 0; i < this.items.length; i++) {
    resultString += this.items[i] + "";
  }
  return resultString;
};
```

### 五.击鼓传花

- 击鼓传花是一个常见的面试算法题.使用队列可以非常方便的实现最终的结果.
- 原游戏规则:
  - 班级中玩一个游戏。所有学生围成一圈,从某位同学手里开始向旁边的同学传一束花.- 这个时候某个人(比如班长),在击鼓,鼓声停下的一颗,花落在谁手里,谁就出来表演节目.
- 修改游戏规则:
  - 我们来修改一下这个游戏规则.
  - 几个朋友一起玩一个游戏,围成一圈，开始数数,数到某个数字的人自动淘汰.
  - 最后剩下的这个人会获得胜利,请问最后剩下的是原来在哪一个位置上的人?
- 封装一个基于队列的函数

  - 参数:所有参与人的姓名,基于的数字
  - 结果:最终剩下的一人的姓名

```js
//击鼓传花
function paseGame(nameList, num) {
  //创建一个队列
  let queue = new Queue();

  //将所有人依次加入队列
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  //开始数数字
  while (queue.size() > 1) {
    //不是num的时候吗，重新加入到队列的末尾
    //num数字之前的人重新放入到队列的末尾
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    //num对应的这个人直接从队列中删除
    queue.dequeue();
  }
  //获取剩下的结果
  let endName = queue.front();
  console.log(endName);
  return nameList.indexOf(endName);
}

paseGame(
  [
    "lisi",
    "zhangsan",
    "fgbfd",
    "tom",
    "jack",
    "lisa",
    "ez",
    "laoshu",
    "jikdf",
    "dsada",
    "poru",
    "fjds",
  ],
  6
); //fgbfd
```

### 六.优先级队列

优先级队列的特点:

- 我们知道,普通的队列插入一个元素,数据会被放在后端.并且需要前面所有的元素都处理完成后才会处理前面的数据.
- 但是优先级队列,在插入一个元素的时候会考虑该数
  据的优先级.
- 和其他数据优先级进行比较.
- 比较完成后,可以得出这个元素在队列中正确的位置
- 其他处理方式,和基本队列的处理方式一样.

优先级队列主要考虑的问题:

- 每个元素不再只是一个数据,而且包含数据的优先级
- 在添加方式中,根据优先级放入正确的位置.

优先级队列的应用:

- 一个现实的例子就是机场登机的顺序
  - 头等舱和商务舱乘客的优先级要高于经济舱乘客。
  - 在有些国家，老年人和孕妇（或带小孩的妇女）登机时也享有高于其他乘客的优先级。
- 另一个现实中的例子是医院的（急诊科)候诊室。
  - 医生会优先处理病情比较严重的患者。
  - 当然,一般情况下是按照排号的顺序。
- 计算机中,我们也可以通过优先级队列来重新排序队列中任务的顺序
  - 比如每个线程处理的任务重要性不同,我们可以通过优先级的大小,来决定该线程在队列中被处理的次序.

### 七.优先级队列的实现

- 现优先级队列相对队列主要有两方面需要考虑:
  - 1)封装元素和优先级放在一起(可以封装一个新的构造函数)
  - 2)添加元素时,将新插入元素的优先级和队列中已经存在的元素优先级进行比较,以获得自己正确的位置.

```js
//封装优先级队列
function PriorityQueue() {
  //在PriorityQueue重新创建了一个类
  function QueueElemnt(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  //封装属性
  this.items = [];

  //1.实现插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    //创建QueueElement对象
    let queueElemnt = new QueueElemnt(element, priority);

    //判断队列是否为空
    if (this.items.length === 0) {
      this.items.push(queueElemnt);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElemnt.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElemnt);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElemnt);
      }
    }
  };

  //2.从队列中删除前端元素
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  };

  //3.查看前端元素
  PriorityQueue.prototype.front = function () {
    return this.items[0];
  };

  //4.查看队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };

  //5.查看队列中元素的个数
  PriorityQueue.prototype.size = function () {
    return this.items.length;
  };

  //6.toString方法
  PriorityQueue.prototype.toString = function () {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + "";
    }
    return resultString;
  };
}

// 测试代码
let pq = new PriorityQueue();
pq.enqueue("abc", 111);
pq.enqueue("cba", 151);
pq.enqueue("nba", 66);
pq.enqueue("wba", 856);
console.log(pq);
```

## 链表

### 一.链表以及数组的缺点

- 链表和数组一样,可以用于存储一系列的元素,但是链表和数组的实现机制完全不同.
- 这一章中,我们就来学习一下另外一种非常常见的用于存储数据的线性结构:链表.

**数组:**

- 要存储多个元素，数组（或称为列表)可能是最常用的数据结构。
- 我们之前说过,几乎每一种编程语言都有默认实现数组结构。
- 但是数组也有很多缺点:
  - 数组的创建通常需要申请一段连续的内存空间(一整块的内存)并且大小是固定的(大多数编程语言数组都是固定的)
  - 所以当当前数组不能满足容量需求时,需要扩容.(一般情况下是申请一个更大的数组,比如 2 倍.然后将原数组中的元素复制过去)
  - 而且在数组开头或中间位置插入数据的成本很高,需要进行大量元素的位移.
  - 尽管我们已经学过的 JavaScript 的 Array 类方法可以帮我们做这些事，但背后的原理依然是这样。

### 二.链表的优势

- 要存储多个元素,另外一个选择就是链表.
- 但不同于数组,链表中的元素在内存中不必是连续的空间.
- 链表的每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(有些语言称为指针或者连接)组成

**相对于数组,链表有一些优点:**

- 内存空间不是必须连续的.可以充分利用计算机的内存实现灵活的内存动态管理.
- 链表不必在创建时就确定大小，并且大小可以无限的延伸下去.
- 链表在插入和删除数据时,时间复杂度可以达到 O(1).相对数组效率高很多.

**相对于数组，链表有一些缺点:**

- 链表访问任何一个位置的元素时，都需要从头开始访问.(无法跳过第一个元素访问任何一个元素).
- 无法通过下标直接访问元素,需要从头一个个访问,直到找到对应的元素.

### 三.链表到底是什么

- 什么是链表呢?
  - 其实上面我们已经简单的提过了链表的结构,我们这里更加详细的分析一下.
  - 链表类似于火车:有一个火车头,火车头会连接一个节点,节点上有乘客(类似于数据)，并且这个节点会连接下一个节点,以此类推.
- 链表的火车结构:
  ![](https://img2022.cnblogs.com/blog/2332774/202208/2332774-20220807171231729-1707842191.png)

### 四.链表结构的封装

- 我们先来创建一个链表类

```js
// 封装链表类

function LinkList() {
  //内部类：节点类
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  //属性
  this.head = null;
  this.length = 0;
}
```

- 代码解析:
  - 封装 LinkedList 的类,用于表示我们的链表结构.(和 Java 中的链表同名,不同 Java 中的这个类是一个双向链表,后面我们会讲解双向链表)
  - 在 LinkedList 类中有一个 Node 类用于封装每一个节点上的信息.(和优先级队列的封装一样)
  - 链表中我们保存两个属性一个是链表的长度,一个是链表中第一个节点.
  - 当然,还有很多链表的操作方法.我们放在下一节中学习.

### 五.链表常见操作

- 我们先来认识一下,链表中应该有哪些常见的操作
  - append(element):向列表尾部添加一个新的项
  - insert(position, element):向列表的特定位置插入一个新的项。
  - get(position):获取对应位置的元素
  - indexOf(element):返回元素在列表中的索引。如果列表中没有该元素则返回-1。
  - update(position,element):修改某个位置的元素
  - removeAt(position):从列表的特定位置移除一项。- remove(element):从列表中移除一项。
  - isEmpty):如果链表中不包含任何元素，返回 true，如果链表长度大于 0 则返回 false.
  - size():返回链表包含的元素个数。与数组的 length 属性类似。
  - toString():由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
- 整体你会发现操作方法和数组非常类似,因为链表本身就是一种可以代替数组的结构.

#### 1.append 方法实现

- 向链表尾部追加数据可能有两种情况:
  - 链表本身为空,新添加的数据时唯一的节点.
  - 链表不为空,需要向其他节点后面追加节点.

![](https://img2022.cnblogs.com/blog/2332774/202208/2332774-20220821231342412-1464378069.png)

```js
//1.追加方法
LinkedList.prototype.append = function (data) {
  //1.创建一个新节点
  var newNode = new Node(data);
  //2.判断是否添加的是第一个节点
  if (this.length === 0) {
    //2.1是第一个节点
    this.head = newNode;
  } else {
    //2.2不是第一个节点
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    //2.3最后节点的next指向新的节点
    current.next = newNode;
  }
  //3.节点长度加一
  this.length += 1;
};
```

#### 2.toString 方法实现

我们先来实现一下链表的 toString 方法,这样会方便测试上面的添加代码

- 该方法比较简单,主要是获取每一个元素
- 还是从 head 开头,因为获取链表的任何元素都必须从第一个节点开头.
- 循环遍历每一个节点,并且取出其中的 element,拼接成字符串.
- 将最终字符串返回.

```js
//2.toString方法
LinkedList.prototype.toString = function () {
  //1.定义变量
  var current = this.head;
  var listString = "";

  //2.循环获取一个节点
  while (current) {
    listString += current.data + "";
    current = current.next;
  }

  return listString;
};
```

#### 3.insert 方法实现

接下来实现另外一个添加数据的方法:在任意位置插入数据.

添加到第一个位置:

- 添加到第一个位置,表示新添加的节点是头,就需要将原来的头节点,作为新节点的 next
- 另外这个时候的 head 应该指向新节点.

![](https://img2022.cnblogs.com/blog/2332774/202211/2332774-20221102002949829-1435050500.png)

添加到其他位置:

- 如果是添加到其他位置,就需要先找到这个节点位置了.
- 我们通过 while 循环,一点点向下找.并且在这个过程中保存上一个节点和下一个节点.
- 找到正确的位置后,将新节点的 next 指向下一个节点,将上一个节点的 next 指向新的节点.

![](https://img2022.cnblogs.com/blog/2332774/202211/2332774-20221102003012464-2106615230.png)

```js
LinkedList.prototype.insert = function (position, data) {
  //1.对position进行越界判断
  if (position < 0 || position > this.length) return false;

  //2.根据data创建newNode
  let newNode = new Node(data);

  //3.插入数据:看位置是否是第一个
  if (position === 0) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    let index = 0;
    let current = this.head;
    let previous = null;
    while (index++ < position) {
      previous = current;
      current = current.next;
    }
    newNode.next = current;
    previous.next = newNode;
  }

  //4.长度+1
  this.length += 1;

  return true;
};
```

#### 4.get 方法实现

传入一个要获取的位置，返回对应的数据信息

```js
//4.get方法
LinkedList.prototype.get = function (position) {
  //1.越界判断
  if (position < 0 || position >= this.length) return null;

  //2.获取对应的数据
  let current = this.head;
  let index = 0;
  while (index++ < position) {
    current = current.next;
  }
  return current.data;
};
```

#### 5.indexOf 方法实现

- 判断传入的数据是否与当前数据相同
- 相同则返回索引值，负责当前元素指向下一个元素
- 如果未找到则返回-1

```js
LinkedList.prototype.indexOf = function (data) {
  //1.定义变量
  let current = this.head;
  let index = 0;

  //2.开始查找
  while (current) {
    if (current.data === data) {
      return index;
    }
    current = current.next;
    index += 1;
  }

  //3.最后没有找到返回-1
  return -1;
};
```

#### 6.update 方法实现

- 首先进行越界判断，传入的更新元素位置不能过大或者过小(负数)
- 根据传入的位置与元素索引判断是否相同
- 找到相同则修改元素并返回 true

```js
//6.update方法
LinkedList.prototype.update = function (position, newData) {
  //1.对position进行越界判断
  if (position < 0 || position >= this.length) return false;

  //2.查找正确的节点
  let current = this.head;
  let index = 0;
  while (index++ < position) {
    current = current.next;
  }

  //3.将position位置的node修改成为newData
  current.data = newData;
  return true;
};
```

#### 7.removeAt 方法实现

- 首先进行越界判断，传入的移除元素位置不能过大或者过小(负数)
- 判断是否删除的是第一个节点以及删除是否是最后一个节点的特殊情况
- 前一个节点的 next 指向 current 的 next 即可

```js
LinkedList.prototype.removeAt = function (position) {
  //1.对position进行越界判断
  if (position < 0 || position >= this.length) return false;

  //2.判断是否删除的是第一个节点
  let current = this.head;
  if (position === 0) {
    this.head = this.head.next;
  } else {
    let index = 0;
    let previous = null;
    while (index++ < position) {
      previous = current;
      current = current.next;
    }
    //前一个节点的next指向current的next即可
    previous.next = current.next;
  }
  this.length -= 1;
  return current.data;
};
```

#### 8.remove 方法

- 首先使用已封装好的 indexOf 方法获取数据位置
- 再使用已封装好的 removeAt 删除对应元素

```js
LinkedList.prototype.remove = function (data) {
  //1.根据data获取在列表中的位置
  let position = this.indexOf(data);
  //2.根据位置信息删除节点
  this.length -= 1;
  return this.removeAt(position);
};
```

根据链表的长度判断

#### 9.isEmpty 方法

```js
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};
```

#### 10.size 方法

```js
LinkedList.prototype.size = function () {
  return this.length;
};
```

### 六.认识双向链表

单向链表

- 只能`从头遍历`到尾或者从`尾遍历到头`(一般从头到尾)
- 也就是链表相连的过程是`单向`的.
- 实现的原理是上一个链表中有一个指向下一个的`引用`.

单向链表有一个比较明显的缺点:

> 我们可以轻松的到达`下一个节点`,但是回到`前一个节点`
> 是很难的.但是,在实际开发中,经常会遇到需要回到上一个节点的情况

> `举个例子`:假设一个文本编辑用`链表`来存储文本.每一行用一个`String对象`存储在`链表的一个节点`中.当编辑器用户`向下移动光标`时,链表直接操作到`下一个节点`即可.但是当用于将光标`向上移动`呢?这个时候为了回到`上一个节点`,我们可能需要`从first开始`,依次走到想要的节点上.

双向链表

- 既可以`从头遍历到尾`,又可以`从尾遍历到头`
- 也就是链表相连的过程是`双向`的.那么它的实现原理,你能猜到吗?
- 一个节点既有`向前连接的引用`,也有一个`向后连接的引用`.
- 双向链表可以有效的解决单向链表中提到的问题.

双向链表有什么缺点呢?

- 每次在`插入或删除`某个节点时,需要处理四个引用,而
  不是两个.也就是实现起来要困难一些
- 并且相当于单向链表,必然占用`内存空间`更大一些.
- 但是这些缺点和我们使用起来的方便程度相比,是微不足道的.

双向链表长什么样子呢?

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4b11abeadee491ea0842c4baf936a0a~tplv-k3u1fbpfcp-watermark.image?)

双向链表的特点:

- 可以使用一个 head 和一个 tail 分别指向头部和尾部的节点
  = 每个节点都由三部分组成:前一个节点的指针(prev)/保存的元素(item)/后一个节点的指针(next)
- 双向链表的第一个节点的 prev 是 null
- 双向链表的最后的节点的 next 是 null

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f138c09ddddf43309f30abbdc033dd0d~tplv-k3u1fbpfcp-watermark.image?)

### 七.封装双向链表

```js
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
}
```

### 八.双向链表的常见操作

我们先来认识一下,双向链表中应该有哪些常见的操作

- append(element):向列表尾部添加一个新的项
- insert(position, element):向列表的特定位置插入一个新的项
- get(position):获取对应位置的元素
- indexOf(element):返回元素在列表中的索引。如果列表中没有该元素则返回-1
- update(position, element):修改某个位置的元素
- removeAt(position):从列表的特定位置移除一项。
- remove(element):从列表中移除一项。
- isEmpty():如果链表中不包含任何元素，返回 true，如果链表长度大于 0 则返回 false.size():返回链表包含的元素个数。与数组的 length 属性类似。
- toString():由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值
- forwardString():返回正向遍历的节点字符串形式
- backwordString():返回反向遍历的节点字符串形式

#### 1.append 方法

向链表尾部追加数据可能有两种情况:

- 链表本身为空,新添加的数据时唯一的节点.
- 链表不为空,需要向其他节点后面追加节点.

#### 2.链表转字符串方法

```js
DoublyLinkedList.prototype.toString = function () {
  return this.backwardString;
};
DoublyLinkedList.prototype.forwardString = function () {
  // 定义变量
  let current = this.tail;
  let resultString = "";
  //依次向前遍历,获取每一个节点
  while (current) {
    resultString += current.data + "";
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
    resultString += current.data + "";
    current = current.next;
  }
  return resultString;
};
```

#### 3.insert方法
```js
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
```

#### 4.get方法
```js
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
```

#### 5.indexOf方法
```js
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
```
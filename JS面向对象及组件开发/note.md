面向对象写法
  原则：先写出普通的写法，然后改写成面向对象写法
      》普通方法变型
        1.尽量不要出现函数的嵌套
        2.可以有全局变量
        3.把onload中不是赋值的语句放到单独函数中
      》改成面向对象
        1.全局变量就是属性
        2.函数就是方法
        3.onload中创建对象
        4.改this指向问题

1.包装对象
  http://www.qdfuns.com/notes/23931/908d7f91530ac100b3a04a8e1ebabb3c.html
2.原型链：实例对象与原型对象的连接，隐式连接_proto_,原型链最外层：Object.prototype

3.面向对象的一些属性和方法
  hasOwnProperty(): 看是不是对象自身下面的属性
  constructor：查看对象的构造函数，看看是哪一个构造函数构造的
    每个原型都会自动添加constructor属性
    for in的时候有些属性找不到
    避免修改construtor属性
  instanceof：运算符
    对象与构造函数在原型链上是否有关系
  toString():object上的方法，把对象转换为字符串
    系统对象下的都是自带的，自己写的都是通过原型链找到object下面的
    实现进制转换：var num=255;alert(num.toString(16));//255转换为16进制
    类型判断：Object.prototype.toString.call(arr)=='[object Array]';

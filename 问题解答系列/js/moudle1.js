
/*define(function(){
  function fn(){
    console.log("我是模块1");
  }
  //通过return对外提供接口
  return {
    fn:fn
  }
});*/

//也可以依赖
define(['moudle1'],function(){
  console.log(1);
  function fn(){
    console.log("我是模块1");
  }
  //通过return对外提供接口
  return {
    fn:fn
  }
});

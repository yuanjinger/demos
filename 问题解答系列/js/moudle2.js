//也可以依赖
define(function(){
  console.log(2);
  function fn(){
    console.log("我是模块2");
  }
  //通过return对外提供接口
  return {
    fn:fn
  }
});

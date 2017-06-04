//javascript document

/*require([],function () {
  console.log(1);
});*/
require.config({
  // baseUrl:'aaa',
  paths:{
    ng:['libs/angular']
  },
  shim
});
//参数名不加后缀，路径相对当前于data-main，加后缀的表示相对于当前html页面的路径
// 先异步加载，然后执行回调函数
// 当模块没有依赖关系时，前面的先执行，存在依赖关系时，被依赖的先执行
//require的优点加载速度比较快
require(['moudle1','moudle2'],function(oFn1,oFn2){
  oFn1.fn();
  oFn2.fn();
})

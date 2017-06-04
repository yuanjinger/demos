HTML5canvas动画开发

1.用定时器interva实现，但是随着线程的增多，动画频率就会出现问题

2.利用浏览器内置的requestAnimationFrame保证运动频率

promise：1.状态 pending（等待）——>resolve(成功)——>reject(拒绝)2.then方法：调用resolve reject状态所对应的回调函数

1.异步ajax
var getJSON = function(url){
  var promise = new Promise(function(resolve,reject){
      var client = new XMLHttpRequest();
      client.open("GET",url);
      client.onreadystatechange = handler;
      client.responseType ="json";
      client.setRequestHeader("Accept","application/json");
      client.send();
      function handler(){
        if(this.status==200){
          resolve(this.response);
        } else{
          reject(new Error(this.statusText));
        }
      }
  });
  return promise;
};

getJSON("/posts.json").then(function(json){
  console.log("Contents:"+json);
},function(error){
  console.log("出错了"，error);
});


2.promise.all(所有函数都返回成功状态是执行)

  function p1(){
    var promise =new Promise(function(resolve,reject){
      setTimeout(function(){
        console.log();
        resolve();
        },1000);
      });
      return promise;
  }

  var p = new Promise.all([p1,p2,p3]);
  p.then(function(){
    console.log("都成功时触发");
  },function(){
    console.log("只要有一个失败就会执行");
  })
3.promise.race
    var p = new Promise.all([p1,p2,p3]);
    p.then(function(){
      console.log("只要有一个成功就触发");
    },function(){
      console.log("只要有一个失败就会执行");
    })
4.jQuery实现 $Deferred
function show(time){
  var dfd = $Deferred();
  setTimeout(function(){
    console.log(time+"秒后");
    dfd.resolve();
  },time*1000);
  return dfd;
}

show(1).then(function(){
  console.log("success");
  },function(){
    console.log("failure");
});
也可以写成
show(1).done(function(){
  console.log("success");
  }).fali(function(){
    console.log("failure");
});

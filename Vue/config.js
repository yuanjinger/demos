
	new Vue({
	el: '#list',
	data:{
		tabs:[
		{text:'八十'},
		{text:'九十'},
		{text:'一百'},
		{text:'以附'}
		]
	}
	})
var vm = new Vue({
  el: '#example',
  data: {
    a: 1
  },
  computed: {
    // 一个计算属性的 getter
    b: function () {
      // `this` 指向 vm 实例
      return this.a + 1
    }
  }
})

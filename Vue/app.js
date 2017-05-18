var list=[//统计list中isChecked为false的个数(即为未完成个数)
	{
		title:"吃饭睡觉打豆豆",
		isChecked:false
	},
	{
		title:"吃饭睡觉打豆豆",
		isChecked:true
	}
]

new Vue({
	el:".main",
	data:{
		list:list,
		todo:'',
		edtorTodos:'',//记录正在编辑的数据
		beforeTitle:''//记录正在编辑的数据的title
	},
	methods:{
		addTodo:function(ev){//ES6简写：addTodo(){}
				this.list.push({
					title:this.todo,
					isChecked:false,

				});
				this.todo=''
		},
		deleteTodo:function(item){
			var index =this.list.indexOf(item);
			this.list.splice(index,1);
		},
		edtorTodo:function(item){//编辑任务
			console.log(item);
			this.beforeTitle=item.title;//记录任务title
			this.edtorTodos=item;
		},
		edtorTodoed:function(item){//编辑任务成功
			this.edtorTodos="";//让div显示出来，input隐藏
		},
		cancelTodo:function(item){//取消编辑任务
			item.title=this.beforeTitle;
			this.beforeTitle='';
			this.edtorTodos="";
		}
	},
	directives:{
		"focus":{
			update(el,binding){
				console.log(el);
				console.log(binding);
				if (binding.value) {
					el.focus();
				}
			}
		}
	},
	//计算属性
	computed:{
		noCheckedLength:function(){
			return this.list.filter(function(item){
				return !item.isChecked
			}).length
		}
	}


});
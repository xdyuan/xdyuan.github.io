/**
 * Created by xdyuan on 16/9/23.
 */
'use strict';
(function (angular) {

	//这个服务差不多就是一个模块,把控制器和业务逻辑分开,以后也不一定需要把逻辑放在这里,
	//很多人不会使用服务,都是堆在控制器里面一起的


	//这边依然注册一个新的模块
	angular.module('app.services.main', [])
	//.service函数用于注册一个服务,服务里面一般都是放一些业务逻辑的代码(增删改查)


	//服务写完之后注入到controllers里面的main.js中

	//!!!再实现一个本地存储, 注入一个window
		.service('MainService', ["$window", function ($window) {

			//新建一个本地存存储对象,本地储存都是通过key,value的方式保存
			var localStorage = $window.localStorage;
			//localStorage['my_todo_list'] 这个返回的是一个字符串,所以我们序列化一下
			var todos =  localStorage['my_todo_list'] ? JSON.parse(localStorage['my_todo_list']) : [];
				//在任何改变todos的方法里面重新保存一下localStorage,写一个sava方法,在数据改变的地方调用
			//还有最后一问题是在单个勾选时使用了数据同步的,所以这个得写到index.html的那个界面上去

			//写一个方法叫做sava来保存
			this.sava = function () {
				localStorage['my_todo_list'] = JSON.stringify(todos);
			};

			/*var todos = [
				{id:1, text:"学习", completed: true},
				{id:2, text:"睡觉", completed: false},
				{id:3, text:"游戏", completed: false}
			];*/
			//写一个函数把偶偶todos, 控制私有变量的访问全新
			this.get = function () {
				return todos;
			};

			//把一些业务逻辑的代码黏贴过来
			this.add = function (text) {
				todos.push({
					//id: $scope.todos.length+1, //自动增长,但是有一个问题,删除一个之后再添加id会重复
					id:getId(),
					//$scope.text由于$scope双向绑定,可以拿到界面的输入值
					text: text,
					completed: false
				});
				this.sava();


			};
			//[2]考虑一下input文本框怎么做这个回车事件 onkeydown?但是麻烦
			//我们直接使用form,然后onsubmit就行了,angular就是用ng-submit



			//[3]写一下这个删除
			//写完之后去li里面的button绑定这个事件
			this.remove = function (id) {
				//删除谁,我们传一个id进来,找到这个对象
					for (var i=0,len=todos.length; i<len; i++){
						if (id === todos[i].id){
							todos.splice(i, 1);//删除那个元素
							break;
						}
					}
				this.sava();

			};

			//[4]解决id的问题,id使用随机数 或者id等于当前事件的秒数
			function getId() {
				var id = Math.random();
				for (var i=0,len=todos.length; i<len; i++){
					if (id === todos[i].id){
						//可能需要递归
						id = getId();
					}
				}
				return id;
			}

			//[5]清空所有完成的的元素
			this.clearCompleted = function () {
				var result = [];
				for (var i=0,len=todos.length; i<len; i++){
					if (!todos[i].completed){
						result.push(todos[i]);
					}
				}
				//这边简单的重新赋值会产生错误,内存指针的问题
				todos = result;
				//这边直接返回result在控制器那边去接收
				this.sava();
				return todos;

			};

			//[6] 是否有已经完成的,没有的话clearCompleted不显示,使用ng-show
			this.existCompleted = function () {
				console.log(todos);
				for (var i=0,len=todos.length; i<len; i++){
					if (todos[i].completed){
						return true;
					}
				}
				return false;
			};

			//[7]更新
			//编辑之后更新需要,相当于下面的save
			this.update = function (id, target) {

			};

			/*$scope.save = function () {
				//让当前id等于-1那么就是没有id和当前id相等也就不编辑了
				$scope.currentEditingId = -1
			};*/

			//[8]切换全选   和数据相关的都输入业务逻辑
			var now = true;
			this.toggleAll = function () {
				for (var i=0,len=todos.length; i<len; i++){
					todos[i].completed = now;
				}
				now = !now;
				this.sava();
			};



			//筛选不用拿过来

		}]);

})(angular);

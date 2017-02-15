/**
 * Created by xdyuan on 16/9/23.
 */
(function (angular) {
	"use strict";
	//这边新建一个controllers给app.js里面的模块用于依赖
	//并且在index的最后引入这个模块
	var controllers = angular.module("app.controllers.main", ['app.services.main']);

	controllers.controller("mainController", [
		"$scope",
		"$routeParams" ,
		"$route",
		"MainService",
		function ($scope, $routeParams, $route, MainService) {

		//1 文本框需要一个模型,这个text记录输入的内容
		$scope.text = "";

		//2 任务列表也需要
		//任务的结构{id:1, text:"学习", completed: true}
		//一般一些数据最好都给一个id,无论要不要用

		$scope.todos = MainService.get();

		//[1]在index.html绑定元素,ng-app和ng-controller
		//在body绑定ng-app, 在todoapp绑定controller
		//在new-todo那个input绑定ng-model="text"
		//


		//上面写完之后开始写事件
		//首先是新增加事件,就需要敲回车添加事件

		$scope.add = function () {
			//如果输入了内容
			if ($scope.text != ''){
				MainService.add($scope.text);
				//完成之后清除文本框,通过双向绑定
				$scope.text = "";
			}

		};
		//[2]考虑一下input文本框怎么做这个回车事件 onkeydown?但是麻烦
		//我们直接使用form,然后onsubmit就行了,angular就是用ng-submit



		//[3]写一下这个删除
		//写完之后去li里面的button绑定这个事件
		$scope.remove = function (id) {

			MainService.remove(id);
		};

		//[4]解决id的问题,id使用随机数 或者id等于当前事件的秒数
		/*function getId() {
			var id = Math.random();
			for (var i=0,len=$scope.todos.length; i<len; i++){
				if (id === $scope.todos[i].id){
					//可能需要递归
					id = getId();
				}
			}
			return id;
		}*/

		//[5]清空所有完成的的元素
		$scope.clearCompleted = function () {

			$scope.todos = MainService.clearCompleted();
		};

		//[6] 是否有已经完成的,没有的话clearCompleted不显示,使用ng-show
		$scope.existCompleted = function () {

			// for (var i=0,len=$scope.todos.length; i<len; i++){
			// 	if ($scope.todos[i].completed){
			// 		return true;
			// 	}
			// }
			// return false;
			//这边需要一个return
			return MainService.existCompleted();
		};


		//双击编辑一般不算做业务逻辑,只能是界面逻辑
		//[7] 双击之后编辑,  实现思路,创建一个currentEditingId, 双击事件响应一个函数,将当前的id给currentEditingId, 根据id添加editing类名实现是否编辑.
		//在li的ng-class完成
		//ng-class="{completed:todo.completed, editing:todo.id===currentEditingId}"
		//label的文字区域实现ng-dblclick


		$scope.currentEditingId = -1;//等于-1是为了当前id肯定不会等于-1
		$scope.editing = function (id) {
			$scope.currentEditingId = id;
		};

		//[8]双击编辑之后实现敲回车保存,敲回车实现利用form
		$scope.save = function () {
			//让当前id等于-1那么就是没有id和当前id相等也就不编辑了
			$scope.currentEditingId = -1
		};



		//[9]实现全选全不选,点一下实现全选,
		// var now = true;
		$scope.toggleAll = function () {
			/*for (var i=0,len=$scope.todos.length; i<len; i++){
				$scope.todos[i].completed = now;
			}
			now = !now;*/
			MainService.toggleAll();
		};





		//[10]筛选all active 和completed这三个按钮
		//把这个selector放到li里面去筛选
		//{}空就是全选, ture就是勾选的, false就是不勾选的
		//这边可以不使用DOM的点击操作,我们可以根据hash值的变化给不同的值.
		//hash值可以根据location解析,location.hash
		//这个location可以根据service里面的$location注入,通过$location的path()方法获取hash值
		//hash值改变需要时时执行,所以我们需要一个$watch监视
		// console.log($location);
		//这个$location是注入进来的,和我们的window的location一样,但是我们这里不使用window是为了降低
		// 对外界的耦合度

		//$scope.selector = {completed:false};

		//[11]
		//$watch只能监视$scope的属性值
		// $scope.$loca = $location;
		/*$scope.$watch("$loca.path()", function (now, old) {
		 console.log(now);
		 switch (now){
		 case "/active":
		 //这边的比较还有些问题,我们把false改成"fa",也可以被匹配
		 //所以我们可以自己写一个自定义比较函数equalCompare,去严格匹配
		 $scope.selector = {completed:false};
		 break;
		 case "/completed":
		 $scope.selector = {completed:true};
		 break;
		 default :
		 $scope.selector = {};
		 break;
		 }

		 });*/

		$scope.selector = {};
		//这边获取状态,hash值改变会重新刷新控制器,不用$watch来监视
		var status =  $routeParams.status;
		//使用路由的方式效率会低一点,但是灵活,在一些大的项目里一般都会使用路由
		switch (status){
			case "active":
				console.log("false"+status);
				//这边的比较还有些问题,我们把false改成"fa",也可以被匹配
				//所以我们可以自己写一个自定义比较函数equalCompare,去严格匹配
				$scope.selector = {completed:false};
				break;
			case "completed":
				console.log("true"+status);
				$scope.selector = {completed:true};
				break;
			default :
				console.log("null"+status);
				//这个$route是注入进来的,updateParams更新参数,也就是说走default这里无论status匹配了什么都置空,统一状态
				//这是为了解决无论我们输入什么在#/后面都可以置空
				$route.updateParams({status:""});
				$scope.selector = {};
				break;
		}



		//使用方法就是作为filter的参数传入
		$scope.equalCompare = function (source, target) {
			// console.log(source);
			// console.log(target);
			return source === target;
		};

		//[12]选中all  active  和completed的样式改变,就是那个小框框
		/*
		 * <a ng-class="{selected:$loca.path()==='/completed'}" href="#/completed">Completed</a>
		 * */

		//



			$scope.toggle = function () {
				MainService.sava();
			}



	}])


})(angular);

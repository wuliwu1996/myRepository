let school = Vue.extend({
			template:`<div class="school">
			            学校信息:
						<p :title = "name">学校名称：{{name}}</p>
						<p :title = "address">学校地址：{{address}}</p>
					 </div>`,
			data : function(){
				return {
					name : "南京一中",
					address: "胡桥路1号"
				};
			}
		});
		let home = Vue.extend({
			template:`<div class="home">
			                家庭信息：
							<p :title="address">家庭住址:{{address}}</p>
							</div>`,
			data:function(){
				return {
					address:"林景紫园"
				};
			}
		});
		Vue.component("school",school);
		Vue.component("home",home);
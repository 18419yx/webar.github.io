		   AFRAME.registerComponent('cursor-scale',{
		   			   init:function(){
						   var el = this.el
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("scale","1.15 1.15 1.15")  
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("scale","1 1 1")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('showmove',{
		   			   init:function() {
						   var el = this.el
						   var b1 = document.querySelector("#at")
						   var b3 = document.querySelector("#de")
						   var pll = document.querySelector("#pll")
						   var pl = document.querySelector("#pl")
						   var ispl = false
						   el.addEventListener("click", function() {
							   el.setAttribute("animation", "autoplay:true")
							   pll.setAttribute("visible", "true")
						   })
						   b1.addEventListener("click", function() {
							   if(ispl == false) {
								   pl.setAttribute("visible", "true")
							   }else {
								   pl.setAttribute("visible", "false")
							   }
							   ispl = !ispl
						   })
						   document.querySelector("#back").addEventListener("click",function(){
						   		 window.open("../main.html")
						   		 window.close()
						   })
						   document.querySelector("#home").addEventListener("click",function(){
						   		 window.open("../homepage.html")
						   		 window.close()
						   })
						   b3.addEventListener("click",function(){
						   		 window.open("../chinesetext/mars-text.html")
						   		 window.close()
						   })
					   }
		   })
		   
		   AFRAME.registerComponent('scaler',{
		   			   init:function(){
		   				var el = this.el
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("scale","3.3 3.3 3.3")  
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("scale","3 3 3")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('showpicture', {
		   			   init:function() {
		   				var el = this.el
						var mm1 = document.querySelector("#mm1")
						var mm2 = document.querySelector("#mm2")
						var mm3 = document.querySelector("#mm3")
						var mm4 = document.querySelector("#mm4")
						var mm5 = document.querySelector("#mm5")
						var pi = document.querySelector("#pi")
						pi.addEventListener("click", function() {
							el.setAttribute("animation", "autoplay:true")
						})
						var s1 = document.querySelector("#sign1")
						s1.addEventListener("mouseenter", function(){
							mm1.setAttribute("visible", "true")
						})
						s1.addEventListener("mouseleave", function(){
							mm1.setAttribute("visible", "false")
						})
						var s2 = document.querySelector("#sign2")
						s2.addEventListener("mouseenter", function(){
							mm2.setAttribute("visible", "true")
						})
						s2.addEventListener("mouseleave", function(){
							mm2.setAttribute("visible", "false")
						})
						var s3 = document.querySelector("#sign3")
						s3.addEventListener("mouseenter", function(){
							mm3.setAttribute("visible", "true")
						})
						s3.addEventListener("mouseleave", function(){
							mm3.setAttribute("visible", "false")
						})
						var s4 = document.querySelector("#sign4")
						s4.addEventListener("mouseenter", function(){
							mm4.setAttribute("visible", "true")
						})
						s4.addEventListener("mouseleave", function(){
							mm4.setAttribute("visible", "false")
						})
						var s5 = document.querySelector("#sign5")
						s5.addEventListener("mouseenter", function(){
							mm5.setAttribute("visible", "true")
						})
						s5.addEventListener("mouseleave", function(){
							mm5.setAttribute("visible", "false")
						})
		        }
	       })
		   
		   AFRAME.registerComponent('scalerr',{
		   			   init:function(){
		   				var el = this.el
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("scale","4.4 4.4 4.4")  
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("scale","4 4 4")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent("videohandler",{
		   		   init:function(){
		   			   var el = this.el
		   			   var vid = document.querySelector("#myvideo")
					   var vi = document.querySelector("#vi")
					   /* var is = el.getAttribute("visible") */
		   			   var playing = false
					   var is = false
		   			   vid.pause()
		   			   el.addEventListener("click",function(){
		   				   if(playing == true && is == true){
		   					   vid.play()
		   				   }else{
		   					   vid.pause()
		   				   }
		   				   playing = !playing
		   			   })
					   vi.addEventListener("click", function() {
						   if(is == false) {
							   el.setAttribute("visible", "true")
							   el.setAttribute("animation", "autoplay:true")
						   }else {
							   el.setAttribute("visible", "false")
						   }
						   is = !is
					   })
		   		   }
		   })
		   
		   AFRAME.registerComponent('cursor-enterandouter',{
		   			   init:function(){
						   var el = this.el
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("color","#ffff00")
		   					   el.setAttribute("scale","5 5 5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("color","#ffffff")
		   					   el.setAttribute("scale","4 4 4")
		   				   })
		   			   }
		   })

		   
		   AFRAME.registerComponent('boder1',{
		   			   init:function(){
		   				var el = this.el
						var p = document.querySelector("#p1")
		   				   el.addEventListener('mouseenter',function(){
		   					   p.setAttribute("color","#55aaff")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   					   p.setAttribute("color","#ffffff")
		   				   })
						   el.addEventListener("click",function(){
							   window.open("main.html")
							   window.close()
						   })
		   			   }
		   })
		   AFRAME.registerComponent('boder2',{
		   			   init:function(){
		   				var el = this.el
		   						var p = document.querySelector("#p2")
		   				   el.addEventListener('mouseenter',function(){
		   					   p.setAttribute("color","#55aaff")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   					   p.setAttribute("color","#ffffff")
		   				   })
						   el.addEventListener("click",function(){
						   	    window.open("ar.html")
						   	    window.close()
						   })
		   			   }
		   })
		   AFRAME.registerComponent('boder3',{
		   			   init:function(){
		   				var el = this.el
		   						var p = document.querySelector("#p3")
		   				   el.addEventListener('mouseenter',function(){
		   					   p.setAttribute("color","#55aaff")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   					   p.setAttribute("color","#ffffff")
		   				   })
						   el.addEventListener("click",function(){
						   		window.open("testing.html")
						   		window.close()
						   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('random-background', {
		        update: function () {
					var plane = Math.randNumberIn6();
					var xx, yy, zz;
					var distance = 600;
					var maximum = 300;
					var minimum = 280;
					
					switch(plane){
						case 0:{
							xx = Math.randNumber(minimum, maximum);
							yy = Math.randSymbol() * Math.randNumber(0, distance);
							zz = Math.randSymbol() * Math.randNumber(0, distance);
							break;
						}
						case 1:{
							xx = - Math.randNumber(minimum, maximum);
							yy = Math.randSymbol() * Math.randNumber(0, distance);
							zz = Math.randSymbol() * Math.randNumber(0, distance);
							break;
						}
						case 2:{
							xx = Math.randSymbol() * Math.randNumber(0, distance);
							yy = Math.randNumber(minimum, maximum);
							zz = Math.randSymbol() * Math.randNumber(0, distance);
							break;
						}
						case 3:{
							xx = Math.randSymbol() * Math.randNumber(0, distance);
							yy = - Math.randNumber(minimum, maximum);
							zz = Math.randSymbol() * Math.randNumber(0, distance);
							break;
						}
						case 4:{
							xx = Math.randSymbol() * Math.randNumber(0, distance);
							yy = Math.randSymbol() * Math.randNumber(0, distance);
							zz = Math.randNumber(minimum, maximum);
							break;
						}
						case 5:{
							xx = Math.randSymbol() * Math.randNumber(0, distance);
							yy = Math.randSymbol() * Math.randNumber(0, distance);
							zz = - Math.randNumber(minimum, maximum);
							break;
						}
						default:{
							xx = Math.randSymbol() * Math.randNumber(0, distance);
							yy = Math.randSymbol() * Math.randNumber(0, distance);
							zz = Math.randSymbol() * Math.randNumber(0, distance);
						}
					}
		            this.el.setAttribute('position', {
		                x: xx,
		                y: yy,
		                z: zz,
		            });
		        },
		    });
			Math.randNumber = function(minimum, maximum){
			let randNumber = self.crypto.getRandomValues(new Uint32Array(1))[0];
				for(;;){
					if(randNumber > maximum){
						randNumber = randNumber % maximum;
						continue;
					}
					if(randNumber < minimum){
						randNumber += minimum;
						continue;
					}
					break;
				}
				return randNumber;
			}
			Math.randSymbol = function(){
				let randNumber = self.crypto.getRandomValues(new Uint32Array(1))[0];
				if(randNumber % 10 > 5){
					return 1;
				}
				else{
					return -1;
				}
			}
			Math.randNumberIn6 = function(){
				let randNumber = self.crypto.getRandomValues(new Uint32Array(1))[0];
				return randNumber % 6;
			}
					   
			
		   
		   AFRAME.registerComponent('random-position', {
		   /*              schema: {
		                   min: {default: {x: -10, y: -10, z: -10}, type: 'vec3'},
		                   max: {default: {x: 10, y: 10, z: 10}, type: 'vec3'}
		                 }, */
		   
		                 update: function () {
		                   var data = this.data;
		   /*                var max = data.max;
		                   var min = data.min; */
		   				
		   				var radium = Math.random() * 3 + 17.2;
		   				var xx = (Math.random() > 0.5? 1 : -1) * (Math.random() * radium);
		   				var yy = (Math.random() > 0.5? 1 : -1) * Math.sqrt(radium * radium - xx * xx);
		   				
		   				
		                   this.el.setAttribute('position', {
		                     x: xx,
		                     y: 0,
		                     z: yy
		                   });
		                 }
		               });
		               //生成盒子
		               AFRAME.registerComponent('entity-generator', {
		                 schema: {
		                   mixin: {default: ''},
		                   num: {default: 50}
		                 },
		   
		                 init: function () {
		                   var data = this.data;
		   
		                   // 使用指定的mixin生成实体
		                   for (var i = 0; i < data.num; i++) {
		                     var entity = document.createElement('a-entity');
		                     entity.setAttribute('mixin', data.mixin);
		                     this.el.appendChild(entity);
		                   }
		                 }
		               });
		   
		   
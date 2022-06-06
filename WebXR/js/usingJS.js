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
		   
		   AFRAME.registerComponent('changeintro',{
		   			   init:function(){
						   var intro = document.querySelector("#intro")
						   sun.addEventListener("mouseenter", function() {
							   intro.setAttribute("src", "#st")
							   intro.setAttribute("visible", "true")
						   })
						   sun.addEventListener("mouseleave", function() {
						   		intro.setAttribute("visible", "false")
						   })
						   
						   mercury.addEventListener("mouseenter", function() {
						   		intro.setAttribute("src", "#mt")
						   		intro.setAttribute("visible", "true")
						   })
						   mercury.addEventListener("mouseleave", function() {
						   		intro.setAttribute("visible", "false")
						   })
						   
						   venus.addEventListener("mouseenter", function() {
						   		intro.setAttribute("src", "#vt")
						   		intro.setAttribute("visible", "true")
						   })
						   venus.addEventListener("mouseleave", function() {
						   		intro.setAttribute("visible", "false")
						   })
						   
						   earth.addEventListener("mouseenter", function() {
						   		intro.setAttribute("src", "#et")
						   		intro.setAttribute("visible", "true")
						   })
						   earth.addEventListener("mouseleave", function() {
						   		intro.setAttribute("visible", "false")
						   })
						   
						   mars.addEventListener("mouseenter", function() {
						   		intro.setAttribute("src", "#mmt")
						   		intro.setAttribute("visible", "true")
						   })
						   mars.addEventListener("mouseleave", function() {
						   		intro.setAttribute("visible", "false")
						   })
						   
						   jupiter.addEventListener("mouseenter", function() {
						   		intro.setAttribute("src", "#jt")
						   		intro.setAttribute("visible", "true")
						   })
						   jupiter.addEventListener("mouseleave", function() {
						   		intro.setAttribute("visible", "false")
						   })
						   
						   saturn.addEventListener("mouseenter", function() {
						   		intro.setAttribute("src", "#sst")
						   		intro.setAttribute("visible", "true")
						   })
						   saturn.addEventListener("mouseleave", function() {
						   		intro.setAttribute("visible", "false")
						   })
						   
						   uranus.addEventListener("mouseenter", function() {
						   		intro.setAttribute("src", "#ut")
						   		intro.setAttribute("visible", "true")
						   })
						   uranus.addEventListener("mouseleave", function() {
						   		intro.setAttribute("visible", "false")
						   })
						   
						   neptune.addEventListener("mouseenter", function() {
						   		intro.setAttribute("src", "#nt")
						   		intro.setAttribute("visible", "true")
						   })
						   neptune.addEventListener("mouseleave", function() {
						   		intro.setAttribute("visible", "false")
						   })
						   
		   			   }
		   })
		   
		   AFRAME.registerComponent('showmove',{
		   			   init:function() {
						   var el = this.el
						   /* var b1 = document.querySelector("#at") */
						   var b3 = document.querySelector("#de")
						   var pll = document.querySelector("#pll")
						   /* var pl = document.querySelector("#pl") */
						   var ispl = false
						   el.addEventListener("click", function() {
							   el.setAttribute("animation", "autoplay:true")
							   pll.setAttribute("visible", "true")
						   })
/* 						   b1.addEventListener("click", function() {
							   pl.setAttribute("visible", "true")
							   pl.setAttribute("animation", "autoplay:true")
						   }) */
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
							el.setAttribute("visible", "true")
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
						   	    window.open("learn.html")
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
						   		window.open("./test/testing.html")
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
		   
		   
		   AFRAME.registerComponent('xuanti', {
			   init:function() {
				    var ques1 = document.querySelector("#ques1")
					ques1.addEventListener("click", function() {
					panduan(1)
				   })
				   
				    var ques2 = document.querySelector("#ques2")
				   	ques2.addEventListener("click", function() {
                    panduan(2)
					document.querySelector("#h1").innerHTML = "第二题"
				   })
				   
				    var ques3 = document.querySelector("#ques3")
				   	ques3.addEventListener("click", function() {
				    panduan(3)
				   })
				   
				   var ques4 = document.querySelector("#ques4")
				   	ques4.addEventListener("click", function() {
				    panduan(4)
				   })
				   
				   var ques5 = document.querySelector("#ques5")
				   	ques5.addEventListener("click", function() {
				    panduan(5)
				   })
				   
				   var ques6 = document.querySelector("#ques6")
				   	ques6.addEventListener("click", function() {
				    panduan(6)
				   })
				   
				   var ques7 = document.querySelector("#ques7")
				   	ques7.addEventListener("click", function() {
				    panduan(7)
				   })
				   
				   var ques8 = document.querySelector("#ques8")
				   	ques8.addEventListener("click", function() {
				    panduan(8)
				   })
				   
				   var ques9 = document.querySelector("#ques9")
				   	ques9.addEventListener("click", function() {
				    panduan(9)
				   })
				   
				   var ques10 = document.querySelector("#ques10")
				   	ques10.addEventListener("click", function() {
				    panduan(10)
				   })
			   }
			   
		   })
		   
		   var panduan = function(aa) {
			   var index = aa
			   switch(index) {
				   case 1:{
					   var eles = document.querySelectorAll(".question")
					   eles[1].setAttribute("visible", "false")
					   eles[2].setAttribute("visible", "false")
					   eles[3].setAttribute("visible", "false")
					   eles[4].setAttribute("visible", "false")
					   eles[5].setAttribute("visible", "false")
					   eles[6].setAttribute("visible", "false")
					   eles[7].setAttribute("visible", "false")
					   eles[8].setAttribute("visible", "false")
					   eles[9].setAttribute("visible", "false")
					   eles[0].emit('fade1')
					   eles[0].setAttribute("visible", "true")
					   break
				   }
				   case 2:{
					   var eles = document.querySelectorAll(".question")
					   eles[0].setAttribute("visible", "false")
					   eles[2].setAttribute("visible", "false")
					   eles[3].setAttribute("visible", "false")
					   eles[4].setAttribute("visible", "false")
					   eles[5].setAttribute("visible", "false")
					   eles[6].setAttribute("visible", "false")
					   eles[7].setAttribute("visible", "false")
					   eles[8].setAttribute("visible", "false")
					   eles[9].setAttribute("visible", "false")
					   eles[1].emit('fade2')
					   eles[1].setAttribute("visible", "true")
					   break
				   }
				   
				   case 3:{
					   var eles = document.querySelectorAll(".question")
					   eles[0].setAttribute("visible", "false")
					   eles[1].setAttribute("visible", "false")
					   eles[3].setAttribute("visible", "false")
					   eles[4].setAttribute("visible", "false")
					   eles[5].setAttribute("visible", "false")
					   eles[6].setAttribute("visible", "false")
					   eles[7].setAttribute("visible", "false")
					   eles[8].setAttribute("visible", "false")
					   eles[9].setAttribute("visible", "false")
					   eles[2].emit('fade3')
					   eles[2].setAttribute("visible", "true")
				   		break
				   }
				   
				   case 4:{
					   var eles = document.querySelectorAll(".question")
					   eles[0].setAttribute("visible", "false")
					   eles[1].setAttribute("visible", "false")
					   eles[2].setAttribute("visible", "false")
					   eles[4].setAttribute("visible", "false")
					   eles[5].setAttribute("visible", "false")
					   eles[6].setAttribute("visible", "false")
					   eles[7].setAttribute("visible", "false")
					   eles[8].setAttribute("visible", "false")
					   eles[9].setAttribute("visible", "false")
					   eles[3].emit('fade4')
					   eles[3].setAttribute("visible", "true")
					   break
				   }
				   
				   case 5:{
				   	 var eles = document.querySelectorAll(".question")
				   	   eles[0].setAttribute("visible", "false")
				   	   eles[1].setAttribute("visible", "false")
				   	   eles[2].setAttribute("visible", "false")
				   	   eles[3].setAttribute("visible", "false")
				   	   eles[5].setAttribute("visible", "false")
				   	   eles[6].setAttribute("visible", "false")
				   	   eles[7].setAttribute("visible", "false")
				   	   eles[8].setAttribute("visible", "false")
				   	   eles[9].setAttribute("visible", "false")
				   	   eles[4].emit('fade5')
				   	   eles[4].setAttribute("visible", "true")
				   	   break
				   }
				   
				   case 6:{
				   	 var eles = document.querySelectorAll(".question")
				   	   eles[0].setAttribute("visible", "false")
				   	   eles[1].setAttribute("visible", "false")
				   	   eles[2].setAttribute("visible", "false")
				   	   eles[3].setAttribute("visible", "false")
				   	   eles[4].setAttribute("visible", "false")
				   	   eles[6].setAttribute("visible", "false")
				   	   eles[7].setAttribute("visible", "false")
				   	   eles[8].setAttribute("visible", "false")
				   	   eles[9].setAttribute("visible", "false")
				   	   eles[5].emit('fade6')
				   	   eles[5].setAttribute("visible", "true")
				   	   break
				   }
				   
				   case 7:{
				   	 var eles = document.querySelectorAll(".question")
				   	   eles[0].setAttribute("visible", "false")
				   	   eles[1].setAttribute("visible", "false")
				   	   eles[2].setAttribute("visible", "false")
				   	   eles[3].setAttribute("visible", "false")
				   	   eles[4].setAttribute("visible", "false")
				   	   eles[5].setAttribute("visible", "false")
				   	   eles[7].setAttribute("visible", "false")
				   	   eles[8].setAttribute("visible", "false")
				   	   eles[9].setAttribute("visible", "false")
				   	   eles[6].emit('fade7')
				   	   eles[6].setAttribute("visible", "true")
				   	   break
				   }
				   
				   case 8:{
				   	 var eles = document.querySelectorAll(".question")
				   	   eles[0].setAttribute("visible", "false")
				   	   eles[1].setAttribute("visible", "false")
				   	   eles[2].setAttribute("visible", "false")
				   	   eles[3].setAttribute("visible", "false")
				   	   eles[4].setAttribute("visible", "false")
				   	   eles[5].setAttribute("visible", "false")
				   	   eles[6].setAttribute("visible", "false")
				   	   eles[8].setAttribute("visible", "false")
				   	   eles[9].setAttribute("visible", "false")
				   	   eles[7].emit('fade8')
				   	   eles[7].setAttribute("visible", "true")
				   	   break
				   }
				   
				   case 9:{
				   	 var eles = document.querySelectorAll(".question")
				   	   eles[0].setAttribute("visible", "false")
				   	   eles[1].setAttribute("visible", "false")
				   	   eles[2].setAttribute("visible", "false")
				   	   eles[3].setAttribute("visible", "false")
				   	   eles[4].setAttribute("visible", "false")
				   	   eles[5].setAttribute("visible", "false")
				   	   eles[6].setAttribute("visible", "false")
				   	   eles[7].setAttribute("visible", "false")
				   	   eles[9].setAttribute("visible", "false")
				   	   eles[8].emit('fade9')
				   	   eles[8].setAttribute("visible", "true")
				   	   break
				   }
				   
				   case 10:{
				   	 var eles = document.querySelectorAll(".question")
				   	   eles[0].setAttribute("visible", "false")
				   	   eles[1].setAttribute("visible", "false")
				   	   eles[2].setAttribute("visible", "false")
				   	   eles[3].setAttribute("visible", "false")
				   	   eles[4].setAttribute("visible", "false")
				   	   eles[5].setAttribute("visible", "false")
				   	   eles[6].setAttribute("visible", "false")
				   	   eles[7].setAttribute("visible", "false")
				   	   eles[8].setAttribute("visible", "false")
				   	   eles[9].emit('fade10')
				   	   eles[9].setAttribute("visible", "true")
				   	   break
				   }
				   
				   default:{
					   break
				   }
			   }
			   /* return index */
		   }
		   
		   AFRAME.registerComponent('chooselearn',{
		   			   init:function(){
						   var eles = document.querySelectorAll(".qq")
						   eles[1].addEventListener("click", function() {
							   window.open("./chinesetext/mercury-text.html")
						   })
						   eles[2].addEventListener("click", function() {
						   	   window.open("./chinesetext/venus-text.html")
						   })
						   eles[3].addEventListener("click", function() {
						   	   window.open("./chinesetext/earth-text.html")
						   })
						   eles[4].addEventListener("click", function() {
						   	   window.open("./chinesetext/mars-text.html")
						   })
						   eles[5].addEventListener("click", function() {
						   	   window.open("./chinesetext/jupiter-text.html")
						   })
						   eles[6].addEventListener("click", function() {
						   	   window.open("./chinesetext/saturn-text.html")
						   })
						   eles[7].addEventListener("click", function() {
						   	   window.open("./chinesetext/uranus-text.html")
						   })
						   eles[8].addEventListener("click", function() {
						   	   window.open("./chinesetext/neptune-text.html")
						   })
		   			   }
		   })
		   
		   
		   
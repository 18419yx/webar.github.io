		   AFRAME.registerComponent('buttoncontrols',{
		   			   init:function(){
		   				var el = this.el
		   						var ba = document.querySelector("#ba")
		   						var bb = document.querySelector("#bb")
		   						var bc = document.querySelector("#bc")
		   						var bd = document.querySelector("#bd")
		   						var tr = document.querySelector("#tr")
		   						var fa = document.querySelector("#fa")
		   						var istrue = true
		   						var isfalse = true
		   						ba.addEventListener("click", function() {
		   							if(istrue == true) {
		   								tr.setAttribute("visible", "true")
		   								isfalse = false
		   							}
		   						})
		   						bb.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bc.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bd.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("material","color:#bdbdbd;opacity:0.5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("material","color:#bdbdbd;opacity:0.2")
		   				   })
		   			   }
		   })
		   
		   
		   AFRAME.registerComponent('buttoncontrols2',{
		   			   init:function(){
		   				var el = this.el
						var ba = document.querySelector("#ba2")
						var bb = document.querySelector("#bb2")
						var bc = document.querySelector("#bc2")
						var bd = document.querySelector("#bd2")
						var tr = document.querySelector("#tr2")
						var fa = document.querySelector("#fa2")
						var istrue = true
						var isfalse = true
						ba.addEventListener("click", function() {
							if(isfalse == true) {
								fa.setAttribute("visible", "true")
								istrue = false
							}
						})
						bb.addEventListener("click", function() {
							if(istrue == true) {
								tr.setAttribute("visible", "true")
								isfalse = false
							}
						})
						bc.addEventListener("click", function() {
							if(isfalse == true) {
								fa.setAttribute("visible", "true")
								istrue = false
							}
						})
						bd.addEventListener("click", function() {
							if(isfalse == true) {
								fa.setAttribute("visible", "true")
								istrue = false
							}
						})
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("material","color:#bdbdbd;opacity:0.5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("material","color:#bdbdbd;opacity:0.2")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('buttoncontrols3',{
		   			   init:function(){
		   				var el = this.el
		   						var ba = document.querySelector("#ba3")
		   						var bb = document.querySelector("#bb3")
		   						var bc = document.querySelector("#bc3")
		   						var bd = document.querySelector("#bd3")
		   						var tr = document.querySelector("#tr3")
		   						var fa = document.querySelector("#fa3")
		   						var istrue = true
		   						var isfalse = true
						ba.addEventListener("click", function() {
							if(isfalse == true) {
								fa.setAttribute("visible", "true")
								istrue = false
							}
						})
						bb.addEventListener("click", function() {
							if(istrue == true) {
								tr.setAttribute("visible", "true")
								isfalse = false
							}
						})
						bc.addEventListener("click", function() {
							if(isfalse == true) {
								fa.setAttribute("visible", "true")
								istrue = false
							}
						})
						bd.addEventListener("click", function() {
							if(isfalse == true) {
								fa.setAttribute("visible", "true")
								istrue = false
							}
						})
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("material","color:#bdbdbd;opacity:0.5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("material","color:#bdbdbd;opacity:0.2")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('buttoncontrols4',{
		   			   init:function(){
		   				var el = this.el
		   						var ba = document.querySelector("#ba4")
		   						var bb = document.querySelector("#bb4")
		   						var bc = document.querySelector("#bc4")
		   						var bd = document.querySelector("#bd4")
		   						var tr = document.querySelector("#tr4")
		   						var fa = document.querySelector("#fa4")
		   						var istrue = true
		   						var isfalse = true
		   						ba.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bb.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bc.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bd.addEventListener("click", function() {
		   							if(istrue == true) {
		   								tr.setAttribute("visible", "true")
		   								isfalse = false
		   							}
		   						})
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("material","color:#bdbdbd;opacity:0.5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("material","color:#bdbdbd;opacity:0.2")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('buttoncontrols5',{
		   			   init:function(){
		   				var el = this.el
		   						var ba = document.querySelector("#ba5")
		   						var bb = document.querySelector("#bb5")
		   						var bc = document.querySelector("#bc5")
		   						var bd = document.querySelector("#bd5")
		   						var tr = document.querySelector("#tr5")
		   						var fa = document.querySelector("#fa5")
		   						var istrue = true
		   						var isfalse = true
		   						ba.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bb.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bc.addEventListener("click", function() {
		   							if(istrue == true) {
		   								tr.setAttribute("visible", "true")
		   								isfalse = false
		   							}
		   						})
		   						bd.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("material","color:#bdbdbd;opacity:0.5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("material","color:#bdbdbd;opacity:0.2")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('buttoncontrols6',{
		   			   init:function(){
		   				var el = this.el
		   						var ba = document.querySelector("#ba6")
		   						var bb = document.querySelector("#bb6")
		   						var bc = document.querySelector("#bc6")
		   						var bd = document.querySelector("#bd6")
		   						var tr = document.querySelector("#tr6")
		   						var fa = document.querySelector("#fa6")
		   						var istrue = true
		   						var isfalse = true
		   						ba.addEventListener("click", function() {
		   							if(istrue == true) {
		   								tr.setAttribute("visible", "true")
		   								isfalse = false
		   							}
		   						})
		   						bb.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bc.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bd.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("material","color:#bdbdbd;opacity:0.5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("material","color:#bdbdbd;opacity:0.2")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('buttoncontrols7',{
		   			   init:function(){
		   				var el = this.el
		   						var ba = document.querySelector("#ba7")
		   						var bb = document.querySelector("#bb7")
		   						var bc = document.querySelector("#bc7")
		   						var bd = document.querySelector("#bd7")
		   						var tr = document.querySelector("#tr7")
		   						var fa = document.querySelector("#fa7")
		   						var istrue = true
		   						var isfalse = true
						ba.addEventListener("click", function() {
							if(isfalse == true) {
								fa.setAttribute("visible", "true")
								istrue = false
							}
						})
						bb.addEventListener("click", function() {
							if(istrue == true) {
								tr.setAttribute("visible", "true")
								isfalse = false
							}
						})
						bc.addEventListener("click", function() {
							if(isfalse == true) {
								fa.setAttribute("visible", "true")
								istrue = false
							}
						})
						bd.addEventListener("click", function() {
							if(isfalse == true) {
								fa.setAttribute("visible", "true")
								istrue = false
							}
						})
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("material","color:#bdbdbd;opacity:0.5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("material","color:#bdbdbd;opacity:0.2")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('buttoncontrols8',{
		   			   init:function(){
		   				var el = this.el
		   						var ba = document.querySelector("#ba8")
		   						var bb = document.querySelector("#bb8")
		   						var bc = document.querySelector("#bc8")
		   						var bd = document.querySelector("#bd8")
		   						var tr = document.querySelector("#tr8")
		   						var fa = document.querySelector("#fa8")
		   						var istrue = true
		   						var isfalse = true
		   						ba.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bb.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bc.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bd.addEventListener("click", function() {
		   							if(istrue == true) {
		   								tr.setAttribute("visible", "true")
		   								isfalse = false
		   							}
		   						})
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("material","color:#bdbdbd;opacity:0.5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("material","color:#bdbdbd;opacity:0.2")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('buttoncontrols9',{
		   			   init:function(){
		   				var el = this.el
		   						var ba = document.querySelector("#ba9")
		   						var bb = document.querySelector("#bb9")
		   						var bc = document.querySelector("#bc9")
		   						var bd = document.querySelector("#bd9")
		   						var tr = document.querySelector("#tr9")
		   						var fa = document.querySelector("#fa9")
		   						var istrue = true
		   						var isfalse = true
		   						ba.addEventListener("click", function() {
		   							if(istrue == true) {
		   								tr.setAttribute("visible", "true")
		   								isfalse = false
		   							}
		   						})
		   						bb.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bc.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bd.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("material","color:#bdbdbd;opacity:0.5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("material","color:#bdbdbd;opacity:0.2")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('buttoncontrols10',{
		   			   init:function(){
		   				var el = this.el
		   						var ba = document.querySelector("#ba10")
		   						var bb = document.querySelector("#bb10")
		   						var bc = document.querySelector("#bc10")
		   						var bd = document.querySelector("#bd10")
		   						var tr = document.querySelector("#tr10")
		   						var fa = document.querySelector("#fa10")
		   						var istrue = true
		   						var isfalse = true
		   						ba.addEventListener("click", function() {
		   							if(istrue == true) {
		   								tr.setAttribute("visible", "true")
		   								isfalse = false
		   							}
		   						})
		   						ba.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bb.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bc.addEventListener("click", function() {
		   							if(isfalse == true) {
		   								fa.setAttribute("visible", "true")
		   								istrue = false
		   							}
		   						})
		   						bd.addEventListener("click", function() {
		   							if(istrue == true) {
		   								tr.setAttribute("visible", "true")
		   								isfalse = false
		   							}
		   						})
		   				   el.addEventListener('mouseenter',function(){
		   					   el.setAttribute("material","color:#bdbdbd;opacity:0.5")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
		   				   	   el.setAttribute("material","color:#bdbdbd;opacity:0.2")
		   				   })
		   			   }
		   })
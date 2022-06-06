		   AFRAME.registerComponent('shiping',{
		   			   init:function(){
						   var el = this.el
						   var vid = document.querySelector("#myvideo")
						   var vi = document.querySelector("#shipin")
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
							   /* document.querySelector("#total").emit('stop') */
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
		   
		   AFRAME.registerComponent('qiehuan',{
		   			   init:function(){
		   				var el = this.el
		   				   el.addEventListener('click',function(){
		   					   document.querySelector("#total").emit('start')
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('jiechu',{
		   			   init:function(){
		   				var el = this.el
		   				   el.addEventListener('mouseenter',function(){
							   document.querySelector("#total").emit('stop')
		   					   el.setAttribute("scale","1.15 1.15 1.15")
		   				   })
		   				   el.addEventListener("mouseleave",function(){
							   document.querySelector("#total").emit('start')
		   				   	   el.setAttribute("scale","1 1 1")
		   				   })
		   			   }
		   })
		   
		   AFRAME.registerComponent('seetu',{
		   			   init:function(){
						  var el = this.el
						  var isshow = false
		   				  document.querySelector("#tupian").addEventListener("click", function() {
							  if(isshow == false) {
								  document.querySelector("#mm1").emit('fade')
								  document.querySelector("#mm2").emit('fade')
								  document.querySelector("#mm3").emit('fade')
								  document.querySelector("#mm4").emit('fade')
								  document.querySelector("#mm5").emit('fade')
								  el.setAttribute("visible", "true")
							  }else {
								  el.setAttribute("visible", "false")
							  }
							  isshow = !isshow
						  })
		   			   }
		   })
		   
		   AFRAME.registerComponent('jbcs',{
		   			   init:function(){
		   					var el = this.el
		   					var isshow = false
		   			        document.querySelector("#jiben").addEventListener("click", function() {
		   						if(isshow == false) {
		   							el.setAttribute("visible", "true")
		   						}else {
		   							el.setAttribute("visible", "false")
		   						}
		   						isshow = !isshow
		   					})
		   			   }
		   })
		   
		   AFRAME.registerComponent('mcly',{
		   			   init:function(){
		   					var el = this.el
		   					var isshow = false
		   			        document.querySelector("#minchen").addEventListener("click", function() {
		   						if(isshow == false) {
		   							el.setAttribute("visible", "true")
		   						}else {
		   							el.setAttribute("visible", "false")
		   						}
		   						isshow = !isshow
		   					})
		   			   }
		   })
		   
		   AFRAME.registerComponent('tcls',{
		   			   init:function(){
		   					var el = this.el
		   					var isshow = false
		   			        document.querySelector("#tance").addEventListener("click", function() {
		   						if(isshow == false) {
		   							el.setAttribute("visible", "true")
		   						}else {
		   							el.setAttribute("visible", "false")
		   						}
		   						isshow = !isshow
		   					})
		   			   }
		   })
		   
		   AFRAME.registerComponent('bmdx',{
		   			   init:function(){
		   					var el = this.el
		   					var isshow = false
		   			        document.querySelector("#biaomian").addEventListener("click", function() {
		   						if(isshow == false) {
		   							el.setAttribute("visible", "true")
		   						}else {
		   							el.setAttribute("visible", "false")
		   						}
		   						isshow = !isshow
		   					})
		   			   }
		   })
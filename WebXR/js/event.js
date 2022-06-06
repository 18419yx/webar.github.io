		   AFRAME.registerComponent('event',{
		   			   init:function(){
						var link1 = document.querySelector("#link1")
						var pit1 = document.querySelector("#pit1")
						var is1 = false
						var link2 = document.querySelector("#link2")
						var pit2 = document.querySelector("#pit2")
						var is2 = false
						link1.addEventListener("click", function() {
							if(is1 == false) {
								pit1.setAttribute("visible", "true")
							}else {
								pit1.setAttribute("visible", "false")
							}
							is1 = !is1
						})
						
						link2.addEventListener("click", function() {
							if(is2 == false) {
								pit2.setAttribute("visible", "true")
							}else {
								pit2.setAttribute("visible", "false")
							}
							is2 = !is2
						})
		   			}
		   })
		   
		   AFRAME.registerComponent('begin_',{
		   			   init:function(){
						   var ques1 = document.querySelector("#ques1")
						   ques1.addEventListener("click", function() {
							   ques1.emit('fade')
						   })
					   }
		   })
		   AFRAME.registerComponent('event',{
		   			   init:function(){
		   				var el = this.el
						   el.addEventListener("click",function(){
							   window.open("../planet/mars.html")
							   window.close()
						   })
		   			   }
		   })
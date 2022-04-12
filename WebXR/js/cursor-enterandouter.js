
		   AFRAME.registerComponent('cursor-enterandouter',{
			   init:function(){
				   var text = document.querySelector("#text")
				   this.el.addEventListener('mouseenter',function(){
					   this.setAttribute("color","#ffff00")
					   this.setAttribute("scale","5 5 5")
				   })
				   this.el.addEventListener("mouseleave",function(){
				   	   this.setAttribute("color","#ffffff")
					   this.setAttribute("scale","4 4 4")
				   })
			   }
		   })
		   

		   AFRAME.registerComponent('cursor-scale',{
		   			   init:function(){
		   				   this.el.addEventListener('mouseenter',function(){
		   					   this.setAttribute("scale","1.2 1.2 1.2")  
		   				   })
		   				   this.el.addEventListener("mouseleave",function(){
		   				   	   this.setAttribute("scale","1 1 1")
		   				   })
		   			   }
		   })
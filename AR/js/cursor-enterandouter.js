
		   AFRAME.registerComponent('cursor-enterandouter',{
			   init:function(){
				   this.el.addEventListener('mouseenter',function(){
					   this.setAttribute("color","#919191")
				   })
				   this.el.addEventListener("mouseleave",function(){
				   	   this.setAttribute("color","#606060")
				   })
			   }
		   })
		   

AFRAME.registerComponent('on-click',{
	init:function(){
		var self = this
		this.el.addEventListener('click',function(e){
			if(self.el.sceneEl === e.detail.cursorEl){
				console.log("MOUSE")
			}else{
				console.log("CURSOR")
			}
		})
	}
})
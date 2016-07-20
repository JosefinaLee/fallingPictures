	
	function FallPic(picNumber, picType, picWidth, picHeight, fallSpeed){
		this.picNumber = picNumber || 1;
		// console.log("picNumber: "+picNumber);
		this.picType = picType || "png";
		this.width = picWidth;
		this.height = picHeight;
		this.speed = fallSpeed || 10;
		this._init();
	}
	FallPic.prototype._init = function(){
		var html = document.getElementsByTagName("html");
		html[0].style.height = "100%";
		document.body.style.height = "100%";
		this.create();
		this.fall();
	}
	FallPic.prototype.create = function(self){
		this.img = document.createElement("img");
		this.img.style.position = "absolute";
		this.img.style.top = 0;
		if(this.width){
			this.img.style.width = this.width + "px";
		}
		if(this.height){
			this.img.style.height = this.height + "px";
		}
		this.img.src = "img/" + parseInt(Math.random()*this.picNumber + 1) + "." + this.picType;
		document.body.appendChild(this.img);
		this.width = this.img.offsetWidth;
		this.height = this.img.offsetHeight;
		this.img.style.left = parseInt(Math.random() * (document.body.offsetWidth - this.width)) + "px";
	};
	
	FallPic.prototype.fall = function(){
		var self = this;
		setTimeout(function(){
			self.timer = setInterval(function(){
				self.speed = parseInt(self.speed) *1.1;
				self.img.style.top = self.img.offsetTop + self.speed + "px";
				if(self.img.offsetTop >= document.body.offsetHeight){
					document.body.removeChild(self.img);
					clearInterval(self.timer);
				}
			}, 20);
		}, parseInt(Math.random()*1000));

	};


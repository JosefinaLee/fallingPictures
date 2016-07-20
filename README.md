# fallingPictures
A js plugin makes pictures fall down from the top of a browser.

To acheieve this effect, the file of fallPic.js should be included in the HTML document.

JavaScript: 
		 new FallPic(picNumber, picType, picWidth, picHeight, fallSpeed);

There're 5 arguments can be set, none of them is compulsory. 

Default values are:
picNumber: 1;
picType: png;
picWidth: default;
picHeight: default;
fallSpeed: 10;

The path of pictures are defaulted as img/...

If this path has more than one pictures, the image of this effect will be shown randomly.

If you want mutiple pictures acheieve this effect, you can set an FOR loop to initialize mutiple FallPic class.
For example:
		for(var i=0; i<picNum; i++){
			new FallPic();
		}

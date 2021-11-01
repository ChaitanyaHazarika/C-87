
var canvas=new fabric.Canvas("myCanvas")
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function (img) {
		block_object= img;
		block_object.scaleToWidth(block_image_width);
		block_object.scaleToHeight(block_image_height);
		canvas.add(block_object)
		block_object.set({
			top:block_y,
			left:block_x
		})
		})
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image("rr.jpg");
		block_y=180;
	}
	if(keyPressed == '71')
	{
		block_x = 250;
		block_y = 180;
		new_image("gr.png");
	}
	
	if(keyPressed == '89')
	{
		block_x =400;
		block_y = 180;
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		block_x = 670;
		block_y = 180;
		new_image("pr.png");
	}
	if(keyPressed == '66')
	{
		block_x = 750;
		block_y = 180;
		new_image("br.png");
	}
	
}


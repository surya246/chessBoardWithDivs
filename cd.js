for(var i=0;i<8;i++){
	if(i%2==0){
		$('#grand').append("<div class='row"+i+"'></div>");
	}
	else{
		$('#grand').append("<div class='row"+i+"'></div>");
	}
		
	for(var j=0;j<8;j++){
		if(i%2==0){
			$('.row'+i).last().append("<div class='block"+i+"'></div>");
		}
		else{
			$('.row'+i).last().append("<div class='block"+i+"'></div>");
		}
	}
                
}

for(var i=0;i<8;i++){
	$(".row"+i).css("margin-top", "-4px");
	$(".row"+i).css("margin-left", "-4px");
}
for(var j=0;j<8;j++){
	if(j%2==0){
	     	$(".block"+j).css("display", "inline-block");
		$(".block"+j).css("height","100px");
		$(".block"+j).css("width","100px");
		$(".block"+j).css("margin-left", "-2px");
		$(".block"+j).css("background", "white");
	}
	else{
		$(".block"+j).css("display", "inline-block");
		$(".block"+j).css("height", "100px");
		$(".block"+j).css("width", "100px");
		$(".block"+j).css("margin-left", "-2px");
		$(".block"+j).css("background", "black");
	}
	
}
for(var k=0;k<8;k++){
	if(k%2==0){
		$(".block"+k+":nth-child(2n)").css("background", "black");
	}
	else{
		$(".block"+k+":nth-child(2n)").css("background", "white");
	}
}
$(".block1").html("<img src='/home/surya/Desktop/coin_images/ws2.png' style='width:100px;height:100px;'>");
$(".block0:nth-child(1)").html("<img src='/home/surya/Desktop/coin_images/wrook.png' style='width:100px;height:100px;'>");
$(".block0:nth-child(2)").html("<img src='/home/surya/Desktop/coin_images/wknight.png' style='width:100px;height:100px;'>");
$(".block0:nth-child(3)").html("<img src='/home/surya/Desktop/coin_images/wb.png' style='width:100px;height:100px;'>");
$(".block0:nth-child(4)").html("<img src='/home/surya/Desktop/coin_images/wk.png' style='width:100px;height:100px;'>");
$(".block0:nth-child(5)").html("<img src='/home/surya/Desktop/coin_images/wq.png' style='width:100px;height:100px;'>");
$(".block0:nth-child(6)").html("<img src='/home/surya/Desktop/coin_images/wb.png' style='width:100px;height:100px;'>");
$(".block0:nth-child(7)").html("<img src='/home/surya/Desktop/coin_images/wknight.png' style='width:100px;height:100px;'>");
$(".block0:nth-child(8)").html("<img src='/home/surya/Desktop/coin_images/wrook.png' style='width:100px;height:100px;'>");

$(".block6").html("<img src='/home/surya/Desktop/coin_images/ws2.png' style='width:100px;height:100px;'>");
$(".block7:nth-child(1)").html("<img src='/home/surya/Desktop/coin_images/brook.png' style='width:100px;height:100px;'>");
$(".block7:nth-child(2)").html("<img src='/home/surya/Desktop/coin_images/bknight.png' style='width:100px;height:100px;'>");
$(".block7:nth-child(3)").html("<img src='/home/surya/Desktop/coin_images/bb.png' style='width:100px;height:100px;'>");
$(".block7:nth-child(4)").html("<img src='/home/surya/Desktop/coin_images/bk.png' style='width:100px;height:100px;'>");
$(".block7:nth-child(5)").html("<img src='/home/surya/Desktop/coin_images/bq.png' style='width:100px;height:100px;'>");
$(".block7:nth-child(6)").html("<img src='/home/surya/Desktop/coin_images/bb.png' style='width:100px;height:100px;'>");
$(".block7:nth-child(7)").html("<img src='/home/surya/Desktop/coin_images/bknight.png' style='width:100px;height:100px;'>");
$(".block7:nth-child(8)").html("<img src='/home/surya/Desktop/coin_images/brook.png' style='width:100px;height:100px;'>");


$(document).ready(function(){





});


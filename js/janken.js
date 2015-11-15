o = 100; /*global val king hp*/
m = 100;


$(function(){
	$('#fight').get(0).play() ;

	$(".play").on("click",function(){
		$('#pi').get(0).play() ;
		var id=$(this).attr("id");
		rnd(id);
	});

function lost(){
			$('#fight').get(0).pause() ;
			$('#lost').get(0).play();
			$("#num").html("<font color='red'>マスカルポーネはぜんめつした！</font>");
			$(document).click(function(){
					window.location.href = 'replay.html';
			});

}

function win(){
			$('#fight').get(0).pause() ;
			$('#win').get(0).play();
			$("#num").html("おうさまをたおした！");
			$(document).click(function(){
					window.location.href = 'ending.html';
			});

}

	function rnd(id){ 
	var r = Math.floor(Math.random()*3+1);
	r = r-1;
	var fl = ['ぐー','ちょき','ぱー']
	$("#num").html("おうさまは"+fl[r]+"をだした！");
	$('#hit').get(0).play();
	result=r-id; /* 0:グー,1:チョキ,2:パー */


	$(function(){
		setTimeout(function(){
		var r2 = Math.floor(Math.random()*100+1);
		if(r==id){
			$("#num").html("ミス！おうさまはダメージをうけない。");
			$('#nohit').get(0).play();
		}else if(result==1 || result==-2){
			o=o-r2;
			$("#num").html("おうさまに "+r2+"のダメージをあたえた");
			$('#hit2').get(0).play();
			if(o<=0){
				win();
			}
		}else if(result==-1 || result==2){
			m=m-r2;
			$("#num").html("マスカルポーネは "+r2+"のダメージをうけた！");
			$('#hit2').get(0).play();
			if(m<=0){
				$("#HP").html("0");
				lost();
			}else{
				$("#HP").html(m);
			}
		  }
		},1000); /*setTimeoutfunction*/		
		}); /*function*/


	} /*function rnd*/
});
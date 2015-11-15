$(function(){
		$('#castle').get(0).play();
	i=0;

$(document).click(function(){
		$('#pi').get(0).play() ;
	if(i==0){
		$("#num").html("＊「そなたのちちチーズは たたかいのすえ<br>　　なくなったそうじゃな。　そのちちのあとをつぎたいという<br>　　そなたのねがい　しかとききとげた！");
		i=i+1;
	} else if(i==1){
		$("#num").html("＊「てきはまおうバラニクじゃ！　せかいのひとびとは<br>　　いまだまおうバラニクの　なまえすらしらぬ。<br>　　だがこのままでは　やがてせかいはまおうにほろぼされよう。");
		i=i+1;
	} else if(i==2){
		$("#num").html("＊「まおうバラニクをたおしてまいれ！");
		$("#yesno").append('<div id="play" class="command"><br>　<a href="#">　いいえ<br>　<a href="#">　いいえ</div>');
		i=i+1;
	}else if(i==3){
		$("#num").html("＊「なんと！　まおうをたおさぬというのか？");
		i=i+1;
	}else if(i==4){
		$("#num").html("＊「もういちどきこう。まおうバラニクをたおしてまいれ！");
		i=i+1;
	}else if(i==5){
		$("#num").html("＊「ならば　しねい！");
		i=i+1;
	}else if(i==6){
		window.location.href = 'animation.html';
	}


});

});
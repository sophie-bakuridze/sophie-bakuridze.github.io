$(document).ready(function(){
      openDropDownMenu()

});
function openDropDownMenu(){
	$(".menu-button").click(function(){
	 $(".drop-down-menu-board").css("display","block");
	})
	$(".X-button").click(function(){
	 $(".drop-down-menu-board").css("display","none");
	})

	$(".item-100").click(function(){
	 $(".last-100-button").css("display","block");
	})
	$(".close-last100").click(function(){
	 $(".last-100-button").css("display","none");
	  $(".game-history-list-main").css("display","none");
	})
	$(".game-history-caption").click(function(){
	 $(".game-history-list-main").css("display","block");
	 $(".game-history-caption").css({"border-bottom":"6px solid","color":"#fde053"});
	 $(".numbers-caption").css({"border":"transparent","color":"white"});
	});

	
	$(".numbers-caption").click(function(){
	 $(".game-history-list-main").css("display","none");
	 $(".game-history-caption").css({"border":"none","color":"white"});
	 $(".numbers-caption").css({"border-bottom":"6px solid","color":"#fde053"});
	});

	$(".statistics").click(function(){
        if($(this).hasClass("statistics-board-close")){
        	$(this).removeClass("statistics-board-close");
            $(".statistic-main").css("display","none");
        }
        else
        {
           $(".statistic-main").css("display","block");
           $(this).addClass("statistics-board-close");
        }
	 	
	 });

	$(".racetracks").click(function(){
        if($(this).hasClass("racetrack-board-close")){
        	$(this).removeClass("racetrack-board-close");
            $(".racetrack-board").css("display","none");
        }
        else
        {
           $(".racetrack-board").css("display","block");
           $(this).addClass("racetrack-board-close");
        }
	 	
	 });
	
	 
	 $(".favorites").click(function(){
        if($(this).hasClass("favorites-board-close")){
        	$(this).removeClass("favorites-board-close");
            $(".favorites-board").css("display","none");
        }
        else
        {
           $(".favorites-board").css("display","block");
           $(this).addClass("favorites-board-close");
        }
	 	
	 });

	 $(".screen-icone").click(function(){
	 	$(".palaced-bet-history").css("display","block");
	 	
	 });

	 $(".palaced-bet-history-close").click(function(){
	 	$(".palaced-bet-history").css("display","none");
	 	
	 });


	 $(".chips").click(function(){
	 	$(".choose-chip-board").css("display","block");
	 	
	 });
     
      $(".limit-div").click(function(){
	 	$(".limits-jackpots-rules").css("display","block");
	 	$(".limits-property").css({"border-bottom":"6px solid","color":"#fde053","height":"68px"})
	 	$(".jackpots-property").css({"border-bottom": "transparent", "color" : "white"})
	 	$(".rules-property").css({"border-bottom": "transparent", "color" : "white"})
	 	$(".limits-text").css("display","block");
	 	 $(".rules-text").hide();
	 	$(".limits-text").show();
	 	$(".jackpots-text").hide();	 	
	 });

      $(".limits-property").click(function(){
	 	$(".jackpots-property").css({"border-bottom": "transparent", "color" : "white"})
	 	$(".rules-property").css({"border-bottom": "transparent", "color" : "white"})
	 	$(".limits-property").css({"border-bottom":"6px solid","color":"#fde053","height":"68px"})
	 	$(".limits-text").show();
	 	$(".jackpots-text").hide();
	 	$(".rules-text").hide();
	 });

       $(".jackpots").click(function(){
	 	$(".limits-jackpots-rules").css("display","block");
	 	$(".limits-property").css({"border-bottom": "transparent", "color" : "white"});
	 	$(".rules-property").css({"border-bottom": "transparent", "color" : "white"});
	 	$(".jackpots-property").css({"border-bottom":"6px solid","color":"#fde053","height":"68px"})
	 	$(".jackpots-text").css("display","block");
	 	$(".rules-text").hide();
	 	$(".limits-text").hide();
	 	$(".jackpots-text").show();
	 });

       $(".jackpots-property").click(function(){
	 	$(".limits-property").css({"border-bottom": "transparent", "color" : "white"});
	 	$(".rules-property").css({"border-bottom": "transparent", "color" : "white"});

	 	$(".jackpots-property").css({"border-bottom":"6px solid","color":"#fde053" , "height":"68px"});
	 	$(".limits-text").hide();
	 	$(".jackpots-text").show();
	 	$(".rules-text").hide();
	 });



       $(".rules").click(function(){
	 	$(".limits-jackpots-rules").css("display","block");
	 	$(".rules-property").css({"border-bottom":"6px solid","color":"#fde053","height":"68px"})
	 	$(".limits-property").css({"border-bottom": "transparent", "color" : "white"});
	 	$(".jackpots-property").css({"border-bottom": "transparent", "color" : "white"});
	 	$(".rules-text").css("display","block");
	 	$(".rules-text").show();
	 	$(".limits-text").hide();
	 	$(".jackpots-text").hide();
	 });

       $(".rules-property").click(function(){
	 	$(".limits-property").css({"border-bottom": "transparent", "color" : "white"});
	 	$(".jackpots-property").css({"border-bottom": "transparent", "color" : "white"});
	 	$(".rules-property").css({"border-bottom":"6px solid","color":"#fde053" , "height":"68px"});
	 	$(".limits-text").hide();
	 	$(".jackpots-text").hide();
	 	$(".rules-text").show();
	 });


  //      $(".limits-jackpots-rules-close").click(function(){
	 // 	$(".limits-jackpots-rules").hide();


	 // });

        $(".close-limits-jackpots-rules").click(function(){
	 	$(".limits-jackpots-rules").hide();
	 });

}
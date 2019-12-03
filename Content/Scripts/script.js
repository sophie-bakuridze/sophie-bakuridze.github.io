$('*').click(function() {
        if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {

        } else {
            launchFullscreen(document.documentElement);
        }
    });

	 let bet = 0.1;

	function addBet(name, multiplier) {
		let image = `<img class="bet-chip" src="Content/Images/${bet}.png">`;
		var el = $("div[data-name='" + name  +"']");
		$(el).append(image);
	}

	  $(document).ready(function(){


      $(".palace-bet").on("click", function(){
      	
      	let image = `<img class="bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
      });

      $(".palace-bet-split").on("click", function(){   	
      	let image = `<img class="split-bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)

      });
      $(".palace-bet-street").on("click", function(){
      	let image = `<img class="street-split-bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
      });

      $(".all-red-numbers").on("click", function(){
      	let image = `<img class="split-bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });

      $(".all-black-numbers").on("click", function(){
      	let image = `<img class="split-bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });

      $(".column-one-thirtyfour").on("click", function(){
      	let image = `<img class="column-split-bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });
      $(".column-two-thirtyfive").on("click", function(){
      	let image = `<img class="column-split-bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });
      $(".column-three-thirtysix").on("click", function(){
      	let image = `<img class="column-split-bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });
      $(".first-dozen").on("click", function(){
      	let image = `<img class="dozen-bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });
      $(".second-dozen").on("click", function(){
      	let image = `<img class="dozen-bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });
      $(".third-dozen").on("click", function(){
      	let image = `<img class="dozen-bet-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });
      
      $(".palace-bet-straight").on("click", function(){
      	let image = `<img class="straighrt-bets-img" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });
      $(".first-to-eighteen").on("click", function(){
      	let image = `<img class="other-bets-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });
      $(".even").on("click", function(){
      	let image = `<img class="other-bets-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });
      $(".odd").on("click", function(){
      	let image = `<img class="other-bets-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });
      $(".nineteen-to-thirtysix").on("click", function(){
      	let image = `<img class="other-bets-chip" src="Content/Images/${bet}.png">`;
      	$(this).append(image)
     
      });

      $(".video-stream").click(function(){
	 	$(".video-stream-board").css("display","block");
	 	
	 });

   
     $(".menu-button").click(function(){
	  $(".drop-down-menu-board").css("display","block");

	 })

	 $(".X-button").click(function(){
	  $(".drop-down-menu-board").css("display","none");

	})

	 $(".video-stream-close").click(function(event){
	 	
	 	$(".video-stream-board").fadeOut();
	 	
	
	 });


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

	 $(".my-history").click(function(){
	 $(".last-100-button").css("display","block");
	 $(".game-history-list-main").css("display","block");
	 $(".game-history-caption").css({"border-bottom":"6px solid","color":"#fde053"});
	 $(".numbers-caption").css({"border":"transparent","color":"white"});
	 $(".drop-down-menu-board").css("display","none");


	});

	 $(".palaced-bet-history-close").click(function(){
	 	$(".palaced-bet-history").css("display","none");
	 	
	 });


	 $(".chips").click(function(){
	 	$(".choose-chip-board").css("display","block");
	 	$(".choose-chip-board").show();
	 	$(".choose-chip").show();

	 	
	 });
	
     $(".bet-chips").on("click",function(){
     	bet = $(this).data("name");
     	$(".choose-chip").css("display","none");
     	$(".choose-chip-board").css("display","none");
     	$(".chips").css("background-image",'url(Content/Images/' + bet + '.png)');
     	console.log($(this))
 

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
	 	$(".drop-down-menu-board").css("display","none");
	 });

      $(".limits-property").click(function(){
	 	$(".jackpots-property").css({"border-bottom": "transparent", "color" : "white"})
	 	$(".rules-property").css({"border-bottom": "transparent", "color" : "white"})
	 	$(".limits-property").css({"border-bottom":"6px solid","color":"#fde053","height":"68px"})
	 	$(".limits-text").show();
	 	$(".jackpots-text").hide();
	 	$(".rules-text").hide();
	 	$(".drop-down-menu-board").css("display","none");
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
	 	$(".drop-down-menu-board").css("display","none");
	 });

       $(".jackpots-property").click(function(){
	 	$(".limits-property").css({"border-bottom": "transparent", "color" : "white"});
	 	$(".rules-property").css({"border-bottom": "transparent", "color" : "white"});

	 	$(".jackpots-property").css({"border-bottom":"6px solid","color":"#fde053" , "height":"68px"});
	 	$(".limits-text").hide();
	 	$(".jackpots-text").show();
	 	$(".rules-text").hide();
	 	$(".drop-down-menu-board").css("display","none");
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
	 	$(".drop-down-menu-board").css("display","none");
	 });

       $(".rules-property").click(function(){
	 	$(".limits-property").css({"border-bottom": "transparent", "color" : "white"});
	 	$(".jackpots-property").css({"border-bottom": "transparent", "color" : "white"});
	 	$(".rules-property").css({"border-bottom":"6px solid","color":"#fde053" , "height":"68px"});
	 	$(".limits-text").hide();
	 	$(".jackpots-text").hide();
	 	$(".rules-text").show();
	 });


  

        $(".close-limits-jackpots-rules").click(function(){
	 	$(".limits-jackpots-rules").hide();
	 });




    $(window).resize(function () {
        scaleDiv();
    });

 
 
 	$(".money").html(boardData.PlayerInfo.AvailableAmount + '₾');
 	$(".bet-numbers").html(boardData.PlayerInfo.PlacedAmount + ' ₾');
 	$(".win-numbers").html(boardData.PlayerInfo.WonAmount + ' ₾');
 	$(".jackpot-number").html(boardData.JackpotAmount);
 	$(".spin-number").html(boardData.PlayerInfo.SpinNumber);
 	$(".user-name").html(boardData.PlayerInfo.DisplayName);
 	$(".SpinNumber").html(boardData.PlayerInfo.LatestSpins[0].SpinNumber);
 	$(".SpinDate").html(boardData.PlayerInfo.LatestSpins[0].SpinDate);
 	$(".BetAmount").html(boardData.PlayerInfo.LatestSpins[0].BetAmount  + ' ₾');
 	$(".WonAmount").html(boardData.PlayerInfo.LatestSpins[0].WonAmount  + ' ₾');
 	$(".red-percentage").html(boardData.SpinsDistributionPercents.Red + ' %');
 	$(".black-percentage").html(boardData.SpinsDistributionPercents.Black + ' %');
 	$(".odd-percentage").html(boardData.SpinsDistributionPercents.Odd + ' %');
 	$(".even-percentage").html(boardData.SpinsDistributionPercents.Even + ' %');
 	$(".one-eighteen-percentage").html(boardData.SpinsDistributionPercents.FirstHalf + ' %');
 	$(".nineteen-thirtysix-percentage").html(boardData.SpinsDistributionPercents.SecondHalf + ' %');


 	 
 		let LastHoundreedSpins = boardData.Last100SpinNumbers;
 	   for(let key in LastHoundreedSpins ){
        
        let div = `<div class="last-100-item ${LastHoundreedSpins[key].Color}" >${LastHoundreedSpins[key].Number}</div>`;
        $(".last-100-grid").append(div);				  

    }

    for(var i = 0;i < boardData.PlayerInfo.PlacedBets.length;i ++) {
    	
		var name = boardData.PlayerInfo.PlacedBets[i].BetName;
		var Multiplier = boardData.PlayerInfo.PlacedBets[i].Multiplier;
		addBet(name, Multiplier);
		
    }
    
    


    	let Hotnumberstatistic = boardData.SpinsDistributionPercents.HotNumbers; 
        for(let key in boardData.SpinsDistributionPercents.HotNumbers) {
        	
        	if(Hotnumberstatistic[key].Color === 0){
        		
        		Hotnumberstatistic[key].Color = "Red"
        	}
        	if(Hotnumberstatistic[key].Color === 1){
        		
        		Hotnumberstatistic[key].Color = "Black"
        	}
        	let div = `<div class="${Hotnumberstatistic[key].Color}" >${Hotnumberstatistic[key].Number}</div>`;
        	$(".hot-numbers").append(div);
        }
        
        let Coldnumberstatistics = boardData.SpinsDistributionPercents.ColdNumbers;
        for(let key in boardData.SpinsDistributionPercents.ColdNumbers) {
        	
        	if(Coldnumberstatistics[key].Color === 0){
        		
        		Coldnumberstatistics[key].Color = "Red"
        	}
        	if(Coldnumberstatistics[key].Color === 1){
        		
        		Coldnumberstatistics[key].Color = "Black"
        	}
		let div = `<div class="${Coldnumberstatistics[key].Color}" >${Coldnumberstatistics[key].Number}</div>`;
        	$(".cold-numbers").append(div);
        }
});

// function openDropDownMenu(){
	
        	
// }

   
    
    scaleDiv();

function scaleDiv() {
    var width = $(window).width();
    var height = $(window).height();
    var o_width = 1024;
    var o_height = 576;
    var w_scale = 0;
    var h_scale = 0;
    var m_scale = 0;
    var r_deg = 0;
    w_scale = width / o_width;
    h_scale = height / o_height;
    m_scale = Math.min(w_scale, h_scale);
    game_scale = m_scale;
    var bottom = (height / game_scale - o_height);

    $('.content-div').css({'transform': 'scale(' + game_scale + ',' + game_scale + ') ', 'left': (r_deg == 90 ? '100%' : '0px'), 'top': '0px'});
    $('.game-div').css({ 'margin-left': '-512px', 'left': (width / 2) / game_scale });
}
var h2text="Your Move";
var turn = 1;var number = 0;
var x;var y; var allowed=true;var win=false;

$(".sq").click(function(event) { 
    if($(this).hasClass("cross") || $(this).hasClass("circle")) 
    {        
        $("h2").text("Invalid Move"); 
        allowed=false;
        setTimeout(() => { 
            if(turn==1)
            $("h2").text("Player 1's Turn"); 
            else
            $("h2").text("Player 2's Turn");
        }, 800);         
    } 
    else{
        number++;
        console.log(number);    
        allowed=true;
        
        
        if(turn==1) { 
            p1Turn(event.target); 
            win = check("cross");
            if(win==true)
            {
                $("h2").text("Player 1 WINS !!");
                setTimeout(function(){
                    reset();
                },800);
            }
            else if(number==9&&win==false)
            {
                $("h2").text("Its a Draw.");
                $(".sq").css("background-color","red");
            setTimeout(function(){
                reset();
            },800);
            }
        } 
        else {     
            p2Turn(event.target);
            win=check("circle");
            if(win==true)
            {
                $("h2").text("Player 2 WINS !!");
                setTimeout(function(){
                    reset();
                },800);
            }
            else if(number==9&&win==false)
            {
                $("h2").text("Its a Draw.");
                $(".sq").css("background-color","red");
            setTimeout(function(){

                reset();
            },800);
            }
        } 
    }
}); 


function p1Turn(x)
{
    $(x).addClass("cross");
    $("h2").text("Player 2's Turn");
    turn=2;
}
function p2Turn(y)
{
    
    $(y).addClass("circle");
    $("h2").text("Player 1's Turn");
    turn=1;
}
function display(e){
    if(allowed==true){
    if(turn==1) { 
        p1Turn(e);           
    } 
    else {     
        p2Turn(e);
    } 
}
}


function check(symbol) { 
    if ($(".1").hasClass(symbol) &&  
        $(".2").hasClass(symbol) && 
        $(".3").hasClass(symbol)) 
    { 
        $(".1").css("background-color", "green"); 
        $(".2").css("background-color", "green"); 
        $(".3").css("background-color", "green"); 
        return true; 
    } else if ($(".4").hasClass(symbol) 
            && $(".5").hasClass(symbol) 
            && $(".6").hasClass(symbol)) 
    { 
        $(".4").css("background-color", "green"); 
        $(".5").css("background-color", "green"); 
        $(".6").css("background-color", "green"); 
        return true; 
    } else if ($(".7").hasClass(symbol) 
            && $(".8").hasClass(symbol) 
            && $(".9").hasClass(symbol)) 
    { 
        $(".7").css("background-color", "green"); 
        $(".8").css("background-color", "green"); 
        $(".9").css("background-color", "green"); 
        return true; 
    } else if ($(".1").hasClass(symbol) 
            && $(".4").hasClass(symbol) 
            && $(".7").hasClass(symbol))  
    { 
        $(".1").css("background-color", "green"); 
        $(".4").css("background-color", "green"); 
        $(".7").css("background-color", "green"); 
        return true; 
    } else if ($(".2").hasClass(symbol) 
            && $(".5").hasClass(symbol) 
            && $(".8").hasClass(symbol)) 
    { 
        $(".2").css("background-color", "green"); 
        $(".5").css("background-color", "green"); 
        $(".8").css("background-color", "green"); 
        return true; 
    } else if ($(".3").hasClass(symbol) 
            && $(".6").hasClass(symbol) 
            && $(".9").hasClass(symbol))  
    { 
        $(".3").css("background-color", "green"); 
        $(".6").css("background-color", "green"); 
        $(".9").css("background-color", "green"); 
        return true; 
    } else if ($(".1").hasClass(symbol) 
            && $(".5").hasClass(symbol) 
            && $(".9").hasClass(symbol))  
    { 
        $(".1").css("background-color", "green"); 
        $(".5").css("background-color", "green"); 
        $(".9").css("background-color", "green"); 
        return true; 
    } else if ($(".3").hasClass(symbol) 
            && $(".5").hasClass(symbol) 
            && $(".7").hasClass(symbol))  
    { 
        $(".3").css("background-color", "green"); 
        $(".5").css("background-color", "green"); 
        $(".7").css("background-color", "green"); 
        return true; 
    } else { 
        return false; 
    } 
} 

    

function reset() 
{ 
    $("h2").text("Game over");
    $(".sq").css("background-color","grey");
    number=0;
    setTimeout(function(){
        $("h2").text("Player 1's Turn");
    },800);
//    $("#screen").css("background-color", "transparent"); 
   $(".sq").removeClass("cross"); 
   $(".sq").removeClass("circle"); 
   $(".sq").css("background-color","grey");
   turn=1;  
  
   // Reset Colors 
//    $(".sq1").css("color", "black"); 
//    $(".sq2").css("color", "black"); 
//    $(".sq3").css("color", "black"); 
//    $(".sq4").css("color", "black"); 
//    $(".sq5").css("color", "black"); 
//    $(".sq6").css("color", "black"); 
//    $(".sq7").css("color", "black"); 
//    $(".sq8").css("color", "black"); 
//    $(".sq9").css("color", "black"); 
  
} 
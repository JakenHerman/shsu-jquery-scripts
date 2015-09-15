var currentDay = new Date();
var sep10Date = new Date(2015,08, 10);
var sep21Date = new Date(2015, 08, 21);
var oct8Date = new Date(2015, 09, 8);
var oct19Date = new Date(2015, 09, 19);
var nov12Date = new Date(2015, 10, 12);
var nov23Date = new Date(2015, 10, 23);



if (currentDay > sep10Date){
    if (currentDay > sep21Date){
        if(currentDay > oct8Date){
            if(currentDay > oct19Date){
                if(currentDay > nov12Date){
                    if(currentDay > nov23Date){
                        $(".top-date").html("The request form is now closed");
                        $("bottom-date").html("The request form is now closed");
                    }
                    else{
                        $(".top-date").html("Nov. 23, 2015");
                        $(".bottom-date").html("Nov. 22, 2015");
                    }
                    
                }
                else{
                    $(".top-date").html("Nov. 12, 2015");
                    $(".bottom-date").html("Nov. 11, 2015");
                }
                
            }
            else{
                $(".top-date").html("Oct. 19, 2015");
                $(".bottom-date").html("Oct. 18, 2015");
            }
        }
        else{
            $(".top-date").html("Oct. 8, 2015");
            $(".bottom-date").html("Oct. 7, 2015");
        }
    }
    else{
       $(".top-date").html("Sep. 21, 2015");
        $(".bottom-date").html("Sep. 20, 2015");
    }
    
}
else{
  $(".top-date").html("Sep. 10, 2015");  
  $(".bottom-date").html("Sep. 9, 2015");
}

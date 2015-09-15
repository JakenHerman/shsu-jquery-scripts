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
                        $(".all-text").html("The request form is now closed");
                    }
                    else{
                        $(".date").html("November 23, 2015");
                    }
                    
                }
                else{
                    $(".date").html("November 12, 2015");
                 
                }
                
            }
            else{
                $(".date").html("October 19, 2015");

            }
        }
        else{
            $(".date").html("October 8, 2015");
           
        }
    }
    else{
       $(".date").html("September 21, 2015");
       
    }  
}
else{
  $(".date").html("September 10, 2015");  
}

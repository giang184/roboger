// Business Logic
function robo(num) {
  let result = '';
  for(let i = 0; i <= num; i++)
  {
    if( (i+'').includes('3'))
    {
      result += "\"Won't you be my neighbor?\""
    }
    else if( (i+'').includes('2'))
    {
      result += "\"Boop!\""
    }
    else if( (i+'').includes('1'))
    {
      result += "\"Beep!\""
    }
    else {
      result += i;
    }
    
    if(i !== num) {
      result += ", ";
    }
  }
  
  return result;
}



// UI Logic
$(document).ready(function(){
  $("form#roboger").submit(function(event){
    event.preventDefault();
    const number = parseInt($("#number").val());
    
    $("#robogerMessage").html(robo(number));
    $(".result").show();
  });
});
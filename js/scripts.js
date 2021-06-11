// Utility Logic
function roboger(number) {
  if( (number+'').includes('3'))
  {
    return "\"Won't you be my neighbor?\"";
  }
  else if( (number+'').includes('2'))
  {
    return "\"Boop!\"";
  }
  else if( (number+'').includes('1'))
  {
    return "\"Beep!\"";
  }
  else {
    return number+'';
  }
}


// Business Logic
function robo(num) {
  let result = '';
  for(let i = 0; i < num; i++)
  {
    result += roboger(i) + ", ";
  }
  result += roboger(num);
  return result;
}


// UI Logic
$(document).ready(function(){
  $("form#roboger").submit(function(event){
    event.preventDefault();
    const number = parseInt($("#number").val());
    
    if(number<10000)
    {
      $("#robogerMessage").html(robo(number));
      $(".result2").hide();
      $(".result1").show();
    }
    else{
      $("#brokenMessage").html("The number you entered is too big and it broke my computer! Try again with a smaller number :)");
      $(".result1").hide();
      $(".result2").show();
    }
  });
});
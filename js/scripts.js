// Utility Logic
function roboger(number, name) {
  if( (number+'').includes('3')) {
    if(!name)
      return "\"Won't you be my neighbor?\"";
    else
      return "\"Won't you be my neighbor, "+ name + "?\"";
  }
  else if( (number+'').includes('2')) {
    return "\"Boop!\"";
  }
  else if( (number+'').includes('1')) {
    return "\"Beep!\"";
  }
  else {
    return number+'';
  }
}

// Business Logic
function robo(num, name) {
  let result = '';
  for(let i = 0; i < num; i++) {
    result += roboger(i, name) + ", ";
  }
  result += roboger(num, name);
  return result;
}


// UI Logic
$(document).ready(function(){
  $("form#roboger").submit(function(event){
    event.preventDefault();
    const number = parseInt($("#number").val());
    const name = $("#name").val();

    if(number<1000) {
      $("#robogerMessage").html(robo(number, name));
      $(".result2").hide();
      $(".result1").show();
    }
    else {
      $("#brokenMessage").html("You didn't enter a number or the number you entered is too big and it broke my computer! Try again with a smaller number :)");
      $(".result1").hide();
      $(".result2").show();
    }

  });
});
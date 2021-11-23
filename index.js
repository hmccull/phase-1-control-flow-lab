function scuberGreetingForFeet(numOfFeet){
  // create result var
  let greeting = '';

  if (numOfFeet < 400) {
    greeting = 'This one is on me!';
  } else if (numOfFeet > 2000 && numOfFeet < 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else {
    greeting = 'No can do.';
  }

  // return result
  return greeting;
}

function ternaryCheckCity(city){
  // create result var
  let message = '';

  city === 'NYC' ? message = 'Ok, sounds good.' : message = 'No go.';

  // return result var
  return message;
}

function switchOnCharmFromTip(tip){
  // create result var
  let message = '';

  switch(tip) {
    case 'generous': message = 'Thank you so much.';
    break;
    case 'not as generous': message = 'Thank you.';
    break;
    default: message = 'Bye.';
  }

  // return result var
  return message;
}
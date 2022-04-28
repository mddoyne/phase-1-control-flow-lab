let someNumber;
let city;

function scuberGreetingForFeet(someNumber)
{
  if(someNumber <= 400)
  {
    return 'This one is on me!';
  }

  else if(someNumber >= 401 && someNumber <= 2000)
  {
    return 'That will be twenty bucks.';
  }

  else if(someNumber >= 2001 && someNumber <= 2500)
  {
    return 'I will gladly take your thirty bucks.';
  }

  else (someNumber >2500)
  {
    return 'No can do.';
  }
}

function ternaryCheckCity(city)
{

  let cityInput;

  cityInput = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  
  return cityInput;
}

function switchOnCharmFromTip(tip)
{
  switch(tip)
  {
    case 'generous':
      return 'Thank you so much.';

      break;

    case 'not as generous':
      return 'Thank you.';

      break;

    default:
      return 'Bye.';

      break;
  }
}
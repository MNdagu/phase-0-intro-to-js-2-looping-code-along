/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      
    }
  
    return gifts;
  } 
  
  wrapGifts(gifts);*/

const names = ["Guadalupe", "Ollie", "Aki"];  

function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
  }
  
  
  const thankYouMessages = writeCards(names, 'surprise');
  console.log(thankYouMessages); 
  

 function countDown(n){
    let countDown = n;
while (countDown >= 0) {
  console.log(countDown--);
  
}
  }

  countDown(10);
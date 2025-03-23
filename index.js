function writeCards(names, event) {
    let messages = []; 
  
    for (let i = 0; i < names.length; i++) { 
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); 
    }
  
    return messages; 
  }
  
  
  console.log(writeCards(["Alice", "Bob", "Charlie"], "birthday"));

  

function countDown(num) {
    if (num < 0) {
        console.log("Please enter a positive integer");
    return;
}

console.log(num);

if(num > 0) {
    countDown(num -1);
}
}
countDown(10);
function delayedGreeting(name, callback) {
  setTimeout(function() {
    const greeting = `Hello, ${name}!`;
    callback(greeting);
  }, 5000);
}

function displayGreeting(message) {
  console.log(message);
}

delayedGreeting("Veesar", displayGreeting); // "Hello, John!" will be displayed after 1 second

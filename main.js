
/************************
 * DOM HELPER FUNCTIONS *
 ************************/

// Print the given value to the DOM.
const printValue = function(value) {
  // Create a list item.
  const listItem = document.createElement('li');
  // Put the value we were passed into the li.
  listItem.innerText = value;
  // functionFind the unordered list we've made into a results console.
  const list = document.querySelector('.list')
  // Append our list item to it.
  list.appendChild(listItem);
}

// Clears the list from the DOM.
const clearList = function() {
  let current = document.querySelector('.list > li');
  while(current !== null) {
    current.remove();
    current = document.querySelector('.list > li');
  }
}


/***************************
 * EVENT HANDLER FUNCTIONS *
 ***************************/

const handleClickBiggify = function() {
  clearList();
  
  // Find the input box the user is typing in and put the DOM node in a variable.
  const inputBox = document.querySelector('.user-input');
  
  // Use the variable saved in the above step to dive deeper into the
  // object and find the value the user has added there. Save it to a variable in number format.
  const userInput = Number(inputBox.value);
  
  
  // Add 9000 to the user's number.
  const biggified = biggify(userInput);

  // Print out our result.
  printValue(biggified);

  // Clear the input box.
  inputBox.value = '';
}

const handleClickNasafy = function() {
  clearList();
  
  // Find the input box the user is typing in and put the DOM node in a variable.
  // Make sure you're using the right selector!t
  const inputBox = document.querySelector('.user-input');
  
  // Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Save it to a variable.
  const userInput = inputBox.value;

  // Print our countdown.
  const countdown = nasafy(userInput);
  for (count of countdown) {
    printValue(count);
  }
  
  inputBox.value = '';
}

const handleClickCrazify = function() {
  clearList();
  
 // Find the input box the user is typing in and put the DOM node in a variable.
  // Make sure you're using the right selector!t
  const inputBox = document.querySelector('.user-input');
  
  // Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Save it to a variable.
  
  const userInput = inputBox.value;

  printValue(crazify(userInput));
  
  inputBox.value = '';
}
  
const handleClickReversify = function() {
  clearList();
  
  // Find the input box the user is typing in and put the DOM node in a variable.
  // Make sure you're using the right selector!
  const inputBox = document.querySelector('.user-input');

  // Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Make sure it's a
  // number, not a string. Save it to a variable.

  const userInput = inputBox.value;

  printValue(reversify(userInput));

  inputBox.value = '';
}

const handleClickTitleify = function() {
  clearList();
  
  // Find the input box the user is typing in and put the DOM node in a variable.
  // Make sure you're using the right selector!
  const inputBox = document.querySelector('.user-input');
  
  // Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Save it to a variable.

  const userInput = inputBox.value;

  printValue(titleify(userInput));

  inputBox.value = '';
}



/**************************
 * SET UP EVENT LISTENERS *
 **************************/

// Find the biggify button on our page. Put it in a variable (just to have one explicitly coded version!).
const biggifyNumbersButton = document.querySelector('.big');
// When it's clicked, launch the appropriate function.
biggifyNumbersButton.addEventListener('click', handleClickBiggify);

// Find the nasafy button on our page and, when it's clicked, launch the appropriate function.
document.querySelector('.blastoff').addEventListener('click', handleClickNasafy);

// Find the crazify button on our page and, when it's clicked, launch the appropriate function.
document.querySelector('.crazy').addEventListener('click', handleClickCrazify);

// Find the reverse button on our page and, when it's clicked, launch the appropriate function.
document.querySelector('.reverse').addEventListener('click', handleClickReversify);

// Find the title case button on our page and, when it's clicked, launch the appropriate function.
document.querySelector('.title').addEventListener('click', handleClickTitleify)


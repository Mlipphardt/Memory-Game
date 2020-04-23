function shuffleArray(array) {
  //Variables to save current index, save a random index, and transfer numbers.
  let currentIndex = array.length,
    rolledIndex,
    tempHolder;

  //Will end when no numbers left to shuffle.
  while (currentIndex) {
    console.log("Current index before rolling: " + currentIndex);
    //Rolls to pick a random unshuffled item.
    rolledIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    console.log("Current index: " + currentIndex);
    console.log(rolledIndex);
    //Back of array item saved.
    tempHolder = array[currentIndex];
    console.log("Stored value in tempHolder" + array[currentIndex]);
    //Randomly rolled item placed in back of array.
    array[currentIndex] = array[rolledIndex];
    //Former rolled index now becomes the number formerly in the back of the unshuffled array.
    array[rolledIndex] = tempHolder;
  }
  //Return the shuffled array.
  console.log(array);
}

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

shuffleArray(test);

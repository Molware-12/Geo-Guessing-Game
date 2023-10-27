let images = ["america", "canada", "france", "china", "india"];
let mImages = ["barcelona", "london", "kyoto", "istanbul", "rome"];
// initialize 2 arrays, one for easy and one for moderate(images is for easy, mImages is for moderate)
let currentImage = null;
let randomIndex = 0;
let selectedImg = null;
var score = 0;
// set all these variables to either null for image elements later on, and 0 for integer variables
var tBox_sBox = document.getElementById("game");
var cBox_bBox = document.getElementById("game2");
// these variables are the div elements for both games, so tBox_sBox is for the easy mode, and cBox_bBox is for the moderate mode

  var easyMode = document.getElementById("easy");

  easyMode.addEventListener("click", function(){ // this eventlistener is just for the initial image for the easy move
  randomIndex = Math.floor(Math.random() * images.length);
  selectedImg = images[randomIndex]; // gets a random number for how many elements are in the easy images array, and gets the index of that number

  currentImage = document.createElement("img");
  currentImage.src = "images_easy/" + selectedImg + ".jpg";
  document.body.append(currentImage); // these lines are printing the image to the user, where we create an image element, with the src being the folder of images we have, then appending that to the screen

  easyMode.remove();
  moderateMode.remove();
  tBox_sBox.style.display = "block";
  images.splice(randomIndex, 1);
  // these lines remove both buttons off the screen, and display the functions of the button that was pressed
  alert("All guesses must be in lowercase.");
});

var moderateMode = document.getElementById("moderate");

    moderateMode.addEventListener("click", function(){ // exact same functionality as above, just for the moderate function.
    randomIndex = Math.floor(Math.random() * mImages.length);
    selectedImg = mImages[randomIndex];
  
    currentImage = document.createElement("img");
    currentImage.src = "images_moderate/" + selectedImg + ".jpg";
    document.body.append(currentImage);
  
    moderateMode.remove();
    easyMode.remove();
    cBox_bBox.style.display = "block";
    mImages.splice(randomIndex, 1);
    alert("All guesses must be in lowercase.");
  });

function displayImage(image_arr) {
  var files = "";
  if (image_arr == images){
    files += "images_easy/";
  } else if (image_arr == mImages){
    files += "images_moderate/";
  } // these lines determine which arrays to display images from

  if (currentImage) {
    currentImage.remove();
    currentImage = null; 
  } // removes the current image when a new one comes up
  
  if (image_arr.length > 0) {
    randomIndex = Math.floor(Math.random() * image_arr.length);
    selectedImg = image_arr[randomIndex];
    
    currentImage = document.createElement("img");
    currentImage.src = files + selectedImg + ".jpg";
    document.body.append(currentImage);  // these lines probably look familiar but this functions repeats until the length of the image array is 0
    
    image_arr.splice(randomIndex, 1); // removes the image that was on the screen
  }
}

function Handler(textBox, div){
  var correct = null;

  var guess = textBox.value;
  if(guess === selectedImg){
    correct = true;
    if(correct === true){
    score = score + 1;
      alert("Correct!");
    }
  } else{
    correct = false;
    if(correct === false){
    alert("Incorrect.");
  }} // these lines simply determine if the guess, which is the value of the text box is the same thing as the string in the array, and increments the score accordingly

  if(images.length === 0){
    alert(`Your score was ${score}!`);
    div.style.display = "none";
  } else if (mImages.length === 0){
    alert(`Your score was ${score}!`);
    div.style.display = "none";
  }
  } // recieves the score from the incremental variable score, and returns it to the user.

  var submit = document.getElementById("submit"); 
submit.addEventListener("click", function(){
  Handler(document.getElementById("guess"), tBox_sBox);
  displayImage(images);
});
// after either button is pressed, both functions will be called and ran for its respective mode
var submit2 = document.getElementById("submit2");
submit2.addEventListener("click", function(){
  Handler(document.getElementById("cGuess"), cBox_bBox);
  displayImage(mImages);
});

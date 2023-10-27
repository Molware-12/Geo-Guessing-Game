let images = ["america", "canada", "france", "china", "india"];
let mImages = ["barcelona", "london", "kyoto", "istanbul", "rome"];
let currentImage = null;
let randomIndex = 0;
let selectedImg = null;
var score = 0;
var tBox_sBox = document.getElementById("game");
var cBox_bBox = document.getElementById("game2");

  var easyMode = document.getElementById("easy");

  easyMode.addEventListener("click", function(){
  randomIndex = Math.floor(Math.random() * images.length);
  selectedImg = images[randomIndex];

  currentImage = document.createElement("img");
  currentImage.src = "images_easy/" + selectedImg + ".jpg";
  document.body.append(currentImage);

  easyMode.remove();
  moderateMode.remove();
  tBox_sBox.style.display = "block";
  images.splice(randomIndex, 1);
  alert("All guesses must be in lowercase.");
});

var moderateMode = document.getElementById("moderate");

    moderateMode.addEventListener("click", function(){
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
  }

  if (currentImage) {
    currentImage.remove();
    currentImage = null; 
  }
  
  if (images.length > 0) {
    randomIndex = Math.floor(Math.random() * image_arr.length);
    selectedImg = image_arr[randomIndex];
    
    currentImage = document.createElement("img");
    currentImage.src = files + selectedImg + ".jpg";
    document.body.append(currentImage);
    
    image_arr.splice(randomIndex, 1);
  }
}

var submit = document.getElementById("submit"); 
submit.addEventListener("click", function(){
  Handler(document.getElementById("guess"), tBox_sBox);
  displayImage(images);
});

var submit2 = document.getElementById("submit2");
submit2.addEventListener("click", function(){
  Handler(document.getElementById("cGuess"), cBox_bBox);
  displayImage(mImages);
});

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
  }}

  if(images.length === 0){
    alert(`Your score was ${score}!`);
    div.style.display = "none";
  } else if (mImages.length === 0){
    alert(`Your score was ${score}!`);
    div.style.display = "none";
  }
  }

var theory = [
    "assets/theory/login.png",
    "assets/theory/mens.png",
    "assets/theory/womens.png",
    "assets/theory/cart.png",
    "assets/theory/admin.png"
    ]
  
    var index1 = 0;
    setInterval (function(){
      if (index1 === theory.length) {
        index1 = 0;
      }
      document.getElementById("theory").src = theory[index1];
      index1++;
    } , 2000);
  
  //   Kvoos.com ----------------------
  
  
  var kvoos = [
    "assets/Kvoos/login.jpg",
    "assets/Kvoos/cart.jpg",
    "assets/Kvoos/product.jpg",
    "assets/Kvoos/signup.jpg"
    ]
  
    var index2 = 0;
    setInterval (function(){
      if (index2 === kvoos.length) {
        index2 = 0;
      }
      document.getElementById("kvoos").src = kvoos[index2];
      index2++;
    } , 2000);
  
  // food app ----------------
  
  var food = [
    "assets/food/one.png",
    "assets/food/two.png",
    "assets/food/three.png",
    "assets/food/four.png"
    ]
  
    var index3 = 0;
    setInterval (function(){
      if (index3 === food.length) {
        index3 = 0;
      }
      document.getElementById("food").src = food[index3];
      index3++;
    } , 2000);
  
  //   Kvoos.com -------------------------
  
  
  var youtube = [
    "assets/youtube/one.png",
    "assets/youtube/two.png",
    "assets/youtube/three.png",
    "assets/youtube/four.png"
    ]
  
    var index4 = 0;
    setInterval (function(){
      if (index4 === youtube.length) {
        index4 = 0;
      }
      document.getElementById("youtube").src = youtube[index4];
      index4++;
    } , 2000);
  
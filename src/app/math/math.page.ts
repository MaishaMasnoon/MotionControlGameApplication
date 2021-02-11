import { Component, HostListener, OnInit } from '@angular/core';
import { allowedNodeEnvironmentFlags } from 'process';

@Component({
  selector: 'app-math',
  templateUrl: './math.page.html',
  styleUrls: ['./math.page.scss'],
})
export class MathPage implements OnInit {

  @HostListener('window:devicemotion', ['$event']) handleMotion(event: DeviceMotionEvent) {
    var x1 = event.accelerationIncludingGravity.x;
    var y1 = event.accelerationIncludingGravity.y;

    // Do something awesome
    if (x1 === null) {
      x1 = 0.7;
    }
    if (y1 === null) {
      y1 = 0.7;
    }

    //this.moveTheCircle(x1, y1);
    this.moveFish(x1, y1);

  }

  constructor() { }
  public numOfCarrots;


  x;
  num = 0;
  page = 0;

  ngOnInit() {
    //this.moveTheCircle(0, 0);
    this.moveFish(0, 0);


  }
  //puzzle code===============================================

  /*moveTheCircle(x1, y1) {
    //var circleL = document.getElementById('ball1');
    //var topVal = parseInt(circleL.style.left, 10);
    //circleL.style.left = (topVal + 300) + "px"; 
    var posT = document.getElementById('ball1').offsetTop;
    var posL = document.getElementById('ball1').offsetLeft;
    var posBL = document.getElementById('box').offsetLeft;
    var posBL1 = document.getElementById('box1').offsetLeft;
    var posBT1 = document.getElementById('box1').offsetTop;
    moveLeft(x1, y1);
    function moveLeft(x1, y1) {

      // if (posL < posBL) {

      for (let i = 1; i < 10; i++) {
        document.getElementById('ball1').style.left = x1 * i + "px";
        console.log("x1: ", x1);

        console.log(posT);
        console.log(posL);
        console.log(posBL);
        document.getElementById('L').innerHTML = posL.toString();
        document.getElementById('BL').innerHTML = posBL.toString();
        var brk = posBL - 4;
        //conditions
        if (posL == posBL - 4 || posL == posBL - 3 || posL == posBL - 5 && posT <= posBT1) {
          document.getElementById('BL').innerHTML = "brk works";
          for (let i = 1; i < 10; i++) {
            document.getElementById('ball1').style.top = y1 * i + "px";
            if (posT < posBT1 - 1) {
              for (let j = 1; j < 1; j++) {
                document.getElementById('ball1').style.left = x1 * j + "px";
              }
            }
            else {
              for (let i = 1; i < 10; i++) {
                document.getElementById('ball1').style.left = x1 * i + "px";
                console.log("x1: ", x1);
              }
            }
          }

        }

      }

      //}

    }

    


  }*/
  //puzzle code===============================================================================
  moveFish(x1, y1) {
    var fishPositionL = document.getElementById('fish').offsetLeft;
    var fishPositionT = document.getElementById('fish').offsetTop;
    var fishPositionW = document.getElementById('fish').offsetWidth;
    var fishPositionH = document.getElementById('fish').offsetHeight;

    var sharkPositionL = document.getElementById('shark').offsetLeft;
    var sharkPositionT = document.getElementById('shark').offsetTop;
    var sharkPositionW = document.getElementById('shark').offsetWidth;
    var sharkPositionH = document.getElementById('shark').offsetHeight;

    var shark1PositionL = document.getElementById('shark1').offsetLeft;
    var shark1PositionT = document.getElementById('shark1').offsetTop;
    var shark1PositionW = document.getElementById('shark1').offsetWidth;
    var shark1PositionH = document.getElementById('shark1').offsetHeight;

    var fruitPositionL = document.getElementById('dragonFruit').offsetLeft;
    var fruitPositionT = document.getElementById('dragonFruit').offsetTop;
    var fruitPositionW = document.getElementById('dragonFruit').offsetWidth;
    var fruitPositionH = document.getElementById('dragonFruit').offsetHeight;

    var fruit1PositionL = document.getElementById('grape').offsetLeft;
    var fruit1PositionT = document.getElementById('grape').offsetTop;
    var fruit1PositionW = document.getElementById('grape').offsetWidth;
    var fruit1PositionH = document.getElementById('grape').offsetHeight;

    var fruit2PositionL = document.getElementById('apple').offsetLeft;
    var fruit2PositionT = document.getElementById('apple').offsetTop;
    var fruit2PositionW = document.getElementById('apple').offsetWidth;
    var fruit2PositionH = document.getElementById('apple').offsetHeight;

    var scoreForDragonFriut = document.getElementById('scoreForD').offsetTop;
    var scoreForGrapes = document.getElementById('scoreForG').offsetTop;
    var scoreForApples = document.getElementById('scoreForA').offsetTop;

    var dragonFruits = 0;
    var grapes = 0;
    var apples = 0;
    var countFruit = 0;

    var posBL = document.getElementById('box').offsetLeft;
    moving(x1, y1);
    function moving(x1, y1) {
      for (let i = 1; i < 20; i++) {
        document.getElementById('fish').style.left = x1 * i + "px";
        document.getElementById('fish').style.top = y1 * i + "px";

        console.log("position of Box: ", posBL);
        fishCollision(x1, y1);
        fishCollision1(x1, y1);
        fruitCollition(x1, y1);
        fruitCollition1(x1, y1);
        fruitCollition2(x1, y1);
        displayResults();
        console.log(fishPositionH);
        console.log(sharkPositionH);
        console.log("apple Left: " + fruit2PositionL);
      }
    }

    function fishCollision(x1, y1) {
      if (fishPositionT <= sharkPositionT + sharkPositionH && fishPositionT >= sharkPositionT - 20 && sharkPositionL <= fishPositionL + fishPositionW && sharkPositionL >= fishPositionL + fishPositionW - 10) {
        // document.getElementById('fruitScore').style.opacity = "1";

      }
      else {

      }
    }

    function fishCollision1(x1, y1) {

      if (fishPositionT <= shark1PositionT + shark1PositionH && fishPositionT >= shark1PositionT - 20 && shark1PositionL <= fishPositionL + fishPositionW && shark1PositionL >= fishPositionL + fishPositionW - 10) {
        // document.getElementById('fishDead').innerHTML = "fish dead";
        //document.getElementById('fruitScore').style.opacity = "1";

      }
      else {
        //document.getElementById('fishDead').innerHTML = "not dead";

      }
    }

    function fruitCollition(x1, y1) {
      if (fishPositionT <= fruitPositionT + fruitPositionH && fishPositionT >= fruitPositionT - 10 && fruitPositionL <= fishPositionL + fishPositionW && fruitPositionL >= fishPositionL - fishPositionW + 5) {
        dragonFruits = 1;
        countFruit = 1;

        document.getElementById('dragonFruitCount').innerHTML = "Number of dragon fruits: " + dragonFruits.toString();
        //document.getElementById('result').innerHTML = "Total number of fruits: " + countFruit.toString();
        document.getElementById('dragonFruit').style.display = "none";
        document.getElementById('scoreForD').style.display = "flex";
      }
      else {

      }

    }

    function fruitCollition1(x1, y1) {
      if (fishPositionT <= fruit1PositionT + fruit1PositionH && fishPositionT >= fruit1PositionT - 10 && fruit1PositionL <= fishPositionL + fishPositionW && fruit1PositionL >= fishPositionL - fishPositionW + 5) {
        grapes = 1;
        countFruit = dragonFruits + grapes;

        console.log("dragonFruits: " + dragonFruits);
        document.getElementById('grapesCount').innerHTML = "Number of grapes: " + grapes.toString();
        //document.getElementById('result').innerHTML = "Total number of fruits: " + countFruit.toString();
        document.getElementById('grape').style.display = "none";
        document.getElementById('scoreForG').style.display = "flex";
      }
      else {


      }
    }
    function fruitCollition2(x1, y1) {
      if (fishPositionT <= fruit2PositionT + fruit2PositionH && fishPositionT >= fruit2PositionT - 10 && fruit2PositionL <= fishPositionL + fishPositionW && fruit2PositionL >= fishPositionL - fishPositionW + 5) {
        apples = 1;
        countFruit = dragonFruits + grapes + apples;
        document.getElementById('applesCount').innerHTML = "Number of apples: " + apples.toString();
        //document.getElementById('result').innerHTML = "Total number of fruits: " + countFruit.toString();
        document.getElementById('apple').style.display = "none";
        //document.getElementById('fruitScore').style.opacity = "1";
        document.getElementById('scoreForA').style.display = "flex";
      }
      else {

      }
    }
    console.log(scoreForDragonFriut);
    console.log(scoreForGrapes);
    console.log(scoreForApples);
    if (scoreForDragonFriut < 0) {
      dragonFruits = 1;
    }
    if (scoreForGrapes < 0) {
      grapes = 1;
    }
    if (scoreForApples < 0) {
      apples = 1;
    }
    countFruit = dragonFruits + grapes + apples;
    if (countFruit == 0 || countFruit == 1) {
      document.getElementById('result').innerHTML = "Total number of fruits: " + countFruit.toString();
      console.log("countFruit == 0 || countFruit == 1");
    }
    else if (countFruit == 2) {
      document.getElementById('result').innerHTML = "Total number of fruits: 1 + 1 =" + countFruit.toString();
    }
    else if (countFruit == 3) {
      document.getElementById('result').innerHTML = "Total number of fruits: 1 + 1 + 1 =" + countFruit.toString();
    }
    console.log("countFruit: " + countFruit);
    function displayResults() {
      if (fruit2PositionL + fruit2PositionW < 0) {

        //document.getElementById('fruitScore').style.opacity = "1";
      }
      else if (shark1PositionL < 0) {
        document.getElementById('fruitScore').style.opacity = "1";
        document.getElementById('page4').style.opacity = "0.5";
      }
    }

  }

  rabbit1() {
    this.num = this.num + 1;
    this.x = new Audio('./assets/images/oh no.mp3');
    this.x.play();
    document.getElementById("carrot1").style.opacity = "1.0";
    document.getElementById("number1").style.opacity = "1.0";
    document.getElementById("equals").style.opacity = "1.0";
    document.getElementById("btncarrot1").style.opacity = "0";

    document.getElementById("totalNumber").style.display = "none";
  }
  rabbit2() {
    this.x = new Audio('./assets/images/oh no.mp3');
    this.x.play();
    this.num = this.num + 1;
    document.getElementById("carrot2").style.opacity = "1.0";
    document.getElementById("number2").style.opacity = "1.0";
    document.getElementById("plus1").style.opacity = "1.0";
    document.getElementById("equals").style.opacity = "1.0";
    document.getElementById("btncarrot2").style.opacity = "0";
    document.getElementById("totalNumber").style.display = "none";
  }
  rabbit3() {
    this.x = new Audio('./assets/images/oh no.mp3');
    this.x.play();
    this.num = this.num + 1;
    console.log(this.num);
    document.getElementById("carrot3").style.opacity = "1.0";
    document.getElementById("number3").style.opacity = "1.0";
    document.getElementById("plus2").style.opacity = "1.0";
    document.getElementById("equals").style.opacity = "1.0";
    document.getElementById("btncarrot3").style.opacity = "0";
    document.getElementById("totalNumber").style.display = "none";
  }
  next() {
    this.page = this.page + 1;
    if (this.page == 1) {
      console.log("page");
      document.getElementById("main").style.display = "none";
      document.getElementById("hidden").style.display = "none";
      document.getElementById("page4").style.display = "block";
      document.getElementById("page4Instruction").style.display = "none";


      // document.getElementById("next").innerHTML = "check";
    }
    if (this.page == 2) {
      // document.getElementById("next").innerHTML = "check";
      document.getElementById("main").style.display = "none";
      document.getElementById("hidden").style.display = "block";
      document.getElementById("page4").style.display = "none";
      document.getElementById("page4Instruction").style.display = "none";
    }
    if (this.page == 3) {
      document.getElementById("next").innerHTML = "check";
      document.getElementById("main").style.display = "block";
      document.getElementById("hidden").style.display = "none";
      document.getElementById("page4").style.display = "none";
      document.getElementById("page4Instruction").style.display = "none";
    }

    if (this.page > 3 && this.numOfCarrots == this.num) {
      //alert("Answer was correct");
      // document.getElementById("next").innerHTML = "check";
      document.getElementById("showResult").style.opacity = "1.0";
      document.getElementById("correctAnswer").innerHTML = "You got the correct answer!"
      document.getElementById("main").style.display = "block";
      document.getElementById("hidden").style.display = "none";
      document.getElementById("page4").style.display = "none";
      document.getElementById("page4Instruction").style.display = "none";

    }
    else if (this.page > 3 && this.numOfCarrots != this.num) {
      //alert("Answer was incorrect. Try again");
      // document.getElementById("next").innerHTML = "check";
      document.getElementById("showResult").style.opacity = "1.0";
      document.getElementById("correctAnswer").innerHTML = "You got the wrong answer! Correct answer is " + this.num;
      document.getElementById("main").style.display = "block";
      document.getElementById("hidden").style.display = "none";
      document.getElementById("page4").style.display = "none";
      document.getElementById("page4Instruction").style.display = "none";

    }

  }

}

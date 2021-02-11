import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-puzzle-problem',
  templateUrl: './puzzle-problem.page.html',
  styleUrls: ['./puzzle-problem.page.scss'],
})
export class PuzzleProblemPage implements OnInit {
  @HostListener('window:devicemotion', ['$event']) handleMotion(event: DeviceMotionEvent) {
    var x1 = event.accelerationIncludingGravity.x;
    var y1 = event.accelerationIncludingGravity.y;

    // Do something awesome
    if (x1 === null) {
      x1 = 0.7;
    }
    if (y1 === null) {
      y1 = 0.2;
    }

    this.moveTheCircle(x1, y1);


  }
  constructor() { }
  public numOfhouses;
  point = 0;
  ngOnInit() {
    this.moveTheCircle(0, 0);
  }

  moveTheCircle(x1, y1) {
    //var circleL = document.getElementById('ball1');
    //var topVal = parseInt(circleL.style.left, 10);
    //circleL.style.left = (topVal + 300) + "px";


    /* var posBallT = document.getElementById('ball1').offsetTop;
     var posBallL = document.getElementById('ball1').offsetLeft;
     var posBallW = document.getElementById('ball1').offsetWidth;
     var posBallH = document.getElementById('ball1').offsetHeight;
 
     var posBoxL = document.getElementById('box').offsetLeft;
     var posBoxW = document.getElementById('box').offsetWidth;
 
     var posBoxL1 = document.getElementById('box1').offsetLeft;
     var posBoxT1 = document.getElementById('box1').offsetTop;
     var posBoxH1 = document.getElementById('box1').offsetHeight;
     var posBoxW1 = document.getElementById('box1').offsetWidth;
 
     var add = posBoxT1 + posBoxH1;*/
    //first house 
    var housHeight = document.getElementById('floatingHouse').offsetHeight;
    var housWidth = document.getElementById('floatingHouse').offsetWidth;
    var housLeft = document.getElementById('floatingHouse').offsetLeft;
    var housTop = document.getElementById('floatingHouse').offsetTop;

    var houseBottom = housTop + housHeight;
    var houseCenter = housWidth / 2;
    var houseCenterPos = housLeft + houseCenter;

    //second house 
    var housHeight1 = document.getElementById('floatingHouse1').offsetHeight;
    var housWidth1 = document.getElementById('floatingHouse1').offsetWidth;
    var housLeft1 = document.getElementById('floatingHouse1').offsetLeft;
    var housTop1 = document.getElementById('floatingHouse1').offsetTop;

    var houseBottom1 = housTop1 + housHeight1;
    var houseCenter1 = housWidth1 / 2;
    var houseCenterPos1 = housLeft1 + houseCenter1;

    //third house 
    var housHeight2 = document.getElementById('floatingHouse2').offsetHeight;
    var housWidth2 = document.getElementById('floatingHouse2').offsetWidth;
    var housLeft2 = document.getElementById('floatingHouse2').offsetLeft;
    var housTop2 = document.getElementById('floatingHouse2').offsetTop;

    var houseBottom2 = housTop2 + housHeight2;
    var houseCenter2 = housWidth2 / 2;
    var houseCenterPos2 = housLeft2 + houseCenter2;

    //level1
    var levelHeight = document.getElementById('float1').offsetHeight;
    var levelWidth = document.getElementById('float1').offsetWidth;
    var levelLeft = document.getElementById('float1').offsetLeft;
    var levelTop = document.getElementById('float1').offsetTop;

    var levelRight = levelLeft + levelWidth;

    //level2
    var levelHeight1 = document.getElementById('float2').offsetHeight;
    var levelWidth1 = document.getElementById('float2').offsetWidth;
    var levelLeft1 = document.getElementById('float2').offsetLeft;
    var levelTop1 = document.getElementById('float2').offsetTop;

    var levelRight1 = levelLeft1 + levelWidth1;

    //level3
    var levelHeight2 = document.getElementById('float3').offsetHeight;
    var levelWidth2 = document.getElementById('float3').offsetWidth;
    var levelLeft2 = document.getElementById('float3').offsetLeft;
    var levelTop2 = document.getElementById('float3').offsetTop;

    var levelRight2 = levelLeft2 + levelWidth2;

    var house4 = document.getElementById('HouseOnTheLevel4').offsetTop;
    var house44 = document.getElementById('HouseOnTheLevel44').offsetTop;
    var house444 = document.getElementById('HouseOnTheLevel444').offsetTop;

    var displayValue = document.getElementById('HouseOnTheLevel444').style.display.toString();

    //scores
    var score1 = 0;
    var score2 = 0;
    var score3 = 0;
    var total = 0;

    moveLeft(x1, y1);
    function moveLeft(x1, y1) {
      console.log("height: " + housHeight);
      console.log("width: " + housWidth);
      console.log("house Bottom: " + houseBottom);
      console.log("level Top" + levelTop);

      for (let i = 1; i < 20; i++) {
        console.log("housTop: " + housTop);
        document.getElementById('floatingHouse').style.left = x1 * i + "px";
        console.log("x1: ", x1);
        flostingLevelCollision(x1, y1);


      }

      for (let i = 1; i < 20; i++) {
        document.getElementById('floatingHouse1').style.left = x1 * i + "px";
        console.log("x1: ", x1);
        flostingLevelCollision1(x1, y1);

      }

      for (let i = 1; i < 20; i++) {
        document.getElementById('floatingHouse2').style.left = x1 * i + "px";
        console.log("x1: ", x1);
        flostingLevelCollision2(x1, y1);
      }
    }

    function flostingLevelCollision(x1, y1) {

      console.log("x1: ", x1);
      //flostingLevelCollision1(x1, y1)
      if (housTop + housHeight > levelTop && housTop + housHeight < levelTop + levelHeight && houseCenterPos >= levelLeft && houseCenterPos <= levelRight) {

        document.getElementById('HouseOnTheLevel1').style.display = "block";
        document.getElementById('floatingHouse').style.animationPlayState = "paused";
        document.getElementById('floatingHouse').style.display = "none";

        console.log("this works");

      }
      else if (housTop + housHeight > levelTop1 && housTop + housHeight < levelTop1 + levelHeight1 && houseCenterPos >= levelLeft1 && houseCenterPos <= levelRight1) {
        document.getElementById('HouseOnTheLevel2').style.display = "block";
        document.getElementById('floatingHouse').style.animationPlayState = "paused";
        document.getElementById('floatingHouse').style.display = "none";

        console.log("this works");

      }
      else if (housTop + housHeight > levelTop2 && housTop + housHeight < levelTop2 + levelHeight2 && houseCenterPos >= levelLeft2 && houseCenterPos <= levelRight2) {
        document.getElementById('HouseOnTheLevel3').style.display = "block";
        document.getElementById('floatingHouse').style.animationPlayState = "paused";
        document.getElementById('floatingHouse').style.display = "none";

        console.log("this works");

      }
      else if (housTop == 462) {
        //document.getElementById('HouseOnTheLevel1').style.display = "block";
        document.getElementById('HouseOnTheLevel4').style.display = "block";
        document.getElementById('floatingHouse').style.animationPlayState = "paused";
        document.getElementById('floatingHouse').style.display = "none";
        score1 = 1;
        console.log("score1: " + score1);

      }

    }

    function flostingLevelCollision1(x1, y1) {

      console.log("x1: ", x1);
      //flostingLevelCollision1(x1, y1)
      if (housTop1 + housHeight1 > levelTop && housTop1 + housHeight1 < levelTop + levelHeight && houseCenterPos1 >= levelLeft && houseCenterPos1 <= levelRight) {
        document.getElementById('HouseOnTheLevel11').style.display = "block";
        document.getElementById('floatingHouse1').style.animationPlayState = "paused";
        document.getElementById('floatingHouse1').style.display = "none";

        console.log("this works");

      }
      else if (housTop1 + housHeight1 > levelTop1 && housTop1 + housHeight1 < levelTop1 + levelHeight1 && houseCenterPos1 >= levelLeft1 && houseCenterPos1 <= levelRight1) {
        document.getElementById('HouseOnTheLevel22').style.display = "block";
        document.getElementById('floatingHouse1').style.animationPlayState = "paused";
        document.getElementById('floatingHouse1').style.display = "none";

        console.log("this works");

      }
      else if (housTop1 + housHeight1 > levelTop2 && housTop1 + housHeight1 < levelTop2 + levelHeight2 && houseCenterPos1 >= levelLeft2 && houseCenterPos1 <= levelRight2) {
        document.getElementById('HouseOnTheLevel33').style.display = "block";
        document.getElementById('floatingHouse1').style.animationPlayState = "paused";
        document.getElementById('floatingHouse1').style.display = "none";

        console.log("this works");

      }
      else if (housTop1 == 462) {
        document.getElementById('HouseOnTheLevel44').style.display = "block";
        document.getElementById('floatingHouse1').style.animationPlayState = "paused";
        document.getElementById('floatingHouse1').style.display = "none";
        score2 = 1;
        console.log("score2: " + score2);
        total = score1 + score2;
        document.getElementById('scoreDisplay1').innerHTML = total.toString();
      }

    }

    function flostingLevelCollision2(x1, y1) {
      if (housTop2 + housHeight2 > levelTop && housTop2 + housHeight2 < levelTop + levelHeight && houseCenterPos2 >= levelLeft && houseCenterPos2 <= levelRight) {
        document.getElementById('HouseOnTheLevel111').style.display = "block";
        document.getElementById('floatingHouse2').style.animationPlayState = "paused";
        document.getElementById('floatingHouse2').style.display = "none";

        console.log("this works");

      }
      else if (housTop2 + housHeight2 > levelTop1 && housTop2 + housHeight2 < levelTop1 + levelHeight1 && houseCenterPos2 >= levelLeft1 && houseCenterPos2 <= levelRight1) {
        document.getElementById('HouseOnTheLevel222').style.display = "block";
        document.getElementById('floatingHouse2').style.animationPlayState = "paused";
        document.getElementById('floatingHouse2').style.display = "none";

        console.log("this works");

      }
      else if (housTop2 + housHeight2 > levelTop2 && housTop2 + housHeight2 < levelTop2 + levelHeight2 && houseCenterPos2 >= levelLeft2 && houseCenterPos2 <= levelRight2) {
        document.getElementById('HouseOnTheLevel333').style.display = "block";
        document.getElementById('floatingHouse2').style.animationPlayState = "paused";
        document.getElementById('floatingHouse2').style.display = "none";

        console.log("this works");

      }
      else if (housTop2 == 462) {
        document.getElementById('HouseOnTheLevel444').style.display = "block";
        document.getElementById('floatingHouse2').style.animationPlayState = "paused";
        document.getElementById('floatingHouse2').style.display = "none";
        score3 = 1;
        console.log("score3: " + score3);

      }

    }

    if (house4 > 455) {
      score1 = 1;
    }
    if (house44 > 455) {
      score2 = 1;
    }
    if (house444 > 455) {
      score3 = 1;
    }
    total = score1 + score2 + score3;
    document.getElementById('scoreDisplay1').innerHTML = total.toString();

    //document.getElementById('L').innerHTML = posBallT.toString();

    //document.getElementById('BL').innerHTML = posBoxT1.toString();
    /*if (posBallL <= posBoxL + posBoxW) {

      for (let i = 1; i < 10; i++) {
        document.getElementById('ball1').style.left = x1 * i + "px";
        document.getElementById('box2').style.left = x1 * i + "px";
        console.log("x1: ", x1);

        console.log(posBallT);
        console.log(posBallL);
        console.log(posBoxL);




      }

    }*/
    /*if (posBallL >= posBoxL1) {
      document.getElementById('L').innerHTML = posBallT.toString();

      document.getElementById('BL').innerHTML = posBoxT1.toString();
      for (let i = 1; i < 10; i++) {
        document.getElementById('ball1').style.top = y1 * i + "px";
      }
    }*/






    /* moveTop(x1, y1);
     function moveTop(x1, y1) {
       // if (posBallL >= posBoxL1 && posBallT >= posBoxT1 && posBallT + posBallH <= posBoxT1 + posBoxH1) {
       if (posBallL >= posBoxL1) {
         document.getElementById('L').innerHTML = posBallT.toString();
 
         document.getElementById('BL').innerHTML = posBoxT1.toString();
         for (let i = 1; i < 10; i++) {
           if (posBallT > posBoxT1 + posBoxH1) {
             document.getElementById('ball1').style.top = add.toString() + "px";
           }
 
           document.getElementById('ball1').style.top = y1 * i + "px";
         }
       }
     }*/



  }
  changePage() {
    document.getElementById("btnChangePage").innerHTML = "First Example"
    document.getElementById('page1').style.display = "block";
    document.getElementById('instruction').style.display = "none";
  }

}
paper.install(window);
var bluePen, blackCloud, redPen, greenPen, blackPen, yellowPen, orangePen, eraser;

window.onload = function(){
  paper.setup('myCanvas');
  
  var path;
  function onMouseDown(event){
  path = new Path();
  path.strokeColor = 'black';
  path.add(event.point);
  }
  //eraser
  circle = new Tool();
  circle.onMouseDown = onMouseDown;
  
  circle.onMouseDrag = function(event){
    path.strokeWidth = "20";
    path.strokeColor = "white";
    path.add(event.point);
  };
 
  //blue pen
 bluePen = new Tool();
  bluePen.onMouseDown = onMouseDown;
  
  bluePen.onMouseDrag = function(event) {
  path.strokeColor = 'blue';
  path.add(event.point);
  };
  

  //red Lines
  redPen = new Tool();
  redPen.onMouseDown = onMouseDown;
  
  redPen.onMouseDrag = function(event){
  path.strokeColor = 'red';  
  path.add(event.point);
  };
  
  //green lines
  greenPen = new Tool();
  greenPen.onMouseDown = onMouseDown;
  
  greenPen.onMouseDrag = function(event){
  path.strokeColor = 'green';
  path.add(event.point);
  };
  
  //black Lines
  blackPen = new Tool();
  blackPen.onMouseDown = onMouseDown;
  
  blackPen.onMouseDrag = function(event){
  path.strokeColor = 'black';
  path.add(event.point);
  };
  
  //Yellow Lines
  yellowPen = new Tool();
  yellowPen.onMouseDown = onMouseDown;
  
  yellowPen.onMouseDrag = function(event){
  path.strokeColor = 'yellow';
  path.add(event.point);
  };
  
  //Orange pen
  orangePen = new Tool();
  orangePen.onMouseDown = onMouseDown;
  
  orangePen.onMouseDrag = function(event){
  path.strokeColor = 'orange';
  path.add(event.point);
    
  };
  
   //blackCloud
  
  blackCloud = new Tool();
  blackCloud.minDistance = 20;
  blackCloud.onMouseDown = onMouseDown;
  
  blackCloud.onMouseDrag = function(event) {
  path.arcTo(event.point);
  };
  
  //blueCloud
  blueCloud = new Tool();
  blueCloud.minDistance = 20;
  blueCloud.onMouseDown = onMouseDown;
  
  blueCloud.onMouseDrag = function(event) {
    path.strokeColor = "pink";
  path.arcTo(event.point);
  };
   
};
var counter = document.getElementById('counter').getContext('2d');
var no = 0; // Starting Point
var pointToFill = 4.72; //Point from where you want to fill the circle
var cw =counter.canvas.width;
var ch =counter.canvas.height;
var diff;

// function fillCounter(){
//     diff = ((no/100) * Math.PI*2*10);
    
//     counter.clearRect(0,0,cw,ch); // Clear canvas time when funtion is call

//     counter.lineWidth =15; //size of stro
    
//     counter.fillStyle = '#fff';

//     counter.strokeStyle = '#F5E0A9';

//     counter.textAlign ='center';

//     counter.font = "25px monospace";
    
//     counter.fillText(no+'%',100,110);

//     counter.beginPath();
//     counter.arc(100,100,90, pointTofill , diff / 10 + pointToFill);

//     counter.stroke();

//     if(no >= 80)
//     {
//         clearTimeout(fill); //fill is a variable that call the function fillcounter()
//     }
//     no++;
// };
// fillCounter();


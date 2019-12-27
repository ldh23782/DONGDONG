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




<script>
    // const canvas = document.querySelector('#circle');
    const pfGage = document.querySelectorAll('.pf_gage');
    const gageRel = [];
    // const pfGage = $('.pf_gage');

    let n = 50;
    // console.log(pfGage);
    for(let i=0; i<pfGage.length; i++){
        pfGage[i].innerHTML = '<canvas width="300" height="300"></canvas>';
        gageRel[i] =  pfGage[i].getAttribute('data-rel');
    }

    const myGage = function (canvas, n){
        canvas.style = "transform:rotate(-90deg)";
        const context = canvas.getContext('2d');
        const x = canvas.width  / 2;
        const y = canvas.height / 2;
        const ra = 100;

         // 시작값 
        const st = 2 * Math.PI;
        const startAngle = st;

        // 실제 값
        let endAngle = function(n){
            if(n == 100){ n=0; }else if( n == 0) { n=100 }
            let myper = 3.6 * n;
            let rel = st * (myper / 360 );    // 45도당 : 0.5 씩 처리
            return rel;
        };
        endAngle(50);

        let counterClockwis =false;
        context.beginPath();
        context.arc(x, y, ra, startAngle, endAngle, counterClockwis);
        context.lineWidth = 25;
        context.strokeStyle = '#333';
        context.stroke();

        
        // let k=0, go;
        // const letsGo = (function(){
        //     go = setInterval(function(){
        //         k++;
        //         if(k < n){ endAngle(n); 
        //             context.arc(x, y, ra, startAngle, endAngle, counterClockwis);
        //         }else{ clearInterval(go); }
        //         console.log(endAngle);
        //     },100);
        // })();
        
    };
    
    let canvas;
    for(let i=0; i<pfGage.length; i++){
        const canvas =  pfGage[i].childNodes[0];
        myGage(canvas, gageRel[i]);
    // console.log(canvas)
    }
    

</script>
let   doSound1  = new Audio();
doSound1.src =   "./notes/316901__jaz_the_man_2__do-octave.wav" ;
let   reSound1  = new Audio();
reSound1.src =   "./notes/316908__jaz_the_man_2__re.wav" ;
let   miSound1  = new Audio();
miSound1.src =   "./notes/316906__jaz_the_man_2__mi.wav" ;
let   faSound1  = new Audio();
faSound1.src =   "./notes/316904__jaz_the_man_2__fa.wav" ;
let   soSound1  = new Audio();
soSound1.src =   "./notes/316912__jaz_the_man_2__sol.wav" ;
let   laSound1  = new Audio();
laSound1.src =   "./notes/316902__jaz_the_man_2__la.wav" ;
let   tiSound1  = new Audio();
tiSound1.src =   "./notes/316913__jaz_the_man_2__si.wav" ;

let   doSound2  = new Audio();
doSound2.src =   "./notes/316899__jaz_the_man_2__do-stretched.wav" ;
let   reSound2  = new Audio();
reSound2.src =   "./notes/316909__jaz_the_man_2__re-stretched.wav" ;
let   miSound2  = new Audio();
miSound2.src =   "./notes/316907__jaz_the_man_2__mi-stretched.wav" ;
let   faSound2  = new Audio();
faSound2.src =   "./notes/316905__jaz_the_man_2__fa-stretched.wav" ;
let   soSound2  = new Audio();
soSound2.src =   "./notes/316911__jaz_the_man_2__sol-stretched.wav" ;
let   laSound2  = new Audio();
laSound2.src =   "./notes/316903__jaz_the_man_2__la-stretched.wav" ;
let   tiSound2  = new Audio();
tiSound2.src =   "./notes/316910__jaz_the_man_2__si-stretched.wav" ;

let   doSound3  = new Audio();
doSound3.src =   "./notes/d6.mp3" ;
let   reSound3  = new Audio();
reSound3.src =   "./notes/re.mp3" ;
let   miSound3  = new Audio();
miSound3.src =   "./notes/mi.mp3" ;
let   faSound3  = new Audio();
faSound3.src =   "./notes/f6.mp3" ;
let   soSound3  = new Audio();
soSound3.src =   "./notes/sol.mp3" ;
let   laSound3  = new Audio();
laSound3.src =   "./notes/la.mp3" ;
let   tiSound3  = new Audio();
tiSound3.src =   "./notes/si.mp3" ;

eachNode[1].addEventListener("keydown",(letter)=>{
      if(letter.keyCode===68){
        doSound1.play(); 
        console.log("just checking")
      }
})

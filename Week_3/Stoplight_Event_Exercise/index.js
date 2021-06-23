let stop = document.getElementById('stopButton');
let slow = document.getElementById('slowButton');
let go = document.getElementById('goButton');

let onStop = () => {
  let stopLight = document.getElementById('stopLight');

  if (stopLight.classList.contains('stop')) {
    stopLight.classList.remove('stop');
  } else {
    stopLight.classList.add('stop');
  }
}

let onSlow = () => {
  let slowLight = document.getElementById('slowLight');

  if (slowLight.classList.contains('slow')) {
    slowLight.classList.remove('slow');
  } else {
    slowLight.classList.add('slow');
  }
}

let onGo = () => {
  let goLight = document.getElementById('goLight');

  if (goLight.classList.contains('go')) {
    goLight.classList.remove('go');
  } else {
    goLight.classList.add('go');
  }
}

let onStopHover = () => {
  console.log('Entered Stop Button');
  stop.classList.remove('button');
  stop.classList.add('buttonHover');
}

let onSlowHover = () => {
  console.log('Entered Slow Button');
  slow.classList.remove('button');
  slow.classList.add('buttonHover');
}

let onGoHover = () => {
  console.log('Entered Go Button');
  go.classList.remove('button');
  go.classList.add('buttonHover');
}

let onStopLeave = () => {
  console.log('Left Stop Button');
  stop.classList.remove('buttonHover');
  stop.classList.add('button');
}

let onSlowLeave = () => {
  console.log('Left Slow Button');
  slow.classList.remove('buttonHover');
  slow.classList.add('button');
}

let onGoLeave = () => {
  console.log('Left Go Button');
  go.classList.remove('buttonHover');
  go.classList.add('button');
}

controls.addEventListener('click', function(e){
  if(e.target.id === "stopButton")
    if(!stopLight.classList.contains("stop"))
      console.log("red bulb off")
    else
      console.log("red bulb on")
  if(e.target.id === "slowButton")
    if(!slowLight.classList.contains("slow"))
      console.log("yellow bulb off")
    else
      console.log("yellow bulb on")
  if(e.target.id === "goButton")
    if(!goLight.classList.contains("go"))
      console.log("green bulb off")
    else
      console.log("green bulb on")
});

stop.addEventListener('click', onStop);
slow.addEventListener('click', onSlow);
go.addEventListener('click', onGo);

stop.addEventListener('mouseenter', onStopHover);
slow.addEventListener('mouseenter', onSlowHover);
go.addEventListener('mouseenter', onGoHover);

stop.addEventListener('mouseleave', onStopLeave);
slow.addEventListener('mouseleave', onSlowLeave);
go.addEventListener('mouseleave', onGoLeave);
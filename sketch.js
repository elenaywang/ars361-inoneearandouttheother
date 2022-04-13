// --------VARIABLES-----------

let mic;                   // for audio
let amps = [];    // stores sound amplitude at every x value in the screen
var capture, tracker;      // for face tracking
var person;                // person image
var neutral, smile, surprised,
    slight_frown, small_frown, big_frown, sad_eyebrows;        // facial expression images



// --------FUNCTIONS-----------

function preload() {
  person = loadImage("person-500px.gif");
  neutral = loadImage("neutral-mouth.png");
  smile = loadImage("smile.png");
  surprised = loadImage("surprised-face.png");
  slight_frown = loadImage("slight-frown.png");
  small_frown = loadImage("small-frown.png");
  big_frown = loadImage("big-frown.png");
  sad_eyebrows = loadImage("sad-eyebrows.png");
} // ~~END of preload()~~



function setup() {
  createCanvas(710, 500);

  // --FOR AUDIO--
  
  mic = new p5.AudioIn();
  mic.start();
  
  // populating the array for each x value in the screen
  for (let i = 0; i < width; i++) {
    amps[i] = 0;      // initially sets the amplitude to 0
  }
  
  console.log("amps length: " + amps.length);
  
  
  // --FOR FACE TRACKING--
  
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
} //~~END of setup()~~



function draw() {
  // background(28,221,189);    // aquamarine color
  background(220);    // gray color
  
  
  
  // --FOR AUDIO--
  
  // get the amplitude reading
  micLevel = mic.getLevel();
  
  // update the amplitude values at each x
  for (let i = amps.length-1; i > 0; i--) {
    amps[i] = amps[i-1];
  }
  
  // add the newest amplitude
  amps[0] = map(micLevel,0,1,0,height/2); 
  
  
  
  // --FOR FACE TRACKING--
  var positions = tracker.getCurrentPosition(); // array that stores face positions if a face is present
  var isListening;
  var emotion;
  if (micLevel > 0.3) {
    // computer person is startled if too loud
    isListening = false;
    emotion = "surprised";
  } else if (positions.length > 0) {    
    // face is present
    print("face");
    // computer person is listening only if not too quiet
    if ((micLevel > 0.001) && (micLevel < 0.003)) {
      // confused if user is whispering
      isListening = false;
      emotion = "confused";
    } else {
      // happy if user is speaking at normal volume or not speaking
      isListening = true;
      emotion = "happy";
    }
  } else {
    // computer person is not listening if no face
    print("no face")
    isListening = false;
    emotion = "neutral";
  }
  
  
  
  // --SCROLLING AMPLITUDE VIZ--

  // draw the waveform
  strokeWeight(4);
  // stroke(28,118,221);    // royal blue color
  stroke("darkorchid");    // purple color
  for (let i = 0; i < amps.length; i++) {
    
    // into right ear
    if (i < width/2-150) { 
      // sound shrinks into ear
      let sineShrink = Math.sin(0.008*i + 318.8);
      line(width-i, height/2+amps[i]*sineShrink, width-i, height/2-amps[i]*sineShrink);
    } 
    
    // behind person image
    else if (i < width/2+150) { 
      // no lines displayed behind person image
    } 
    
    // out of left ear if not listening
    else if (!isListening) {
      // sound comes out the other ear at a more subdued volume
      let sineShrink = 0.4 * Math.sin(0.008*i + 99.9); 
      line(width-i, height/2+amps[i]*sineShrink, width-i, height/2-amps[i]*sineShrink);
    }
  } // END of scrolling amplitude for loop
  
  
  // --PERSON IMAGE--
  image(person, width/2-250, 0, 500, 500);
  
  
  // --FACIAL EXPRESSIONS--
  if (emotion == "surprised") {
    image(surprised, width/2-250, 0, 500, 500);
  } else if (emotion == "confused") {
    image(sad_eyebrows, width/2-250, 0, 500, 500);
    image(slight_frown, width/2-250, 0, 500, 500);
  } else if (emotion == "happy") {
    image(smile, width/2-250, 0, 500, 500);
  } else if (emotion == "neutral") {
    image(neutral, width/2-250, 0, 500, 500);
  }
} //~~END of draw()~~

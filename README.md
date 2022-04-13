# ars361-inoneearandouttheother

*Title of project:* in one ear and out the other    
*Contributor(s):* Elena Wang    
*Course:* ARS 361 Interactive Digital Multimedia, Spring 2022      
*Instructor:* John Slepian      
*Timeline:* April 2022-present      

*Link to sketch on the p5.js editor website:* https://editor.p5js.org/ewang88/sketches/wk0jw1WFi    
(NOTE: you will need to grant microphone and camera access for audio input and face tracking to work.)


### *Overview:*    

This is a project I created for the ARS 361 Interactive Digital Multimedia class at Smith College. The purpose of this interactive art piece is to simplistically visualize the metaphor of when what people say to you "goes in one ear and out the other."


### *What this project does:*    

The program takes audio input from the microphone and records and displays the amplitude in real time. These amplitude recordings scroll along the screen from right to left through the ears of a human figure. The program also takes video input from the camera to track your face.

If you do not look at the figure or speak too loudly or too softly, the figure will react with appropriate facial expressions and the sound will go in one ear and out the other. If you look at the figure while speaking in a normal volume, the figure will smile and the sound will not go out the other ear because it is listening.


### *What I used:*    

The images were created in Adobe Photoshop. The code was written in JavaScript. I used the p5.sound library for working with audio and the clmtrackr library for face tracking.

*Resources:*    
1. Using p5.sound to visualize sound: https://editor.p5js.org/p5/sketches/Sound:_FFT_Spectrum
2. Using the getLevel() function: https://editor.p5js.org/jsia/sketches/GUdEBASRN
3. Working with arrays: Getting Started with p5.js, Chapter 11, example 11-8
4. Face tracking: https://editor.p5js.org/jsia/sketches/TJKRaNdOE


### *Files:*

* README.md: contains information about the project
* big-frown.png: png image file of a big frowning mouth to depict a very sad expression (compare to small-frown.png and slight-frown.png)
* clmtrackr.min.js: contains the clmtrackr library
* index.html: contains the HTML code
* neutral-mouth.png: png image file of a flat mouth to depict a neutral expression
* p5.js: contains the p5.js library
* p5.sound.min.js: contains the p5.sound library
* person-500px.gif: animated gif file for the blinking person 
* sad-eyebrows.png: png image file of eyebrows to depict a sad or concerned expression
* sketch.js: contains the JavaScript code and the majority of my work on this project
* slight-frown.png: png image file of a slight frowning mouth to depict a concerned or confused expression (compare to big-frown.png and small-frown.png)
* small-frown.png: png image file of a small frowning mouth to depict a sad expression (compare to big-frown.png and slight-frown.png)
* smile.png: png image file of a smile to depict a happy or content expression
* style.css: contains the CSS code
* surprised-face.png: png image file of an open mouth and raised eyebrows to depict a surprised expression
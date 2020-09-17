# code~words week 7.

## Paper Prototype
In class in week 6 we went through what a paper prototype is and how we'll be using it for our major project. We were asked to create a simple paper prototype of a arcade game, which allows us to understand its basic funtions. With my group I made a prototype for Tetris, creating the basic shapes and layout of the game.

<img src="Paper1.jpg">

## Major Assignment Paper Prototype
My idea for my major assignment is to seperate my text into its individual words and randomise their location on the canvas but have them each connected with a line in order to create a "web" of lines around the canvas. I would either load in the words one by one which would make it easier to read or have them all load in at the start. I aim to have these individual words floating around the canvas bouncing off of the walls. This "web" is in reference to the *"new webs of potential interaction between atomized individuals" created in the age of information"*. This visual web of lines also is in reference to the *World Wide Web*, a new technology that has lead to the compression of space and time as mentioned by Nicola Green.

In reference to literature, the layout of the typography challenges our usual way of reading (left to right) and makes us rely on the connecting line to give a  meaning to the words. I intend to have a feature that will allow the user to click and drag the words around the canvas to form their own webs.

To make it a bit more interesting and challenging I also have the idea to place them in a 3D space and rotate around the words. In this version they would not move.

<img src="Paper2.jpg">
<img src="Prototype.gif">

For the prototype I cut out individual words which I placed randomly on the page, then with pen I connected them in order to create a readable sentence. At the bottom of the canvas I have three buttons that will: go to the previous phrase, pause the animation, and go to the next phrase. The text will be split into smaller phrases because it would be too difficult to read all the words at once. In the second versions I have each word connected to multiple words instead of just one, this the sentence line in bold.

<img src="Paper3.jpg">


Following a similar idea, this version connects the words through a lined web. This version however will remain static with each word placed along the perimeter of a square. For this each word cannot be placed next to the next or previous word in the sentence or else the line will not be visiable. It would also include the buttons of the previous prototypes. The words would either load one at a time accompanied by a sound or all at once. In order to incorporate a 3D aspect to this version the words once loaded in the square shape could randomise their locations of the z axis, then would rotate around revealing the space between words.

<img src="Square_Web.jpg">

## Pseudocode
In the second half of the class in week 6 we learnt about pseudocode and how we will use it for our major project. Pseudocode is an informal high-level description of a computer program or algorithm. It is written in symbolic code which must be translated into a programming language before it can be executed. Using this method we were made to describe an activity we might do everyday, I wrote instuctions on how to cook a hashbrown.

``` 
START
IF burner is off
  THEN turn burner on and place pan on burner

IF pan is hot
  THEN pour oil in pan

IF oil is hot
  THEN place hash-brown in pan

WHILE hash-brown in pan
  CHECK if underneath is cooked
  FLIP

WHILE hash-brown in pan
  CHECK if top is cooked

ENDIF 
```
For my main assignment I have also written some basic pseudocode.

```
START

PLAY music

DISPLAY words randomly on canvas
CONNECT words in sentence order

WHILE word inside canvas
  move around
  
IF word hits wall or ceiling
  THEN bounce word back
 
IF word is dragged
  THEN play sound
  THEN move around word depending of mouse X and Y
 
FUNCTION pause
  IF pause button pressed
  THEN pause animation

FUNCTION next
  IF next button is pressed
  THEN display next sentence
  
FUNCTION previous
  IF previous button is pressed
  THEN display previous sentence
  
ENDIF
```
<img src="code_slide.jpeg">

Here's a more refined pseudo code. I've come up with another idea to add a slider which compresses or expands the words outwards, this connects with the texts main theme of the compression of time and space.

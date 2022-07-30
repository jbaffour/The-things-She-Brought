// % pwd
//jamesbaffour@10-21-44-9 ~ % cd Desktop
//jamesbaffour@10-21-44-9 Desktop % pwd
//jamesbaffour@10-21-44-9 Desktop % python -m SimpleHTTPServer



let classifier;
// Model URL
const imageModelURL = './tm/';

// webcamVideo
let video;
let flippedVideo;

let label = "";
let helenaheading;
let helenaheadingisshowing = false;
let helenapic;
let helenapicisshowing = false;
let abbypic;
let abbypicisshowing = false;
let adompic;
let adompicisshowing = false;
let eversheen;
let eversheenisshowing = false;
let flour;
let flourisshowing = false;
let sugar;
let sugarisshowing = false;
let butter;
let marching;
let bx;
let bofrot;
let bofrottext;
let bxtext;
let eddy;
let eddypic;
let hha;
let hhapic;
let money;
let intro;
let intropic;





function preload() {
  // eslint-disable-next-line prefer-template
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  //template = loadImage ('template2.png');
  adompic = createImg('Helena+Adom.jpeg', "picture of helena and baby");
  abbypic = createImg('Abigail.jpeg', "picture of helena and baby");
  helenapic = createImg('helenamarching.jpg', "pic of helenamarching");
  bx = createImg('Bronx-Terminal-Market.jpeg', "pic of old bronx terminal");
  bofrot = createImg('Bofrot.png', "pic of bofrot pastries");
  eddypic = createImg('eddy.jpeg', "picture of cute adorable baby")
  hhapic = createImg("Helenagointowork.png", "Picture of Helena going to work");
  money = createImg("money.png", "picture of cocoabutter with money stack inside");
  intropic = createImg ("hintro.jpeg", "Picture of young Helena");
  outropic = createImg ("adomgraduating.jpeg", "picture of James and Helena at James' graduation")

}


function setup() {

//template.resize(320, 240);

  ///canvas + webcam
  cnv = createCanvas(640, 480);
  cnv.parent('container');
  video = createCapture(VIDEO);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  cnv.style ('display', 'block');
  video.size(640, 480);
  video.hide();
  ///canvas + webcam



//capture button
 stopbutton = createButton('stop capture');
 stopbutton.position(0, 0);
 stopbutton.style('color', 'red')
 stopbutton.mousePressed(hidecap);
///hiding capture
 function hidecap() {
   video.stop();
   cnv.hide();
 }
 ///hiding capture



///intro

  intro = select ("#intro");
  intro.position(74, 100);
  intro.hide();
  intropic.size(400, 228);
  intropic.position(0, 0);
  intropic.hide();

//text formation picture of family
helenaheading = select ("#helenaheading");
helenaheading.position(510, 150);
helenaheading.hide();
//text fromation gainbox

//abbypic
abbypic.position(74, 280);
abbypic.hide();
abbypic.size(293, 425);
abby = select ("#abby");
abby.position(74, 760);
abby.hide();
ab1 = select ('#ab1');
ab1.parent(abby);


//adom pic
adompic.position(1362, 280);
adompic.hide();
adompic.size(293, 425);
adom = select ("#adom");
adom.position(1362, 760);
adom.hide();
ad1 = select ('#ad1');
ad1.parent(adom);
//adom pic

///eversheen cocoabutter
butter = select('#butter');
butter.position(74, 280);
butter.hide();
money.hide();
money.position(1300,280);
/// eversheen cocoabutter

///helenapic + flour
helenapic.position(1362, 280);
helenapic.hide();
helenapic.size(293, 400);
marching = select ("#marching");
marching.position(1362, 700);
marching.hide();
sugar = select ("#sugar");
sugar.position(74, 280);
sugar.hide();
// helenapic

///floursac + bofrot
flour = select ("#flour");
flour.hide();
flour.position(74, 280);

bofrot.position (1300,280);
bofrot.size(396, 297);
bofrot.hide();
bofrottext = select ('#bofrottext');
bofrottext.position(1300, 580);
bofrottext.hide();


bx.position(1300, 640);
bx.hide();
bxtext = select ("#bxtext");
bxtext.position(1300, 940);
bxtext.hide();
///flour + bofrot


//eddypic + text
eddy = select ("#eddy");
eddy.hide();
eddy.position(74, 300);
eddypic.size(293, 366.76);
eddypic.hide();
eddypic.position(1362, 280);
/// eddy

///hhha
hha = select ("#hha");
hha.hide();
hha.position(74, 300);
hhapic.size(293, 425);
hhapic.hide();
hhapic.position(1362, 280);
/////


////intro
intro = select ("#intro");
intro.hide();
intro.position(74, 280);
intropic.size(293, 366.76);
intropic.position(1362, 280);
intropic.hide();
////


////outro
outropic.size(293, 400);
outro = select ("#outro");
outropic.position(1362, 280);
outropic.hide();
outro = select ("#outro");
outro.position(74, 280);
outro.hide();
//




  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}


function draw() {
  //clear();
    background(255);
    image(flippedVideo, 0, 0, 640, 480);
    filter(INVERT);
    //image(template, 0, 0);
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER);
    text(label, width / 2, height - 62 );

// outputs
if (label == "background") {
  helenaheading.hide();
  abby.hide();
  adom.hide();
  helenaheadingisshowing = false;
  adompic.hide();
  adompicisshowing = false;
  abbypic.hide();
  abbypicisshowing = false;
  butter.hide();
  helenapic.hide();
  marching.hide();
  sugar.hide();
  flour.hide();
  bx.hide();
  bofrot.hide();
  bxtext.hide();
  bofrottext.hide();
  eddy.hide();
  eddypic.hide();
  hha.hide();
  hhapic.hide();
  money.hide();
  intro.hide();
  intropic.hide();
  outro.hide();
  outropic.hide();
} else if (label == "Picture of Helena") {
  intro.show();
  intropic.show();
  helenaheading.hide();
  abby.hide();
  adom.hide();
  adompic.hide();
  abbypic.hide();
  butter.hide();
  helenapic.hide();
  marching.hide();
  sugar.hide();
  flour.hide();
  bx.hide();
  bofrot.hide();
  bxtext.hide();
  bofrottext.hide();
  eddy.hide();
  eddypic.hide();
  hha.hide();
  hhapic.hide();
  money.hide();
  outro.hide();
  outropic.hide();
} else if (label == 'Picture of Family'){
    helenaheading.show();
    abby.show();
    adom.show();
    adompic.show();
    abbypic.show();
    butter.hide();
    helenapic.hide();
    marching.hide();
    sugar.hide();
    flour.hide();
    bx.hide();
    bofrot.hide();
    bxtext.hide();
    bofrottext.hide();
    eddy.hide();
    eddypic.hide();
    hha.hide();
    hhapic.hide();
    money.hide();
    intro.hide();
    intropic.hide();
    outro.hide();
    outropic.hide();
  } else if (label == 'Eversheen Cocoa Butter'){
    butter.show();
    money.show();
    helenapic.hide();
    marching.hide();
    helenaheading.hide();
    abby.hide();
    adom.hide();
    adompic.hide();
    abbypic.hide();
    sugar.hide();
    flour.hide();
    bx.hide();
    bofrot.hide();
    bxtext.hide();
    bofrottext.hide();
    eddy.show();
    eddypic.show();
    hha.hide();
    hhapic.hide();
    eddy.hide();
    eddypic.hide();
    intro.hide();
    intropic.hide();
    outro.hide();
    outropic.hide();
  }else if (label == 'Flour Sack'){
    sugar.show();
    marching.show();
    helenapic.show();
    helenaheading.hide();
    abby.hide();
    adom.hide();
    adompic.hide();
    abbypic.hide();
    flour.hide();
    bx.hide();
    bofrot.hide();
    bxtext.hide();
    bofrottext.hide();
    butter.hide();
    eddy.hide();
    eddypic.hide();
    hha.hide();
    hhapic.hide();
    money.hide();
    intro.hide();
    intropic.hide();
    outro.hide();
    outropic.hide();
}else if (label == 'Sugar Box'){
  flour.show();
  bx.show();
  bofrot.show();
  bxtext.show();
  bofrottext.show();
  sugar.hide();
  marching.hide();
  helenapic.hide();
  helenaheading.hide();
  abby.hide();
  adom.hide();
  adompic.hide();
  abbypic.hide();
  butter.hide();
  eddy.hide();
  eddypic.hide();
  hha.hide();
  hhapic.hide();
  money.hide();
  intro.hide();
  intropic.hide();
  outro.hide();
  outropic.hide();
}else if (label == 'Baby Food'){
  eddy.show();
  eddypic.show();
  flour.hide();
  bx.hide();
  bofrot.hide();
  bxtext.hide();
  bofrottext.hide();
  sugar.hide();
  marching.hide();
  helenapic.hide();
  helenaheading.hide();
  abby.hide();
  adom.hide();
  adompic.hide();
  abbypic.hide();
  butter.hide();
  hha.hide();
  hhapic.hide();
  money.hide();
  intro.hide();
  intropic.hide();
  outro.hide();
  outropic.hide();
}else if (label == 'Box of Masks'){
  hha.show();
  hhapic.show();
  eddy.hide();
  eddypic.hide();
  flour.hide();
  bx.hide();
  bofrot.hide();
  bxtext.hide();
  bofrottext.hide();
  sugar.hide();
  marching.hide();
  helenapic.hide();
  helenaheading.hide();
  abby.hide();
  adom.hide();
  adompic.hide();
  abbypic.hide();
  butter.hide();
  money.hide();
  intro.hide();
  intropic.hide();
  outro.hide();
  outropic.hide();
}else if (label == 'Intro'){
  intro.show();
  intropic.show();
  hha.hide();
  hhapic.hide();
  eddy.hide();
  eddypic.hide();
  flour.hide();
  bx.hide();
  bofrot.hide();
  bxtext.hide();
  bofrottext.hide();
  sugar.hide();
  marching.hide();
  helenapic.hide();
  helenaheading.hide();
  abby.hide();
  adom.hide();
  adompic.hide();
  abbypic.hide();
  butter.hide();
  money.hide();
  outro.hide();
  outropic.hide();
}else if (label == 'Stole'){
  outro.show();
  outropic.show();
  intro.show();
  intropic.show();
  hha.hide();
  hhapic.hide();
  eddy.hide();
  eddypic.hide();
  flour.hide();
  bx.hide();
  bofrot.hide();
  bxtext.hide();
  bofrottext.hide();
  sugar.hide();
  marching.hide();
  helenapic.hide();
  helenaheading.hide();
  abby.hide();
  adom.hide();
  adompic.hide();
  abbypic.hide();
  butter.hide();
  money.hide();
  intro.hide();
  intropic.hide();
}

}

function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}

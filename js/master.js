
// Tips: Clicking on the button the font, font size, and color of the paragraph text will be changed.
function change_text_style()
{
//font styles added by JS:
 text.style.fontSize = "14pt";
 text.style.fontFamily = "Comic Sans MS";
 text.style.color = "green";
 // text.style.background = "rgb(255,0,0)";
}

function reset_text_style(){
  text.style.fontSize = "";
  text.style.fontFamily = "";
  text.style.color = "";
}
// end of dom with StyleSheet

// start of dom with getting information from form with javascript

function getFormvalue()
{
  // console.log("i am seeing this function")
  var x=document.getElementById("form1");
  let a = ""
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {
      // console.log(x.elements[i].value);
      // a.push(x.elements[i].value)
      a+=(x.elements[i].value+" ")
     }
   }
   alert(a +"i am happy to hear form you")
}

// end of javascript getting information from form


// seeting background color of text

function set_background() {


  text2.style.background = "rgb(255,0,0)";

}


function getAttributes()
{
 var u = document.getElementById("w3r").href;
 alert('The value of the href attribute of the link is : '+u);
 var v = document.getElementById("w3r").hreflang;
 alert('The value of the hreflang attribute of the link is : '+v);
 var w = document.getElementById("w3r").rel;
  alert('The value of the rel attribute of the link is : '+w);
 var x = document.getElementById("w3r").target;
  alert('The value of the taget attribute of the link is : '+x);
 var y = document.getElementById("w3r").type;
  alert('The value of the type attribute of the link is : '+y);
}

function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}


function changeContent()
{
rn = window.prompt("Input the Row number(0,1,2)", "0");
cn = window.prompt("Input the Column number(0,1)","0");
content = window.prompt("Input the Cell content");
var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}


function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);

 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c;
    }
   }
}



function removecolor()
{
var x=document.getElementById("colorSelect");
x.remove(x.selectedIndex);
}




function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 }
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;





function display_random_image()
{
     var theImages = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }

// create random image number
  function getRandomInt(min,max)
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;

imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }

// 0 is first image,   preBuffer.length - 1) is  last image

var newImage = getRandomInt(0, preBuffer.length - 1);

// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image
document.body.appendChild(newImage);
}



//First create a list of all bold items
var bold_Items;
window.onload = getBold_items();

// Collect all <strong> tags
function getBold_items()
{
  bold_Items = document.getElementsByTagName('strong');
}
// iterate all bold tags and change color
function highlight()
{
   for (var i=0; i<bold_Items.length; i++)
   {
    bold_Items[i].style.color = "green";
    }
}

// On mouse out highlighted words become black
function return_normal()
{
  for (var i=0; i<bold_Items.length; i++)
  {
       bold_Items[i].style.color = "black";
  }
}








function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;

// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + w + " â€¢ Height: " + h + "</h1>";
}

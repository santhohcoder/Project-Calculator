var createdivision=(idname,classname)=>{
var division=document.createElement("div");
division.id=idname;
division.setAttribute("class",classname);
return division;
}
var createbutton=(textcontent,idname,classname)=>{
    let btn=document.createElement("button");
    btn.textContent=textcontent;
    btn.id=idname;
    btn.setAttribute("class",classname);
    return btn;
}
  
var number=(numbers)=>{
    return ()=>{
        console.log("success");
        document.getElementById("displaybox").value+=numbers; 
    }

};
var equalfunction=(numbers)=>{
    return ()=>{
        var temp= document.getElementById("displaybox").value=eval(document.getElementById("displaybox").value);
    }

}
var clearfunction=()=>{
    // return ()=>{
        document.getElementById("displaybox").value="";
    // }

}
var calculate=(temp)=>{

}

let mainsection=document.getElementById("main");
mainsection.append(createdivision("calculator","calc"));

let calculator=document.getElementById("calculator");
calculator.append(createdivision("first","line1"));


// first paramater points to id name and second one to classname


calculator.append(createdivision("buttondivision","butt"));

let buttondivision=document.getElementById("buttondivision");
buttondivision.append(createdivision("second","line2"));
buttondivision.append( createdivision("third","line3"));
buttondivision.append(createdivision("fourth","line4"));
buttondivision.append( createdivision("fivth","line5"));
buttondivision.append(createdivision("sixth","line6"));

{
var divone=document.getElementById("first");
var textbox=document.createElement("input");
textbox.setAttribute("type","text");
textbox.setAttribute("id","displaybox");
textbox.setAttribute("class","outputbox");
textbox.setAttribute("placeholder","0");
divone.append(textbox);

var divtwo=document.getElementById("second");
// first one the content second one idname thirdone classname
divtwo.append(createbutton("c","clear","buttons"));
divtwo.append(createbutton("<--","arrow","buttons"));
divtwo.append(createbutton(".","dot","buttons"));
divtwo.append(createbutton("x","multiply","buttons"));

var divthree=document.getElementById("third");
divthree.append(createbutton("7","seven","buttons"));
divthree.append(createbutton("8","eight","buttons"));
divthree.append(createbutton("9","nine","buttons"));
divthree.append(createbutton("/","division","buttons"));


var divfour=document.getElementById("fourth");
divfour.append(createbutton("4","four","buttons"));
divfour.append(createbutton("5","five","buttons"));
divfour.append(createbutton("6","six","buttons"));
divfour.append(createbutton("-","minus","buttons"));

var divfive=document.getElementById("fivth");
divfive.append(createbutton("1","one","buttons"));
divfive.append(createbutton("2","two","buttons"));
divfive.append(createbutton("3","three","buttons"));
divfive.append(createbutton("+","plus","buttons"));

var divsix=document.getElementById("sixth");
divsix.append(createbutton("0","zero","buttons"));
divsix.append(createbutton("00","doublezero","buttons"));
divsix.append(createbutton("=","equalto","buttons"));
}
{
var clearbtn=document.getElementById("clear");
var arrowbtn=document.getElementById("arrow");
var dotbtn=document.getElementById("dot");
var multiplybtn=document.getElementById("multiply");
var sevenbtn=document.getElementById("seven");
var sixbtn=document.getElementById("six");
var fivebtn=document.getElementById("five");
var eightbtn=document.getElementById("eight");
var ninebtn=document.getElementById("nine");
var divisionbtn=document.getElementById("division");
var fourbtn=document.getElementById("four");
var minusbtn=document.getElementById("minus");
var onebtn=document.getElementById("one");
var twobtn=document.getElementById("two");
var threebtn=document.getElementById("three");
var plusbtn=document.getElementById("plus");
var zerobtn=document.getElementById("zero");
var doublezerobtn=document.getElementById("doublezero");
var equaltobtn=document.getElementById("equalto");

var textbox=document.getElementById("displaybox");
}

sevenbtn.addEventListener("click",number("7"));
eightbtn.addEventListener("click",number("8"));
ninebtn.addEventListener("click",number("9"));
fourbtn.addEventListener("click",number("4"));
fivebtn.addEventListener("click",number("5"));
sixbtn.addEventListener("click",number("6"));
onebtn.addEventListener("click",number("1"));
twobtn.addEventListener("click",number("2"));
threebtn.addEventListener("click",number("3"));
zerobtn.addEventListener("click",number("0"));
doublezerobtn.addEventListener("click",number("00"));
dotbtn.addEventListener("click",number("."));

// dotbtn.addEventListener("click",number("."));

multiplybtn.addEventListener("click",number("*"));
plusbtn.addEventListener("click",number("+"));
divisionbtn.addEventListener("click",number("/"));
minusbtn.addEventListener("click",number("-"));


equaltobtn.addEventListener("click",equalfunction("="));


clearbtn.addEventListener("click",clearfunction);




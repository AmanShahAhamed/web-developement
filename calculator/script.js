
//taking all element by id
var clear=document.querySelector('#clear');
var sign=document.querySelector('#sign');
var per=document.querySelector('#percentage');
var divide=document.querySelector('#divide');
var seven=document.querySelector('#seven');
var eight=document.querySelector('#eight');
var nine=document.querySelector('#nine');
var mul=document.querySelector('#multiply');
var four=document.querySelector('#four');
var five=document.querySelector('#five');
var six=document.querySelector('#six');
var sub=document.querySelector('#substraction');
var one=document.querySelector('#one');
var two=document.querySelector('#two');
var three=document.querySelector('#three');
var add=document.querySelector('#addition');
var zero=document.querySelector('#zero');
var dot=document.querySelector('#dot');
var equal=document.querySelector('#equal')
var ans=document.querySelector('#ans');

var isOperatorTaken=false;
var operator,exp1,exp2;

// clear button
clear.addEventListener('click',function(){
   clear.style.background="rgb(207, 156, 14)";
   ans.innerHTML="0";
   isOperatorTaken=false;
   exp1=""; exp2="";  
});
clear.addEventListener('mouseout',function(){
    clear.style.background="white";
    clear.style.color="black";
})

// one button
one.addEventListener('click',function (){
    one.style.background="rgb(207, 156, 14)";
    if(isOperatorTaken){
       ans.innerHTML="1";
       isOperatorTaken=false;
    }else{
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML="1";
    else
    ans.innerHTML=ans.innerHTML+"1";
    console.log(ans.innerText);
    }
});

one.addEventListener('mouseout',function(){
    one.style.background="white";
    one.style.color="black";
})

//two button
two.addEventListener('click',function(){
    two.style.background="rgb(207, 156, 14)";
    if(isOperatorTaken){
        ans.innerHTML="2";
        isOperatorTaken=false;
    }else{
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML="2";
    else
    ans.innerHTML=ans.innerHTML+"2";
    }
});

two.addEventListener('mouseout',function(){
    two.style.background="white";
    two.style.color="black";
})

//three button
three.addEventListener('click',function(){
    three.style.background="rgb(207, 156, 14)";
    if(isOperatorTaken){
        exp1=ans.innerHTML;
        ans.innerHTML="3";
    }else{
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML="3";
    else
    ans.innerHTML=ans.innerHTML+"3";
    }
});

three.addEventListener('mouseout',function(){
    three.style.background="white";
    three.style.color="black";
})

//four butn
four.addEventListener('click',function(){
    four.style.background="rgb(207, 156, 14)";
    if(isOperatorTaken){
        ans.innerHTML="4";
        isOperatorTaken=false;
    }else{
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML="4";
    else
    ans.innerHTML=ans.innerHTML+"4";
    }
});

four.addEventListener('mouseout',function(){
    four.style.background="white";
    four.style.color="black";
});

//five butn
five.addEventListener('click',function(){
    five.style.background="rgb(207, 156, 14)";
    if(isOperatorTaken){
        ans.innerHTML="2";
        isOperatorTaken=false;
    }else{
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML="5";
    else
    ans.innerHTML=ans.innerHTML+"5";
    }
});

five.addEventListener('mouseout',function(){
    five.style.background="white";
    five.style.color="black";
});

//six butn
six.addEventListener('click',function(){
    six.style.background="rgb(207, 156, 14)";
    if(isOperatorTaken){
        ans.innerHTML="6";
        isOperatorTaken=false;
    }else{
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML="6";
    else
    ans.innerHTML=ans.innerHTML+"6";
    }
});

six.addEventListener('mouseout',function(){
    six.style.background="white";
    six.style.color="black";
});

//seven butn
seven.addEventListener('click',function(){
    seven.style.background="rgb(207, 156, 14)";
    if(isOperatorTaken){
        ans.innerHTML="7";
        isOperatorTaken=false;
    }else{
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML="7";
    else
    ans.innerHTML=ans.innerHTML+"7";
    }
});

seven.addEventListener('mouseout',function(){
    seven.style.background="white";
    seven.style.color="black";
});

//eight butn
eight.addEventListener('click',function(){
    eight.style.background="rgb(207, 156, 14)";
    if(isOperatorTaken){
        ans.innerHTML="2";
        isOperatorTaken=false;
    }else{
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML="8";
    else
    ans.innerHTML=ans.innerHTML+"8";
    }
});

eight.addEventListener('mouseout',function(){
    eight.style.background="white";
    eight.style.color="black";
});

//nine butn
nine.addEventListener('click',function(){
    nine.style.background="rgb(207, 156, 14)";
    if(isOperatorTaken){
        exp1=ans.innerHTML;
        isOperatorTaken=false;
    }else{
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML="9";
    else
    ans.innerHTML=ans.innerHTML+"9";
    }
});

nine.addEventListener('mouseout',function(){
    nine.style.background="white";
    nine.style.color="black";
});

//zero butn
zero.addEventListener('click',function(){
    zero.style.background="rgb(207, 156, 14)";
    if(isOperatorTaken){
        ans.innerHTML="0";
        isOperatorTaken=false;
    }else{
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML="0";
    else
    ans.innerHTML=ans.innerHTML+"0";
    }
});

zero.addEventListener('mouseout',function(){
    zero.style.background="white";
    zero.style.color="black";
});
//dot butn
dot.addEventListener('click',function(){
    dot.style.background="rgb(207, 156, 14)";
    if(ans.innerText.length==1 && ans.innerText[0]=="0")
    ans.innerHTML+=".";
    else{
        if(!ans.innerText.includes(".")){
            ans.innerText+=".";
        }
    }
    
});
dot.addEventListener('mouseout',function(){
    dot.style.background="white";
    dot.style.color="black";
});

//sign
sign.addEventListener('click',function(){
    sign.style.background="rgb(207, 156, 14)";
    if(ans.innerHTML>0) ans.innerHTML="-"+ans.innerHTML;
    else{
        if(ans.innerHTML!='0')
     ans.innerHTML=ans.innerHTML.substring(1,ans.innerHTML.length);
    }
});
sign.addEventListener('mouseout',function(){
    sign.style.background="white";
    sign.style.color="black";
});

//per
per.addEventListener('click',function(){
    per.style.background="rgb(207, 156, 14)";
    if(ans.innerText!='0')
    ans.innerHTML=ans.innerHTML/100;
});
per.addEventListener('mouseout',function(){
    per.style.background="white";
});

//divide
divide.addEventListener('click',function(){
    divide.style.background="gray";
    divide.style.color="#b13d3d";
    isOperatorTaken=true;
    operator="/";
    exp1=ans.innerHTML;
});
divide.addEventListener('mouseout',function(){
    divide.style.background="#b13d3d"
    divide.style.color="white";
})

//mul
mul.addEventListener('click',function(){
    mul.style.background="gray";
    mul.style.color="#b13d3d";
    isOperatorTaken=true;
    operator="*";
    exp1=ans.innerHTML;
   
});
mul.addEventListener('mouseout',function(){
    mul.style.background="#b13d3d"
    mul.style.color="white";
})

//add
add.addEventListener('click',function(){
    add.style.background="gray";
    add.style.color="#b13d3d";
    isOperatorTaken=true;
    operator="+";
    exp1=ans.innerHTML;
});
add.addEventListener('mouseout',function(){
    add.style.background="#b13d3d"
    add.style.color="white";
})

//sub
sub.addEventListener('click',function(){
    sub.style.background="gray";
    sub.style.color="#b13d3d";
    isOperatorTaken=true;
    operator="+";
    exp1=ans.innerHTML;
});
sub.addEventListener('mouseout',function(){
    sub.style.background="#b13d3d"
    sub.style.color="white";
});

//equal
equal.addEventListener('click',function(){
    equal.style.background="gray";
    equal.style.color="#b13d3d";
    if(operator.length!=0 && exp1.length!=0){
        var ansOfExp=eval(exp1+ " "+ operator + " "+ ans.innerHTML);
        ans.innerHTML=ansOfExp;
        isOperatorTaken=true;
        exp1="";operator="";
    }
   
});
equal.addEventListener('mouseout',function(){
    equal.style.background="#b13d3d"
    equal.style.color="white";
});




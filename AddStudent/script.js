$('#header-image').click(function(){
    $('h1').css({
        display:'none'
    });
    $('#header-image').css({
        display:'none'
    });
    $('.content').hide();
    $('.slider').show(500);
});
$('#cross-image').click(function(){
    $('h1').css({
        display:'block'
    })
    $('#header-image').css({
        display:'block'
    })
    $('.content').show();
    $('.slider').hide(500);
})
//inserting data
var n=document.querySelector('#name');
var r=document.querySelector('#rollNo');
var m=document.querySelector('#marks');
document.querySelector('#btn').addEventListener('click',function(){
    console.log('hello');
    if(n.value!='' && r.value!='' && m.marks!=''){
       
       addDocument(n.value,r.value,m.value);
    }else{
        alert("Field can't be empty");
    }
})

function addDocument(name,rollNo,marks){
    let divElement=document.createElement('div');
    let para=document.createElement('p');
    para.innerHTML='Rollno-'+rollNo+','+name+' has scored '+marks+' marks';
    divElement.appendChild(para);
    document.querySelector('.content').appendChild(divElement);
    alert('Data Added sucessfully');
    clearText();
}
function clearText(){
    n.value='';
    m.value='';
    r.value='';
}
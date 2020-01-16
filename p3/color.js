var reset=document.querySelector("#reset");
var modeLength =6;
var colors=colorAssign(modeLength);
var squares=document.querySelectorAll(".square");
var pickedColor=colors[getRandomInt(colors.length)];
var upcol =document.querySelector("#pickedcol");
var h1 = document.querySelector("h1");
var message=document.querySelector("#message");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
upcol.textContent = pickedColor;


reset.addEventListener("click",res);
easy.addEventListener("click",function(){
    rem();
    modeLength=3;
    easy.classList.add("blue");
    hard.classList.remove("blue");
    res();
    add();

});
hard.addEventListener("click",function(){
    rem();
    modeLength=6;
    easy.classList.remove("blue");
    hard.classList.add("blue");
    res();
    add();
});
for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",check);
}


function changeCol(color)
{
    for(var j=0; j<modeLength; j++)
    {
        squares[j].style.backgroundColor = color;
    }
}
function getRandomInt(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}
function colorAssign(arrlength)
{
    var arr=[];
    for(var j=0;j<arrlength;j++)
    {
        var r=getRandomInt(256);
        var g=getRandomInt(256);
        var b=getRandomInt(256);
        arr.push("rgb("+r+", "+g+", "+b+")");
    }
    return arr;
}
function res()
{
    this.textContent="New Colors";
    colors=colorAssign(modeLength);
    pickedColor=colors[getRandomInt(colors.length)];
    upcol.textContent = pickedColor;
    h1.style.backgroundColor="steelblue";
    message.textContent="";
    for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor = colors[i];
}
}
function check()
{
    var clickedColor =this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            changeCol(clickedColor);
            message.textContent="Correct!!";
            h1.style.backgroundColor=pickedColor;
            reset.textContent="Try Again??";
        }
        else
        {
            this.style.backgroundColor="#232323";
            message.textContent="Try Again!!";
        }
}
function rem()
{
    for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor = "#232323";
    squares[i].removeEventListener("click",check);
}
}
function add()
{
    for(var i=0;i<squares.length;i++)
{
    squares[i].addEventListener("click",check);
}
}
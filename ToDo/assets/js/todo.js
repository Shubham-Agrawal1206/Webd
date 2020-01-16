var addFront="<div class=\"beta\"><span><i class=\"far fa-trash-alt\"></i></span>";
var addBack="</div>";
$("#new").keypress(addNew);
function addNew(event)
{
    if(event.which===13)
    {
        off();
        var todo=$("#new").val();
        $(".todo").append(addFront+todo+addBack);
        $("#new").val("");
        $(".beta span").on("click",function(event){
            $(this).parent().fadeOut(function(){
                $(this).remove();
            });
            event.stopPropagation();
        });
        $(".beta").on("click",function(){
            $(this).toggleClass("vetra");
        }); 
    }
}
function off()
{
    $(".beta").off();
    $(".beta span").off();
}
$("h3 i").on("click",function(){
    $("input").fadeToggle();
});
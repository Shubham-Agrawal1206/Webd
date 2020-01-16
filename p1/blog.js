$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
var front = "<div class=\"col-md-6\"><div class=\"card\"><div class=\"card-body\"><h5 class=\"card-title\">";

var nb ="</h5><p class=\"card-text\">";
var re ="</p><a href=\"#\" class=\"btn btn-outline-danger\"><i class=\"far fa-heart\"></i></a></div></div>";

$(".btn-outline-success").on("click",function(){
    var name = $("#name").val();
    var comment = $("#comment").val();
    if(name !== "" && comment !== ""){
    $("#comm").append(front + name + nb + comment + re);
    $('.alert').css("display","block");
    }
    $("#name").val("");
    $("#comment").val("");
});

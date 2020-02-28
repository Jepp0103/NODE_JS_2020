//1
$("body").css("text-align", "center");

//2
$("#title h2").text("New Title");


//3
$(".subtitle-box").css("background-color", "yellow");


//4
$(".temp").hide(); //not deleted bot only shown


//5
$("div.reason").css("border-style", "dashed"); //entering class in div

//6
$("ol li").css("font-weight", "bold");

//7
$("ol li").last().css("text-decoration", "underline");

//8
$("ol li:nth-child(2)").css("text-decoration", "line-through"); //child starts at 1

$("ol li").eq(1).css("text-decoration", "line-through"); //selector: inside $ paranthes

//9
$("#list").css("font-style", "italic");

//10
$("#list.second-list span").css("font-size", "0.5em"); //em is common and good to use on many types of devices - empheremarel solution

//11 
$(".unused-box label").remove();

//12
$(".unused-box").append("<p>Second Sentence</p>");

//13
$(".unused-box").before("<p>First Sentence</p>");   

//14
$(".unused-box").attr("class", "used-box");
//Two other not as good solutions
// $(".unused-box").toggleClass("used-box").toggleClass("unused-box");
// $(".unused-box").addClass("used-box").removeClass("unused-box");

//15
$(".used-box").click(() => {
    $(".used-box").toggleClass("used-boxed-clicked");
});

//16
$("#submit-button").mouseover(() => {
    $("#submit-button").text("You're ready to click");
});

$("#submit-button").mouseleave(() => {
    $("#submit-button").text("Click");
});

//17
$("#submit-button").click(() => {
    $("#first-list").append("<li>reason</li>");
});

//18
$("div button").click(() => {
    console.log($("button").parent());
});



// $(document).ready(() => {
//     $(".used-box").click(() => {
//         console.log("used-boxed-clicked");
//     });
// });
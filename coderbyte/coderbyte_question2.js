import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = '<button>ON</button>';


$(document).ready(function(){
$("button").click(function(){
$(this).text($(this).text() =='ON'?'OFF':'ON');
});
});
var time = moment();

var tasks = []

$("#currentDay").text(time.format("dddd, MMMM Do YYYY"));

//load entry
var loadTasks = function() {
    var tasks = JSON.parse(localStorage.getItem("tasks"));

    $("#9").text(tasks.text);
    
    

}
loadTasks();


//Save entry
$(".saveBtn").on("click", function(){
    var textContent = $(this).siblings("textarea").val();
    var textId = $(this).siblings("textarea").attr("id");
    tasks = {
        text: textContent,
        id: textId
    }
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
});


//$(".task").on("click", "p", function() {
    //var text = $(this)
    //.text()
    //.trim();
    //var textInput = $("<textarea>")
    //.addClass("form-control")
    //.val(text);
    //$(this).replaceWith(textInput);
    //textInput.trigger("focus");
//});

//$(".task").on("blur", "textarea", function() {
    // get the textarea's current value/text
  //  var text = $(this)
   // .val()
 //   .trim();
    // recreate p element
 //   var taskP = $("<p>")
 //   .text(text);

    // replace textarea with p element
  //  $(this).replaceWith(taskP);
//});
var time = moment();

var tasks = []

$("#currentDay").text(time.format("dddd, MMMM Do YYYY"));

//load entry
var loadTasks = function () {
    //var tasks = (localStorage.getItem("9"));
    //console.log(tasks);
    //$("textarea").each(function (index, value) {
        //$(this).innerText = tasks.text;
            //console.log(tasks.text);
        $("textarea").each(function() {
            var input = $(this).attr("id");
            $(this).val(localStorage.getItem(input));
        });
            //console.log(localStorage.getItem("9"));
        //$("#9").val(localStorage.getItem("9"));
        //$("#15").val(localStorage.getItem("15"));
    //});
};

loadTasks();


//Save entry
$(".saveBtn").on("click", function () {
    var textContent = $(this).siblings("textarea").val();
    var textId = $(this).siblings("textarea").attr("id");
    //let task = {
       // id : textId,
       // text : textContent
    //}
    //tasks.push(task);
    //tasks[textId].text = textContent;
    localStorage.setItem(textId, textContent);
    
    console.log("Saving '" + textContent + "' under ID '" + textId + "'.");
    //localStorage.setItem(JSON.stringify(textId), JSON.stringify(textContent));
});

setInterval(function() {
    auditBackground();
}, 5000);

var auditBackground = function() {
    $(".time-block").each(function(index, el){
        blockTime = parseInt($(this).attr("id"));
        realTime = parseInt(moment().format("H"))
        $(this).removeClass("past present future");
        
        if (blockTime < realTime) {
            $(this).addClass("past");
            blockTime = "";
        }
        else if (blockTime === realTime) {
            $(this).addClass("present");
            blockTime = "";
        }
        else if(blockTime > realTime) {
            $(this).addClass("future");
            blockTime = "";
        }
        
    })
}
auditBackground();

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
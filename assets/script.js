var time = moment();

var tasks = []

$("#currentDay").text(time.format("dddd, MMMM Do YYYY"));

//load entry
var loadTasks = function () {
    $("textarea").each(function (index, value) {
        
        var task = JSON.parse(localStorage.getItem("hour-" + $this.attr("id")));

        if (task) {
            $this.val(task);
        }
    });
};




//Save entry
$(".saveBtn").on("click", function () {
    var textContent = $(this).siblings("textarea").val();
    var textId = $(this).siblings("textarea").attr("id");

    console.log("Saving '" + textContent + "' under ID '" + textId + "'.");
    localStorage.setItem(JSON.stringify(textId), JSON.stringify(textContent));
});

setInterval(function() {
    $(".time-block").each(function(index, el){
        blockTime = parseInt($(this).attr("id"));
        realTime = parseInt(moment().format("H"))
        $(this).removeClass("past present future");
        console.log(realTime);
        console.log(blockTime);
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
        console.log("What the fuck")
    })
}, 5000);


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
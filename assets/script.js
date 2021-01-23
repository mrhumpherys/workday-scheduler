var time = moment();



$("#currentDay").text(time.format("dddd, MMMM Do YYYY"));

//load entry
var loadTasks = function () {
    
        $("textarea").each(function() {
            var index = $(this).attr("id");
            $(this).val(localStorage.getItem(index));
        });
            
};

loadTasks();


//Save entry
$(".saveBtn").on("click", function () {
    var textContent = $(this).siblings("textarea").val();
    var textId = $(this).siblings("textarea").attr("id");
    
    localStorage.setItem(textId, textContent);
    
    console.log("Saving '" + textContent + "' under ID '" + textId + "'.");
    
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


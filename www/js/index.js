Backendless.initApp("C498555C-7297-D613-FF79-21935BA66300","DAB7371E-4FBA-C773-FF19-E83E695D3100");

$(document).on("pageshow","#todoPage", onPageShow);

function onPageShow() {
 
} 

Backendless.Data.of("TASKS").find().then(processResults).catch(error);
function processResults(tasks) {
    
    //wipe the list clean
$('#taskList').empty();

//add each tasks
for (var i = 0; i < tasks.length; i++) { 
  $('#taskList').append("<li>"+tasks[i].Task+"</li>");
}

//refresh the listview
$('#taskList').listview('refresh');

}

function error(err) {
    alert(err);
}

	
$(document).on("click", "#addTaskButton", onAddTask);
 

function onAddTask() {

    var tasktext = $('#addTaskText').val();

    var newTask = {};
    newTask.Task = tasktext;

  Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error); 

   function saved(savedTask) {

      alert ("task saved!");
      console.log( "new Contact instance has been saved" + savedTask);
     }
}





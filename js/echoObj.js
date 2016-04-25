function projectEcho () {
    $(".nav.navbar-nav").html('<li><a onclick="AddProjectEcho()">Add Project</a></li>');
    $(".nav.navbar-nav").prepend('<li><a onclick="userEcho()">User</a></li>');
    $(".navbar-brand").html('Task manager');
	$(".content").html('');

	for(var i in project) {
	    if (!project.hasOwnProperty(i)) continue;

	    $(".content").append('<div class="bs-callout bs-callout-info Project"></div>');
	    $(".Project").last().append('<label class="idProject">'+project[i].id+'</label>');
	    $(".Project").last().append('<h4  class="title" onclick="sprintEcho('+project[i].id+')" >'+project[i].projectName+' </h4>');
		$(".Project").last().append('<span class="glyphicon glyphicon-pencil" onclick="AddProjectEcho('+project[i].id+')"></span>');
		$(".Project").last().append('<span class="glyphicon glyphicon-plus"   onclick="AddSprintEcho('+project[i].id+')"></span>');
		$(".Project").last().append('<span class="glyphicon glyphicon-trash"  onclick="delProject('+project[i].id+')" ></span>');
		$(".Project").last().append('<span class="label label-primary" onclick="document.location = \'chart.html?Project='+project[i].id+'\'">Dashboard</span><br><br>');
	}
}

projectEcho();

function sprintEcho (id_project) {
	$(".nav.navbar-nav").html('<li><a onclick="AddSprintEcho('+id_project+')">Add Sprint</a><li><a onclick="AddTaskEcho('+id_project+',undefined,undefined,2,\'sprint\');">Add Task</a></li>');
	$(".nav.navbar-nav").prepend('<li><a onclick="userEcho()">User</a></li>');

	$(".content").html('<button class="btn btn-primary button-back" onclick="projectEcho()"><i class="glyphicon glyphicon-share-alt icon-flipped"> </i> Back</button>');

	for(var i in sprint) {
	    if (!sprint.hasOwnProperty(i) || sprint[i].idProject!=id_project) continue;
	    $(".content").last().append('<div class="panel panel-info sprint"></div>');
	    $(".panel").last().append('<div class="panel-heading"></div>');
	    $(".panel-heading").last().append('<div class="panel-title"></div>');
	    $(".panel-title").last().append('<label class="idSprint" hidden>'+sprint[i].id+'</label>');
	    $(".panel-title").last().append('<h4  class="title">'+sprint[i].startTime+'|'+sprint[i].endTime+'</h4>');
		$(".panel-title").last().append('<span class="glyphicon glyphicon-pencil" onclick="AddSprintEcho('+id_project+','+sprint[i].id+')"></span>');
		$(".panel-title").last().append('<span class="glyphicon glyphicon-plus" onclick="AddTaskEcho('+id_project+','+sprint[i].id+',undefined,undefined,\'sprint\')"></span>');
		$(".panel-title").last().append('<span class="glyphicon glyphicon-trash" onclick="delSprint('+sprint[i].id+')"  ></span>');
		$(".panel-title").last().append('<span class="label label-primary" onclick="dashboardEcho('+sprint[i].id+');">Dashboard</span><br><br>');

		$(".panel").last().append('<div class="panel-body"></div>');
	    $(".panel-body").last().append('<div class="col-xs-6"><select class="form-control sprintObj"><option value="All">All</option>   <option value="To Do">To Do</option>   <option value="In Progress">In Progress</option>   <option value="In Review">In Review</option>   <option value="Done">Done</option><select></div><br>');
	    $(".panel-body").last().append('<br><div class="panel-group" id="accordion'+i+'" role="tablist" aria-multiselectable="true"><span class="notFound" hidden>Not found</span></div>');

	taskEchoInSprint(sprint[i].id);


	}
}

function taskEchoInSprint (idSprint) {
	$('.notFound').last().show();
	for(var i in task) {
	    if (!task.hasOwnProperty(i)) continue;
	    	if (idSprint==task[i].idSprint){
			    $('.panel-group').last().append('<div class="panel panel-default"></div>')
			    $('.panel-default').last().append('<div class="collapsed panel-heading" role="tab" id="'+('heading'+task[i].name+idSprint).replace(/\s+/g, '')+'" role="button" data-toggle="collapse" data-parent="#accordion'+idSprint+'" href="#'+(task[i].name+task[i].id+idSprint).replace(/\s+/g, '')+'" aria-expanded="false" aria-controls="'+(task[i].name+task[i].id+idSprint).replace(/\s+/g, '')+'"></div>')
			    $('.panel-heading').last().append('<h4 class="panel-title"></h4>')
			    $('.panel-title').last().append('<a  class="collapsed" ><span class="glyphicon glyphicon-menu-down"></span></a>')
			    $('.panel-title').last().append('<a onclick="taskEcho('+task[i].idSprint+','+i+',\'sprint\')"><h4>'+task[i].name+'</h4></a><span class="glyphicon glyphicon-trash" onclick="delTask('+task[i].id+')"></span><span class="glyphicon glyphicon-pencil" onclick="AddTaskEcho('+task[i].idProject+','+idSprint+','+i+',2,\'sprint\');"></span>')
			    $('.panel-default').last().append(' <div id="'+(task[i].name+task[i].id+idSprint).replace(/\s+/g, '')+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="'+('heading'+task[i].name+idSprint).replace(/\s+/g, '')+'"></div>')
				$('.panel-collapse').last().append(' <div class="panel-body">Time:'+task[i].time+'<br> State: <span class="stateTask">'+task[i].state+'</span><br><div class="accordion-text">Description:'+task[i].desc+'</div></div>')
			$('.notFound').hide();
			    //append('<li class="list-group-item"><p class="id" hidden>'+task[i].id+'</p><a onclick="taskEcho('+task[i].idSprint+','+i+')"><h4>'+task[i].name+'</h4></a><span class="glyphicon glyphicon-pencil" onclick="AddTaskEcho('+task[i].idProject+','+task[i].idSprint+','+task[i].id+')"></span><span class="glyphicon glyphicon-trash" onclick="delTask('+task[i].id+')"  ></span>');
			}

	}
}

function taskEcho (id_sprint , id_task , WhoEcho) {

if (WhoEcho)  {WhoEcho= ",'"+WhoEcho+"'";} else{ WhoEcho='';}

		$(".modal-header").html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>');
		$(".modal-footer").html("");
		$("#myModal").modal('show');


	$(".modal-body").html('<div class=" task"></div>');
	$(".task").append('<h4>'+task[id_task].name+'</h4>');
	$(".task").append('<span data-dismiss="modal" class="glyphicon glyphicon-pencil" onclick="AddTaskEcho('+task[id_task].idProject+','+id_sprint+','+id_task+',2'+WhoEcho+');"></span>');
	$(".task").append('<span data-dismiss="modal" class="glyphicon glyphicon-trash" onclick="delTask('+task[id_task].id+')" ></span><br><br>');
	$(".task").append('<p>Time:\t<input disabled class="form-control"  value="'+task[id_task].time+'"></p>');
	$(".task").append('<p>State:\t<input disabled class="form-control" value="'+task[id_task].state+'"><p>');
	$(".task").append('<p>User:\t<input placeholder="No user" disabled class="form-control" value="'+(user.hasOwnProperty(Number(task[id_task].user))? user[Number(task[id_task].user)].name  : '') +'"></p>');
	$(".task").append('<p>Description:<br><textarea disabled class="form-control" style="height : 200px;">'+task[id_task].desc+'</textarea><p>')
	$(".task").append('<button onclick="AddTaskEcho('+task[id_task].idProject+','+id_sprint+','+id_task+',2 '+WhoEcho+');" class="btn btn-default">Edit</button>');


}



function dashboardEcho(idSprint) {

    $(".nav.navbar-nav").html('');
    $(".navbar-brand").html('<a onclick="projectEcho()">Home</a>');

  
$(".content").html('<button class="btn btn-primary button-back" onclick="sprintEcho('+sprint[idSprint].idProject+')"><i class="glyphicon glyphicon-share-alt icon-flipped"> </i> Back</button>');
	$(".content").append('<div></div><div class="dashboard col-xs-3"><h3>To Do</h3><div class="block To_Do"></div></div>');
	for(var i in task) {
	    if (!task.hasOwnProperty(i) || task[i].idSprint!=idSprint || task[i].state != "To Do") continue;
	    $(".To_Do").append('<div class="bs-callout bs-callout-info dashboardTask"><h4>'+task[i].name+'</h4><br>Time:'+task[i].time+'</div>');
	    //виводимо таски
		$(".dashboardTask > h4").last().append('<span class="glyphicon glyphicon-pencil" onclick="AddTaskEcho('+task[i].idProject+','+task[i].idSprint+','+task[i].id+',1,\'dashboard\')"></span>');
		$(".dashboardTask > h4").last().append('<span class="glyphicon glyphicon-trash" onclick="delTask('+task[i].id+')" ></span><br>');
		$(".dashboardTask > h4").last().append('<p class="id" hidden>'+i+'</p>');

	}

	$(".content").append('<div class="dashboard col-xs-3"><h3>In Progress</h3><div class="block In_Progress"></div></div>');
	for(var i in task) {
	    if (!task.hasOwnProperty(i) || task[i].idSprint!=idSprint || task[i].state != "In Progress") continue;
	    $(".In_Progress").append('<div class="bs-callout bs-callout-info dashboardTask"><h4>'+task[i].name+'</h4><br>Time:'+task[i].time+'</div>');
	    //виводимо таски
		$(".dashboardTask > h4").last().append('<span class="glyphicon glyphicon-pencil" onclick="AddTaskEcho('+task[i].idProject+','+task[i].idSprint+','+task[i].id+',1,\'dashboard\')"></span>');
		$(".dashboardTask > h4").last().append('<span class="glyphicon glyphicon-trash" onclick="delTask('+task[i].id+')" ></span><br>');
		$(".dashboardTask > h4").last().append('<p class="id" hidden>'+i+'</p>');
	}

	$(".content").append('<div class="dashboard col-xs-3"><h3>In Review</h3><div class="block In_Review"></div></div>');
	for(var i in task) {
	    if (!task.hasOwnProperty(i) || task[i].idSprint!=idSprint || task[i].state != "In Review") continue;
	    $(".In_Review").append('<div class="bs-callout bs-callout-info dashboardTask"><h4>'+task[i].name+'</h4><br>Time:'+task[i].time+'</div>');
	    //виводимо таски
		$(".dashboardTask > h4").last().append('<span class="glyphicon glyphicon-pencil" onclick="AddTaskEcho('+task[i].idProject+','+task[i].idSprint+','+task[i].id+',1,\'dashboard\')"></span>');
		$(".dashboardTask > h4").last().append('<span class="glyphicon glyphicon-trash" onclick="delTask('+task[i].id+')" ></span><br>');
		$(".dashboardTask > h4").last().append('<p class="id" hidden>'+i+'</p>');
	}

	$(".content").append('<div class="dashboard col-xs-3"><h3>Done</h3><div class="block Done"></div></div>');
	for(var i in task) {
	    if (!task.hasOwnProperty(i) || task[i].idSprint!=idSprint || task[i].state != "Done") continue;
	    $(".Done").append('<div class="bs-callout bs-callout-info dashboardTask"><h4>'+task[i].name+'</h4><br>Time:'+task[i].time+'</div>');
	    //виводимо таски
		$(".dashboardTask > h4").last().append('<span class="glyphicon glyphicon-pencil" onclick="AddTaskEcho('+task[i].idProject+','+task[i].idSprint+','+task[i].id+',1,\'dashboard\')"></span>');
		$(".dashboardTask > h4").last().append('<span class="glyphicon glyphicon-trash" onclick="delTask('+task[i].id+')" ></span><br>');
		$(".dashboardTask > h4").last().append('<p class="id" hidden>'+i+'</p>');
	}
  $('.dashboardTask').draggable({
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move",
      opacity: '0.9'
  })

    $('.block').droppable({
    accept: ".dashboardTask",
    activeClass: "active",
    drop: function( event, ui ) {
      var idTask=$(ui.draggable).children('h4').children('.id').html();
      $(this).append(ui.draggable);
      task[idTask].state=$(this).prev().html();
      saveChange();
    }
  });

}


function userEcho() {
    $(".nav.navbar-nav").html('<li><a onclick="projectEcho()">Home</a></li>');
    $(".nav.navbar-nav").append('<li><a onclick="AddUserEcho()">New user</a></li>');
    $(".content").html('<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">');

	for(var i in user) {
	if (!task.hasOwnProperty(i)) continue;

    $('.panel-group').last().append('<div class="panel panel-default"></div>')
    $('.panel-default').last().append('<div class="collapsed panel-heading" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+user[i].id+'" aria-expanded="false" aria-controls="collapse'+user[i].id+'" role="tab" id="heading'+user[i].id+'"></div>')
    $('.panel-heading').last().append(' <h4 class="panel-title">'+user[i].name+'</h4>')
    $('.panel-title').last().append('<span class="glyphicon glyphicon-trash" onclick="delUser('+i+')"></span>')
    $('.panel-title').last().append('<span class="glyphicon glyphicon-pencil" onclick="AddUserEcho('+i+');"></span>')
    $('.panel-default').last().append('<div id="collapse'+user[i].id+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+user[i].id+'"></div>')
    $('.panel-collapse').last().append('<div class="panel-body userId"></div>')






		for(var j in task) {
	    if (!task.hasOwnProperty(i)) continue;
		if (task[j].user==user[i].id){
			$('.panel-body').last().append('<h4 onclick="taskEcho('+task[j].idSprint+','+j+',\'user\')">'+task[j].name+'</h4><br>')
		}
		}


	}
}
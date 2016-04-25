function AddProject (editID) {

	var projectName = $(".name").val();

		id=Number(editID)+1;

		if (editID==undefined) {id = project.push(new Object());}
		
		project[id-1]["id"]=id-1;
		project[id-1]["projectName"]=projectName;

		saveChange();
		projectEcho();
}

function AddSprint (editID) {
	var idProject = $(".selectproject").val(),
		StartTime = $(".StartTime").val().replace(/-/g,".") ,
		EndTime = $(".EndTime").val().replace(/-/g,".");

		id=Number(editID)+1;

		for(var i in task) {
			if (!task.hasOwnProperty(i) && task[i].idSprint!=idEl) continue;
			task[i]["idProject"] = idProject;
		}

		if (editID==undefined) {id = sprint.push(new Object());		}
		

		sprint[id-1]["id"]=id-1;
		sprint[id-1]["idProject"]=idProject;
		sprint[id-1]["startTime"]=StartTime;
		sprint[id-1]["endTime"]=EndTime;
		
		saveChange();
		sprintEcho(idProject);

}

function AddTask (editID , WhoEcho) {
	var idProject = $(".selectproject").val(),
		idSprint = $(".idsprint1").val(),
		name = $(".name").val(),
		desc = $(".desc").val(),
		time = $(".time").val(),
		user = $(".idUser").val(),
		state = 'To Do';
		if (editID==undefined) {id = task.push(new Object());}
		else
		{
			var id=Number(editID)+1;
			state = $(".state").val();
		}


		task[id-1]["id"]=id-1;
		task[id-1]["name"]=name;
		task[id-1]["desc"]=desc;
		task[id-1]["time"]=time;
		task[id-1]["idSprint"]=idSprint;
		task[id-1]["idProject"]=idProject;
		task[id-1]["state"]=state;
		task[id-1]["user"]=user;

		saveChange();
		if (WhoEcho == 'sprint') sprintEcho(idProject);
		if (WhoEcho == "dashboard") dashboardEcho(idSprint);
		if (WhoEcho == "user") userEcho();

}
function AddUser (idEl) {
	var name = $(".name").val();

	if (idEl==undefined) {id = user.push(new Object());}
	else
		{id=idEl+1;}

	user[id-1]["id"]=id-1;
	user[id-1]["name"]=name;
	userEcho();
}





function delProject (idEl , test) {




	if(test==1){ 
		delete project[idEl];
		projectEcho();


		for(var i in sprint) {
			if (!sprint.hasOwnProperty(i)) continue;
			if (sprint[i].idProject==idEl){delSprint(i,1)}
		}
		saveChange();
		return;
	}

    $(".modal-title").html('Delete');
    $(".modal-body").html('Delete a project:'+project[idEl].projectName+'?');
    $(".modal-footer").html('<button onclick="delProject('+idEl+',1)" type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>');
    $(".modal-footer").append('<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>');
    $("#myModal").modal('show');
}



function delSprint (idEl , del, test) {
	if(del==1 || test==1 ){ 
		delete sprint[idEl];
		projectEcho();


		for(var i in task) {
			if (!task.hasOwnProperty(i) || task[i].idSprint!=idEl) continue;
			delete task[i];
		}
	saveChange();
	return;
	}

    $(".modal-title").html('Delete');
    $(".modal-body").html('Delete a sprint:'+sprint[idEl].startTime+'|'+sprint[idEl].endTime+'?');
    $(".modal-footer").html('<button onclick="delSprint('+idEl+',0,1)" type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>');
    $(".modal-footer").append('<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>');
    $("#myModal").modal('show');
}

function delTask (idEl , test) {
	if(test==1){ 
		var idProject = task[idEl].idProject;
		delete task[idEl];
		sprintEcho(idProject);
		saveChange();
		return;
	}

    $(".modal-title").html('Delete');
    $(".modal-body").html('Delete a task:'+task[idEl].name+'?');
    $(".modal-footer").html('<button onclick="delTask('+idEl+',1)" type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>');
    $(".modal-footer").append('<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>');
    $("#myModal").modal('show');
}

function delUser (idEl , test) {

	if(test==1){ 
	delete user[idEl];
	userEcho();

	for (i in task) {
		if (!task.hasOwnProperty(i) || task[i].user!=idEl) continue;
		task[i]['user']='';
	};

	return;
	}

    $(".modal-title").html('Delete');
    $(".modal-body").html('Delete a user:'+user[idEl].name+'?');
    $(".modal-footer").html('<button onclick="delUser('+idEl+',1)" type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>');
    $(".modal-footer").append('<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>');
    $("#myModal").modal('show');
}

















function saveChange(){
	var save="";

		for(var i in project) {
			if (!project.hasOwnProperty(i)) continue;
			save+='project['+i+']={';
			save+='"id" : "'+project[i].id+'",';
			save+='"projectName" : "'+project[i].projectName+'"';
			save+='};';
		}
	
		for(var i in sprint) {
			if (!sprint.hasOwnProperty(i)) continue;
			save+='sprint['+i+']={';
			save+='"id" : "'+sprint[i].id+'",';
			save+='"idProject" : "'+sprint[i].idProject+'",';
			save+='"startTime" : "'+sprint[i].startTime+'",';
			save+='"endTime" : "'+sprint[i].endTime+'"';
			save+='};';
		}
	
		for(var i in task) {
			if (!task.hasOwnProperty(i)) continue;
			save+='task['+i+']={';
			save+='"id" : "'+task[i].id+'",';
			save+='"name" : "'+task[i].name+'",';
			save+='"desc" : "'+task[i].desc+'",';
			save+='"time" : "'+task[i].time+'",';
			save+='"idSprint" : "'+task[i].idSprint+'",';
			save+='"idProject" : "'+task[i].idProject+'",';
			save+='"state" : "'+task[i].state+'",';
			save+='"user" : "'+task[i].user+'"';
			save+='};';
		}

	
		for(var i in user) {
			if (!task.hasOwnProperty(i)) continue;
			save+='user['+i+']={';
			save+='"id" : "'+user[i].id+'",';
			save+='"name" : "'+user[i].name+'"';
			save+='};';
		}

		localStorage["data"] = save;
}


$("body").on('change', '.sprintObj' , function(event) {
	var idSprint = $(this).parent().parent().children('.idProject').html();
	var notFound = $(this).parent().parent().children('.panel-group').children('.notFound');
	notFound.show();
	var state = $(this).val();

	$(this).parent().parent().children('.panel-group').children('.panel').each(function(i,elem) {
		$(this).show();
		if (state == "All") { notFound.hide();return true;}
		var stateTask = $(this).children('.collapse').children('.panel-body').children('.stateTask').html();
		if (stateTask!==state) {
			$(this).hide();  
			return true
		}
		notFound.hide();
	});

});

$("body").on('click', '.panel-heading' , function(event) {
	if ($(this).hasClass("collapsed")) {
		$(this).children('.panel-title').children('.collapsed').children('.glyphicon').attr('class','glyphicon glyphicon-menu-up')
	}
	else{

		$(this).children('.panel-title').children('.collapsed').children('.glyphicon').attr('class','glyphicon glyphicon-menu-down')
	}
});
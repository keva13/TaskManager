
function AddProjectEcho (idEdit) {
		$(".modal-header").html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>');
		$(".modal-footer").html("");
		$("#myModal").modal('show');

		var title = 'Create new Project'
		var name="";
	if (idEdit>=0) 
	{
		var title = 'Edit Project'
		var name="value='"+project[idEdit].projectName+"'"
	}

	$(".modal-body").html('<div class="bs-callout bs-callout-info addTaskForm"></a><br><h4>'+title+'<h4><br><br></div>');


	$(".addTaskForm").append('<label>Name:</label><input '+name+' class="form-control name"><br>')


	$(".addTaskForm").append('<button data-dismiss="modal" class="btn btn-success" onclick="if (validator()) AddProject('+idEdit+')">Save</button><br>')
	

}

function AddSprintEcho (id_project , idEdit) {

		$(".modal-header").html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>');
		$(".modal-footer").html("");
		$("#myModal").modal('show');
    	
    var StartTime="",
    	EndTime="",
		title = 'Create new Sprint';

	if (idEdit>=0) 
	{
		StartTime=sprint[idEdit].startTime.replace(/\./g,"-");
    	EndTime=sprint[idEdit].endTime.replace(/\./g,"-");
		title = 'Edit Sprint';
	}
	$(".modal-body").html('<div class="bs-callout bs-callout-info addTaskForm"></a><br><h4>'+title+'<h4><br><br></div>');
    // парсимо список проектів
		var option="";
	for(var i in project) {
	    if (!project.hasOwnProperty(i)) continue;
	    if (project[i].id==id_project)
	    {
			option+='<option value="'+project[i].id+'" selected>'+project[i].projectName+'</option>';
	    }
	    else
	    {
	    	option+='<option value="'+project[i].id+'">'+project[i].projectName+'</option>';
		}
	}

	if (id_project>=0)
		{$(".addTaskForm").append('<label>Project:</label> '+project[id_project].projectName+' <input value="'+id_project+'" class="selectproject" hidden><br><br>');}
	else
		{$(".addTaskForm").append('<label>Project:</label><select class="form-control selectproject">'+option+'<select><br>');}
	

	$(".addTaskForm").append('<label>Start Time:</label><input value="'+StartTime+'" type="date" class="form-control StartTime"><br>')
	$(".addTaskForm").append('<label>End Time:</label><input value="'+EndTime+'" type="date" class="form-control EndTime"><br>')


	$(".addTaskForm").append('<button data-dismiss="modal" class="btn btn-success" onclick="if (validator()) AddSprint('+idEdit+')">Save</button><br>')
}

function AddTaskEcho (id_project , id_sprint , idEdit , inModal , WhoEcho) {
	
	if (WhoEcho)  {WhoEcho= ",'"+WhoEcho+"'";} else{ WhoEcho='';}
    	
    var name="",
    	desc="",
		time = '',
		title = 'Create new Task',
		modal=".content",
		buttonAttr="",
		thisUser="",
		onclick='onclick="if (validator()) AddTask('+idEdit+WhoEcho+');"';


		$(".modal-header").html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>');
		$(".modal-footer").html("");
		$("#myModal").modal('show');
		buttonAttr='data-dismiss="modal"';


	if (idEdit>=0) 
	{
		name=task[idEdit].name;
		desc=task[idEdit].desc;
		time=task[idEdit].time;
		thisUser=task[idEdit].user;
		title = 'Edit Task';
		state = task[idEdit].state;
	}

   	$('.modal-body').html('<div class="bs-callout bs-callout-info addTaskForm"></a><br><h4>'+title+'<h4><br><br></div>');

	$(".addTaskForm").append('<label>Project:</label> '+project[id_project].projectName+'<input value="'+id_project+'" class="selectproject" hidden><br><br>');


	// парсимо Юзерів
		optionUser="<option value=''>None</option>";
	for(var i in user) {
	    if (!user.hasOwnProperty(i)) continue;
	    if (user[i].id==thisUser)
	    {
			optionUser+='<option value="'+user[i].id+'" selected>'+user[i].name+'</option>';
	    	continue;
	    }
	    optionUser+='<option value="'+user[i].id+'">'+user[i].name+'</option>';
	}
	// парсимо спрінти проектів
		option="<option value='none'></option>";
	for(var i in sprint) {
	    if (!sprint.hasOwnProperty(i)) continue;
	    if (sprint[i].id==id_sprint)
	    {
			option+='<option value="'+sprint[i].id+'" selected>'+sprint[i].startTime+'|'+sprint[i].endTime+'</option>';
	    	continue;
	    }

	    if (sprint[i].idProject == id_project) option+='<option value="'+sprint[i].id+'">'+sprint[i].startTime+'|'+sprint[i].endTime+'</option>';
	}
	// виводимо спрінти проектів в селект
	if (id_sprint>=0)
		$(".addTaskForm").append('<label>Sprint:</label> '+sprint[id_sprint].startTime+'|'+sprint[id_sprint].endTime+'<input value="'+id_sprint+'" class="idsprint1" hidden> <br><br>')
	else
		$(".addTaskForm").append('<label>Sprint:</label><select required class="form-control idsprint1">'+option+'</select>')


	$(".addTaskForm").append('<label>Name:</label><input value="'+name+'" class="form-control name"><br>')

	$(".addTaskForm").append('<label>Description:</label><br><textarea style="height : 250px;" class="form-control desc">'+desc+'</textarea><br>')

	$(".addTaskForm").append('<label>Time:</label><input value="'+time+'" class="form-control time"><br>')

	if (idEdit>=0) 
	{
		$(".addTaskForm").append('<label>State:</label> <select required class="form-control state"><option value="To Do">To Do</option>   <option value="In Progress">In Progress</option>   <option value="In Review">In Review</option>   <option value="Done">Done</option><select> <br>')
		$("select option[value='" + task[idEdit].state + "']").attr('selected', 'true').text(task[idEdit].state);
	}


	$(".addTaskForm").append('<label>User:</label><select class="form-control idUser">'+optionUser+'</select><br>')

	$(".addTaskForm").append('<button '+buttonAttr+' class="btn btn-success" '+onclick+'>Save</button><br>')
}


function AddUserEcho(idEl){

	var id = "",
		name = "";

	if (idEl!=undefined){
		var id=user[idEl].id,
			name=user[idEl].name;
	}


	$(".modal-header").html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>');
	$(".modal-footer").html("");
	$("#myModal").modal('show');

	$(".modal-body").html('<div class="userEcho"></div>');
	$(".userEcho").append('<h4>Edit User</h4><br><br>');
	$(".userEcho").append('<label>Name:</label> <input class="form-control name" value="'+name+'"><br>');
	$(".userEcho").append('<button data-dismiss="modal" class="btn btn-success" onclick="if (validator()) AddUser('+idEl+')">Save</button><br>');

}

function FormProjectChange(){
	var id_project=$(".selectproject").val()

		var option="";
		var option="";
	for(var i in sprint) {
	    if (!sprint.hasOwnProperty(i)) continue;
	    if (sprint[i].idProject==id_project)
	    {
			option+='<option value="'+sprint[i].id+'" selected>'+sprint[i].startTime+'|'+sprint[i].endTime+'</option>';
	    	continue;
	    }

	    if (sprint[i].idProject == id_project) option+='<option value="'+sprint[i].id+'">'+sprint[i].startTime+'|'+sprint[i].endTime+'</option>';
	}
		$(".sprint").html(option)
	
}
function validator(){
	if	($('.sprint').length && $('.sprint').val()=="none") {myAlert("Sprint not found"); return 0; }
	if	($('.name').length && !$('.name').val()) {myAlert("The field 'name' is not filled"); return 0; }


	if	($('.time').length)
		{

			var str = $('.time').val();
			for (var i = 0; i < $('.time').val().length-1; i++) {
				if (str.substr(-1)!= "h" && str.substr(-1)!= "w" && str.substr(-1)!= "d") {myAlert("The field 'time' is not filled, <br> Add in the end of the line 'h'-hour or 'w'-week or 'd'-day");return 0; }
				 
				 if(!str.charAt(i).match(/^[-\+]?\d+/)) {myAlert("The field 'time' is not filled");return 0; }

				 if(str.substr(-1)== "h" && str.slice(0,-1)>12) {myAlert("Max hour - 12, use the 'd' - day");return 0; }
				 if(str.substr(-1)== "d" && str.slice(0,-1)>5) {myAlert("Max day - 5, use the 'w' - week");return 0; }
				 if(str.substr(-1)== "w" && str.slice(0,-1)>1) {myAlert("Max week - 1");return 0; }

			};
		}




	if ($('.StartTime').length && $('.StartTime').val().length<2) {myAlert("The date is not valid"); return 0; }
	if ($('.EndTime').length && $('.EndTime').val().length<2 ) {myAlert("The date is not valid"); return 0; }
	if ($('.EndTime').length && new Date($('.EndTime').val())< new Date($('.StartTime').val()) ) {myAlert("The date is not valid"); return 0; }

	return 1;
}

function myAlert(text){

    $(".modal-title").html('Attention');
    $(".modal-body").html(text);
    $(".modal-footer").html('<button type="button" class="btn btn-default" data-dismiss="modal">Ok</button>');
    $("#myModal").modal('show');
}
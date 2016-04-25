function AddProject (edit_id) {
	alert(edit_id);
	
	/*var projectName = $(".name").val();

		var id = project.push(new Object());
		project[id-1]["id"]=id;
		project[id-1]["projectName"]=projectName;

		projectEcho();*/
}

function AddSprint () {
	var idProject = $(".selectproject").val(),
		StartTime = $(".StartTime").val().replace(/-/g,".") ,
		EndTime = $(".EndTime").val().replace(/-/g,".");

		var id = sprint.push(new Object());
		sprint[id-1]["id"]=id;
		sprint[id-1]["idProject"]=idProject;
		sprint[id-1]["startTime"]=StartTime;
		sprint[id-1]["endTime"]=EndTime;
		
		sprintEcho(idProject);

}

function AddTask () {
	var idProject = $(".selectproject").val(),
		idSprint = $(".sprint").val(),
		name = $(".name").val(),
		desc = $(".desc").val(),
		time = $(".time").val();


		var id = task.push(new Object());
		task[id-1]["id"]=id;
		task[id-1]["name"]=name;
		task[id-1]["desc"]=desc;
		task[id-1]["time"]=time;
		task[id-1]["idSprint"]=idSprint;
		task[id-1]["idProject"]=idProject;
		sprintEcho(idProject);
}
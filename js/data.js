project = [];
sprint =[];
task = [];
user = [];





/*------------------*\
	For debug
\*------------------*/

/*
project[0] = {
	"id" : '0',
	"projectName" : 'Project 0'
}
project[1] = {
	"id" : '1',
	"projectName" : 'Project 1'
}





sprint[0] = {
	"id" : '0',
	"idProject" : '0',
	"startTime" : '2016.04.08',
	"endTime" : '2016.04.13'
	//time : YYYY.MM.DD

}

sprint[1] = {
	"id" : '1',
	"idProject" : '0',
	"startTime" : '2016.04.12',
	"endTime" : '2016.04.28'

}


task[0] = {
	"id" : '0',
	"name" : 'task 0',
	"desc" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonroident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	"time" : '12h',
	"idSprint" : '0',
	"idProject" : '0',
	"state" : "In Review",
	"user" : "3"
};
task[1] = {
	"id" : '1',
	"name" : 'task 1',
	"desc" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonroident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	"time" : '11h',
	"idSprint" : '0',
	"idProject" : '0',
	"state" : "In Progress",
	"user" : "2"
};

task[2] = {
	"id" : '2',
	"name" : 'task 2',
	"desc" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonroident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	"time" : '11h',
	"idSprint" : '1',
	"idProject" : '0',
	"state" : "To Do",
	"user" : "1"
};
task[3] = {
	"id" : '3',
	"name" : 'task 3',
	"desc" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonroident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	"time" : '4d',
	"idSprint" : '0',
	"idProject" : '0',
	"state" : "Done",
	"user" : "1"
};
task[4] = {
	"id" : '4',
	"name" : 'task 4',
	"desc" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonroident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	"time" : '4d',
	"idSprint" : '0',
	"idProject" : '0',
	"state" : "Done",
	"user" : "1"
};



user[0] = {
	"id" : '0',
	"name" : 'user 0'
};
user[1] = {
	"id" : '1',
	"name" : 'user 1'
};
user[2] = {
	"id" : '2',
	"name" : 'user 3'
};

*/$("body").append('<script>'+localStorage.getItem('data')+'</script>');

	
	
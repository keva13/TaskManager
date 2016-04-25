






  $('.dashboardTask').draggable({
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move"
  })

    $('.block').droppable({
    accept: ".dashboardTask",
    activeClass: "ui-state-highlight",
    drop: function( event, ui ) {
      $(this).append(ui.draggable);
    }
  });









/*$(document).mousemove(function(e){
    mouseX = e.pageX; // положения по оси X
    mouseY = e.pageY; // положения по оси Y
});   


function moveDashboardTask(obj){
  moveTask=obj;
  //obj.css('position' , 'absolute');
  //obj.css('width' , '89%');
  //obj.offset({top:mouseY-50, left:mouseX-50});
}

$('body').on('mouseup', '.dashboardTask', function(){
  clearTimeout(timeout)
 // $(this).css('position' , '');
 // $(this).css('width' , '100%');
});

$('body').on('mousedown', '.dashboardTask', function(){
  var q=$(this);

  timeout = setInterval(function() {moveDashboardTask(q);}, 10);
});
$('body').on('mouseup', '.To_Do', function(){
  console.log(2);
});
$('body').on('mouseup', '.block', function(){
    //moveTask.prependTo( this );
});



*/
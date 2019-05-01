function handleFetch(id) {
$.ajax({
  method: 'DELETE',
  url: '/edit/'+id,
  succes: function(res){
    console.log(window.location.pathname);
    alert('Borrando articulo');
    window.location.href='../index';
  },
  error: function(err){
    console.log(err);
  }
});
}

$(document).ready(function(){
  $('.delete-article').on('click', function(event){
    console.log('Llego');
    $target = $(event.target);
    const id = $target.attr('data-id');
    console.log(id);
    handleFetch(id);
    //alert("Hello! I am an alert box!!");

  });
});

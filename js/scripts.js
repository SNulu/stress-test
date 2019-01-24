$(document).ready(function(){
  $("form#Stress_Test").submit(function(event){
    event.preventDefault();
    $("#responses").show();
    $("input:checkbox[name=warning]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#responses').append(workTransportationMode + "<br>");
    });
    $("#second-response").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#second-response').append(funTransportationMode + "<br>");
  });
    $('#Stress_Test').hide();
  });
});

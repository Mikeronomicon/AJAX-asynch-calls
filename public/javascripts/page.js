// function call(name) {
//   var request = new XMLHttpRequest();
//   request.onload = function() {
//     var objectImport = JSON.parse(this.responseText);
//     alert(objectImport['name']);
//     console.log(objectImport);
//   };
//   request.open("get", "https://teamtreehouse.com/" + name + ".json");
//   request.send();
// }

  var input = document.getElementsByTagName('input')[0];
  var sButton = document.getElementsByTagName('input')[1];
  var theForm = document.getElementsByTagName('form')[0];

  // theForm.addEventListener('submit', function(evt) {
  //   evt.preventDefault();
  // })

  // sButton.onclick = function() {
  //   if (!input.value) {
  //     alert('Please enter a name');
  //   }else{
  //     call(input.value);
  //     }
  //   }

function call(name) {
  $.ajax({
    url: "http://teamtreehouse.com" + "/" + name + ".json",
  })
    .done(function(text) {
      document.write(
      text.name + "<br />" + text["badges"].length+"<br />")
      for(var i=0; i<text["badges"].length; i++) {
        $(document.body).append ("<img src="+text.badges[i]["icon_url"]+">")
      }
  });
}

$('#button').click(function(event) {
  event.preventDefault();
  if (!input.value) {
    alert('This will not work without a name jackass.');
  } else {
    call(input.value);
  }
})
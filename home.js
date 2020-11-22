function login()
{
  var form = document.createElement("input");

  var element = document.getElementById("content");
  element.appendChild(form);
  element = document.getElementById("login");
  element.remove()
  element = document.getElementById("browseFreely");
  element.remove()
}

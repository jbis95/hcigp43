var pageBody = document.getElementsByTagName("body");

function myBody()
{
  pageBody[0].innerHTML = "<p>Hello world!</p>";
}

function homepage()
{
  var htmlPage =
  "<div id=\"content\">" +
    "<button class=\"button\" id=\"login\" onclick=\"login()\">Login</button>" +
    "<button class=\"button\" id=\"browseFreely\">Browse Freely</button>" +
  "</div>"

  pageBody[0].innerHTML = htmlPage;
}

function login()
{

}

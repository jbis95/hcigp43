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
  var htmlPage =
  "<div id=\"content\">" +
    "<form id=\"loginForm\">" +
      "<input type=\"text\" name=\"username\" id=\"usernameField\" placeholder=\"username\">" +
      "<input type=\"password\" name=\"password\" id=\"passwordField\" placeholder=\"password\">" +
      "<input type=\"submit\" value=\"login\" id=\"login\">" +
    "</form>" +
"" +
    "<button class=\"button\" id=\"createAccount\">Don't have an account? Register</button>" +
  "</div>"

  pageBody[0].innerHTML = htmlPage;
}

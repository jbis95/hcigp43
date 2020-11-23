var pageBody = document.getElementsByTagName("body");

function myBody()
{
  pageBody[0].innerHTML = "<p>Hello world!</p>";
}

function homepage()
{
  var htmlPage =
  `<div id="content">
    <button class="button" id="login" onclick="login()">Login</button>
    <button class="button" id="browseFreely" onclick="browseFreely()">Browse Freely</button>
  </div>`

  pageBody[0].innerHTML = htmlPage;
}

function login()
{
  var htmlPage =
  `<div id="content">
    <form id="loginForm">
      <input type="text" id="usernameField" placeholder="username">
      <input type="password" id="passwordField" placeholder="password">
      <input type="submit" value="login" id="login">
    </form>

    <button class="button" id="createAccount">Don't have an account? Register</button>
  </div>`

  pageBody[0].innerHTML = htmlPage;
}

function browseFreely()
{
  var htmlPage =
  `<div id="content">
    <h1>Terms of Use:</h1>
    <textarea readonly id="tos" name="tos" rows="30" cols="50">
    Terms of use goes here
    </textarea>
  </div>`

  pageBody[0].innerHTML = htmlPage;
}

function init() {
  document.title = "Kreimben.com";
}

var app = document.getElementsByClassName("App");

async function fetch_data() {
  alert("in the function \"fetch_data()\"");
  app.innerHTML = await fetch('https://www.naver.com');
}


init();
fetch_data();

const set_title = () => {
  document.title = "Kreimben.com";
}

const set_body = () => {
  document.body = document.createElement(`body`);
  document.body.innerHTML = `<p style='background:red'>Hello!</p1>`;
}

var app = document.getElementsByClassName("App");

const fetch_data = async () => {

  const result = fetch('http://localhost:10120/get_photos') // 'https://api.kreimben.com/get_photos')
        .then(res => res.json());

  app.innerHTML = Stringify(result);

  set_body();

  return result;
}


set_title();
const json = fetch_data();
console.log(json == "");

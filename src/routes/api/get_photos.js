export async function get() {
  const res = await fetch('https://api.kreimben.com/get_photos');
  const json = await res.json();

  if (json["success"] === false) return {body: {"success": false, "message": "Unable to get photos."}}

  const list = json["content"];
  let url = [];

  list.forEach((file_name) => {url.push(`https://api.kreimben.com/get_photo/${file_name}`)});

  return { body: {
    "success": true,
    "url": url
  }};
}

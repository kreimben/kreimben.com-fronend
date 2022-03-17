export async function get() {
  const res = await fetch('https://api.kreimben.com/update_photos');
  const json = await res.json();

  return { body: json };
}

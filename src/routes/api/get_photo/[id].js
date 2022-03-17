export async function get({ params }) {
  const { id } = params;

  const res = await fetch(`https://api.kreimben.com/get_photo/${id}`);
  const json = await res.json();

  return { body: json };
}

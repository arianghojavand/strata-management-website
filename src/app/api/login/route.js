export async function POST(req) {
  const { username, password } = await req.json();

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (username !== validUsername || password !== validPassword) {
    return Response.json({ ok: false }, { status: 401 });
  }

  // Fetch data from Google Sheets via webhook (GET)
  const res = await fetch(process.env.GOOGLE_SHEETS_READ_URL);
  const data = await res.json();

  const taskCount = data.length; // assuming it's an array of rows

  return Response.json({ ok: true, taskCount });
}
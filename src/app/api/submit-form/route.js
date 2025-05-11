export async function POST(req) {
  const data = await req.formData();

  const payload = {
    name: data.get("name"),
    lot: data.get("lot"),
    type: data.get("type"),
    description: data.get("description"),
  };

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
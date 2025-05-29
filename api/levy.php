<?php
// === 1. Check for cookie ===
if (!isset($_COOKIE['supabase_email'])) {
    echo "<h2 style='font-family:sans-serif;'>Not logged in. Please <a href='/login'>log in</a>.</h2>";
    exit;
}
$email = $_COOKIE['supabase_email'];

// === 2. Supabase config ===
$supabase_url = 'https://nztpgivnjthpgdaqijpx.supabase.co'; 
$supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dHBnaXZuanRocGdkYXFpanB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1Mjc3ODksImV4cCI6MjA2NDEwMzc4OX0.fnCaussQTDy_meyn514o75GoFs1-EfoVzMvhHeko_aU'; 

// === 3. Fetch user's data ===
$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => "$supabase_url/rest/v1/strata_roll?select=*&contact_email=eq.$email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        "apikey: $supabase_key",
        "Authorization: Bearer $supabase_key",
        "Content-Type: application/json"
    ]
]);
$user_response = curl_exec($ch);
curl_close($ch);
$user_data = json_decode($user_response, true);

// === 4. Fetch total entitlement using RPC ===
$rpc = curl_init();
curl_setopt_array($rpc, [
    CURLOPT_URL => "$supabase_url/rest/v1/rpc/get_total_entitlement",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        "apikey: $supabase_key",
        "Authorization: Bearer $supabase_key",
        "Content-Type: application/json"
    ]
]);
$rpc_response = curl_exec($rpc);
curl_close($rpc);
$total_entitlement = floatval(json_decode($rpc_response, true)[0]);

// === 5. Render output ===
echo "<style>
    body { font-family: sans-serif; padding: 2rem; }
    table { border-collapse: collapse; width: 100%; max-width: 700px; margin-top: 2rem; }
    th, td { padding: 12px; border: 1px solid #ccc; }
    th { background: #f0f0f0; text-align: left; }
</style>";

echo "<h1>Levy Details for $email</h1>";

if (!$user_data || count($user_data) === 0) {
    echo "<p>No record found for your email in <code>strata_roll</code>.</p>";
    exit;
}

$user = $user_data[0];
$entitlement = floatval($user['entitlement']);
$total_levy = 10000.00; // ← You can replace this with a dynamic field later
$owed = ($entitlement / $total_entitlement) * $total_levy;

// === 6. Display table ===
echo "<table>
<tr><th>Unit</th><th>Owner</th><th>Entitlement (%)</th><th>Total Owed ($)</th></tr>
<tr>
    <td>{$user['unit_number']}</td>
    <td>{$user['owner_name']}</td>
    <td>{$entitlement}</td>
    <td>" . number_format($owed, 2) . "</td>
</tr>
</table>";

echo "<p><a href='/'>⬅️ Back to Home</a></p>";
?>
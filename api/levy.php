<?php
if (!isset($_COOKIE['supabase_email'])) {
    echo "<h2 style='font-family:sans-serif;'>Not logged in. Please <a href='/login'>log in</a>.</h2>";
    exit;
}
$email = $_COOKIE['supabase_email'];

$supabase_url = 'https://nztpgivnjthpgdaqijpx.supabase.co';
$supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dHBnaXZuanRocGdkYXFpanB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1Mjc3ODksImV4cCI6MjA2NDEwMzc4OX0.fnCaussQTDy_meyn514o75GoFs1-EfoVzMvhHeko_aU';

$headers = [
    "apikey: $supabase_key",
    "Authorization: Bearer $supabase_key",
    "Content-Type: application/json"
];

// === Fetch user data
$user_url = "$supabase_url/rest/v1/strata_roll?select=*&contact_email=eq.$email";
$user_context = stream_context_create([
    'http' => [
        'method' => 'GET',
        'header' => implode("\r\n", $headers)
    ]
]);
$user_response = file_get_contents($user_url, false, $user_context);
$user_data = json_decode($user_response, true);

// === Fetch total entitlement via RPC (POST)
$rpc_url = "$supabase_url/rest/v1/rpc/get_total_entitlement";
$rpc_context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => implode("\r\n", $headers),
        'content' => '{}'  // must send empty JSON for Supabase RPC
    ]
]);
$rpc_response = file_get_contents($rpc_url, false, $rpc_context);
$rpc_data = json_decode($rpc_response, true);
$total_entitlement = floatval($rpc_data);

if ($total_entitlement == 0) {
    echo "<p>Error: Total entitlement returned is 0.</p>";
    echo "<pre>Raw response: " . htmlspecialchars($rpc_response) . "</pre>";
    exit;
}

// === Render Output
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
$total_levy = 10000.00;
$owed = ($entitlement / $total_entitlement) * $total_levy;

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

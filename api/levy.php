<?php
// === 1. Check for cookie-based login (used to simulate session auth) ===
if (!isset($_COOKIE['supabase_email'])) {
    // If no cookie, show error and prompt user to login
    echo "<h2 style='font-family:sans-serif;'>Not logged in. Please <a href='/login'>log in</a>.</h2>";
    exit;
}

// Retrieve the user's email from the cookie
$email = $_COOKIE['supabase_email'];

// === 2. Supabase project setup: Base URL and API key (Anon/public) ===
$supabase_url = 'https://nztpgivnjthpgdaqijpx.supabase.co';
$supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dHBnaXZuanRocGdkYXFpanB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1Mjc3ODksImV4cCI6MjA2NDEwMzc4OX0.fnCaussQTDy_meyn514o75GoFs1-EfoVzMvhHeko_aU'; 

// Prepare headers for API requests
$headers = [
    "apikey: $supabase_key",
    "Authorization: Bearer $supabase_key",
    "Content-Type: application/json"
];

// === 3. Fetch user data from Supabase using REST API ===
// GET all fields where contact_email matches the user's email
$user_url = "$supabase_url/rest/v1/strata_roll?select=*&contact_email=eq.$email";

// Create HTTP GET context
$user_context = stream_context_create([
    'http' => [
        'method' => 'GET',
        'header' => implode("\r\n", $headers)
    ]
]);

// Execute GET request and decode the JSON response
$user_response = file_get_contents($user_url, false, $user_context);
$user_data = json_decode($user_response, true);

// === 4. Fetch total entitlement using RPC endpoint ===
// This is a POST request to run the stored function get_total_entitlement()
// It returns sum(entitlement) from all rows in the database

$rpc_url = "$supabase_url/rest/v1/rpc/get_total_entitlement";

// Create HTTP POST context with empty JSON body
$rpc_context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => implode("\r\n", $headers),
        'content' => '{}'  // required: Supabase needs a body even if it's empty
    ]
]);

// Execute RPC call and parse numeric result
$rpc_response = file_get_contents($rpc_url, false, $rpc_context);
$rpc_data = json_decode($rpc_response, true);
$total_entitlement = floatval($rpc_data);

// Check for invalid result (e.g., Supabase downtime or bad function)
if ($total_entitlement == 0) {
    echo "<p>Error: Total entitlement returned is 0.</p>";
    echo "<pre>Raw response: " . htmlspecialchars($rpc_response) . "</pre>";
    exit;
}

// === 5. Output styles and heading ===
echo "<style>
    body { font-family: sans-serif; padding: 2rem; }
    table { border-collapse: collapse; width: 100%; max-width: 700px; margin-top: 2rem; }
    th, td { padding: 12px; border: 1px solid #ccc; }
    th { background: #f0f0f0; text-align: left; }
</style>";

// Title
echo "<h1>Levy Details for $email</h1>";

// Ensure the user exists in the table
if (!$user_data || count($user_data) === 0) {
    echo "<p>No record found for your email in <code>strata_roll</code>.</p>";
    exit;
}

// === 6. Levy calculation ===
// Calculate the proportion of total levy owed based on entitlement
$user = $user_data[0];
$entitlement = floatval($user['entitlement']);
$total_levy = 10000.00; // Fixed building levy
$owed = ($entitlement / $total_entitlement) * $total_levy;

// === 7. Render the results as an HTML table ===
echo "<table>
<tr><th>Unit</th><th>Owner</th><th>Entitlement (%)</th><th>Total Owed ($)</th></tr>
<tr>
    <td>{$user['unit_number']}</td>
    <td>{$user['owner_name']}</td>
    <td>{$entitlement}</td>
    <td>" . number_format($owed, 2) . "</td>
</tr>
</table>";

// Back link
echo "<p><a href='/'>⬅️ Back to Home</a></p>";
?>
export default function Home() {
  return (

    <div className="p-8">
      <h1 className="text-9xl font-bold mb-4">Welcome to Strata Management</h1>
      <p1 className="text-lg mb-4">This website helps manage the Owners Corporation for our building.</p1>
      <h2 className="text-2xl font-semibold mb-2">Comittee Roles</h2>
      <ol className="list-decimal list-inside">
        <li>Treasurer: Handles levies and funds</li>
        <li>Secretary: Records minutes</li>
        <li>Chairperson: Leads meetings</li>
      </ol>
    </div>
  )
}
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase'

export default function StrataRoll() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('strata_roll')
        .select('*')
        .order('unit_number', { ascending: true });

      if (error) console.error(error);
      else setRows(data);
    }

    fetchData();
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Strata Roll</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Unit Number</th>
            <th>Owner Name</th>
            <th>Contact Email</th>
            <th>Entitlement (%)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.unit_number}</td>
              <td>{r.owner_name}</td>
              <td>{r.contact_email}</td>
              <td>{r.entitlement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
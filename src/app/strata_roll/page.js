'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import Navbar from '../components/Navbar';

export default function StrataRoll() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('strata_roll') // ✅ correct table name
        .select('*')
        .order('unit_number', { ascending: true });

      if (error) {
        console.error('Supabase error:', error.message);
        console.error('Full error object:', error);
      } else {
        setRows(data);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero section */}
      <div className="bg-[url('/resources.jpg')] bg-cover bg-center relative min-h-[75vh] w-full text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        <div className="text-center px-4 z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Strata Roll
          </h1>
          <p className="text-lg">
            View ownership, contact info, and unit entitlements at a glance.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 py-16 w-full overflow-x-auto">
        <div className="min-w-[800px] max-w-6xl mx-auto">
          <table className="w-full border border-gray-300 rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 border-b">Unit Number</th>
                <th className="text-left p-3 border-b">Owner Name</th>
                <th className="text-left p-3 border-b">Contact Email</th>
                <th className="text-left p-3 border-b">Entitlement (%)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50 transition">
                  <td className="p-3 border-b">{r.unit_number}</td>
                  <td className="p-3 border-b">{r.owner_name}</td>
                  <td className="p-3 border-b">{r.contact_email}</td>
                  <td className="p-3 border-b">{r.entitlement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
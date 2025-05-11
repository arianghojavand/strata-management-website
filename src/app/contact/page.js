"use client";

import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* strata-landing background */}
      <div className="bg-[url('/contact.jpg')] bg-cover bg-center relative min-h-[75vh] w-full text-white flex items-center justify-center">

      {/* this is simple black overlay text */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      {/* main heading and subheading */}
        <div className="text-center px-4 z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-lg">
                Find our contact details below. We’re here to help you with any questions or concerns you may have.
          </p>
        </div>
      </div>

      {/* rest of body */}
      <div className="px-8 py-16 max-w-3xl mx-auto text-gray-700">
        <p className="text-gray-700 text-base leading-relaxed">
          
            Got a question or issue? We’re here to help. Reach out via email or phone and we’ll get back to you as soon as possible. <br />
            <br />
            <strong>Address:</strong> 123 Strata Lane, Sydney, NSW 2000 <br />
            <strong>Office Hours:</strong> Monday to Friday, 9 AM - 5 PM <br />
            <strong>Email:</strong> {process.env.NEXT_PUBLIC_CONTACT_EMAIL} <br />
            <strong>Phone:</strong> (02) 1234 5678 <br />

        </p>
      
      

      <form
        className="mt-10 space-y-6"
        onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);

            const res = await fetch("/api/submit-form", {
            method: "POST",
            body: formData,
            });

            if (res.ok) {
            alert("Form submitted successfully!");
            e.target.reset(); // clear the form
            } else {
            alert("Something went wrong. Please try again.");
            }
        }}
        >
        <div>
            <strong>Submit An Enquiry</strong> <br />
            <label className="block text-gray-700">Name</label>
            <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 p-2 rounded"
            />
        </div>

        <div>
            <label className="block text-gray-700">Lot/Unit Number</label>
            <input
            type="text"
            name="lot"
            required
            className="w-full border border-gray-300 p-2 rounded"
            />
        </div>

        <div>
            <label className="block text-gray-700">Problem Type</label>
            <select
            name="type"
            required
            className="w-full border border-gray-300 p-2 rounded"
            >
            <option value="">Select a problem</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electricity">Electricity</option>
            <option value="Noise">Noise</option>
            <option value="Structural">Structural</option>
            </select>
        </div>

        <div>
            <label className="block text-gray-700">Description</label>
            <textarea
            name="description"
            rows="4"
            required
            className="w-full border border-gray-300 p-2 rounded"
            ></textarea>
        </div>

        <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Submit
        </button>
        </form>

        </div>

    </>
  );
}
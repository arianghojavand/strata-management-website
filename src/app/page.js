import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* strata-landing background */}
      <div className="bg-[url('/strata-landing.jpg')] bg-cover bg-center relative min-h-[75vh] w-full text-white flex items-center justify-center">

      {/* this is simple black overlay text */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      {/* main heading and subheading */}
        <div className="text-center px-4 z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Welcome to Strata Management
          </h1>
          <p className="text-lg">
            This website helps manage the Owners Corporation for our building.
          </p>
        </div>
      </div>

      {/* rest of body */}
      <div className="px-8 py-16 max-w-3xl mx-auto">
        <p className="text-gray-700 text-base leading-relaxed text-justify">
          
          Welcome to Strata Management — a streamlined digital hub designed to simplify how you interact with your building’s Owners Corporation. Whether you're an owner, tenant, or committee member, this platform makes it easier to stay informed, connected, and in control. <br />
          <br />

          From reporting maintenance issues to accessing key documents, we've built this website to make strata communication more transparent and efficient. Instead of dealing with paperwork or chasing updates, you can now submit enquiries, view service details, and find contact information all in one place. <br />
          <br />

          Strata living should be stress-free — and that’s what we aim to provide. With a clean interface and responsive design, you can access the platform anytime, on any device. We believe managing shared spaces should be simple, reliable, and accessible for everyone. <br />
          <br />

        </p>
      </div>

    </>
  );
}
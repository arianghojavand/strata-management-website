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
        <p className="text-gray-700 text-base leading-relaxed">
          
          More info about the services, contact, etc.
        </p>
      </div>

    </>
  );
}
import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* strata-landing background */}
      <div className="bg-[url('/chombo.gif')] bg-cover bg-center relative min-h-[75vh] w-full text-white flex items-center justify-center">

      {/* this is simple black overlay text */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* main heading and subheading */}
        <div className="text-center px-4 z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Services
          </h1>
          <p className="text-lg">
            We’re a strata management company committed to smooth operations and community harmony.
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
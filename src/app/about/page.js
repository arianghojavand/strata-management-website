import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      {/* strata-landing background */}
      <div className="bg-[url('/about-us.jpg')] bg-cover bg-center relative min-h-[75vh] w-full text-white flex items-center justify-center">

      {/* this is simple black overlay text */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* main heading and subheading */}
        <div className="text-center px-4 z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            About Us
          </h1>
          <p className="text-lg">
            We’re a strata management company committed to smooth operations and community harmony.
          </p>
        </div>
      </div>

      {/* rest of body */}
      <div className="px-8 py-16 max-w-3xl mx-auto">
        <p className="text-gray-700 text-base leading-relaxed text-justify">
          
        <strong>Welcome to our strata management service!</strong>
        <br /> We specialize in managing residential buildings and ensuring smooth communication and operations for all owners and residents.

        With a focus on transparency, efficiency, and community well-being, our team is committed to delivering reliable administrative and maintenance support tailored to your building's needs.
        </p>
      </div>

    </>
  );
}
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
            We'll make your time stress free.
          </p>
        </div>
      </div>

      {/* rest of body */}
      <div className="px-8 py-16 max-w-3xl mx-auto">
        <p className="text-gray-700 text-base leading-relaxed text-justify">
          
          At Strata Management, we offer a wide range of services to ensure your building is maintained to the highest standard. From handling repair and maintenance requests to managing financial records and facilitating meetings, our goal is to provide seamless support for both residents and the Owners Corporation. <br />
        <br />
          
          We also oversee compliance with legal and safety regulations, maintain clear communication channels, and ensure the long-term value of your property. With our experienced team, you can be confident that your strata needs are managed professionally and efficiently.
        </p>
      </div>

    </>
  );
}
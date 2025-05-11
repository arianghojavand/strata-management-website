import Navbar from "../components/Navbar";

export default function Resources() {
  return (
    <>
      <Navbar />

      {/* strata-landing background */}
      <div className="bg-[url('/resources.jpg')] bg-cover bg-center relative min-h-[75vh] w-full text-white flex items-center justify-center">

      {/* this is simple black overlay text */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      {/* main heading and subheading */}
        <div className="text-center px-4 z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Resources
          </h1>
          <p className="text-lg">
            Here you can find all the resources you need to make your strata living experience smooth and enjoyable.
          </p>
        </div>
      </div>

      {/* rest of body */}
      <div className="px-8 py-16 max-w-3xl mx-auto">
        <p className="text-gray-700 text-base leading-relaxed">
          
          Access helpful documents, forms, and guides for your strata living experience. From maintenance requests to community rules, everything is just a click away.
            <br />
            <br />
        </p>

        <div className="flex justify-center">
        <ol className="list-decimal pl-6 space-y-2 text-gray-800">
        <li>
            <a href="/strata-management-act.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline">
            Strata Management Act
            </a>
        </li>
        </ol>
        </div>
      </div>

    </>
  );
}
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
      <div className="px-8 py-16 max-w-3xl mx-auto">
        <p className="text-gray-700 text-base leading-relaxed">
          
            Got a question or issue? We’re here to help. Reach out via email or phone and we’ll get back to you as soon as possible. <br />
            <br />
            <strong>Address:</strong> 123 Strata Lane, Sydney, NSW 2000 <br />
            <strong>Office Hours:</strong> Monday to Friday, 9 AM - 5 PM <br />
            <strong>Email:</strong> support@stratamanagement.com <br />
            <strong>Phone:</strong> (02) 1234 5678 <br />

        </p>
      </div>

    </>
  );
}
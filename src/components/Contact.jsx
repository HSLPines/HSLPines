
const Contact = () => {

  return (

    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">

      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">

        <h1 className="text-center text-5xl md:text-7xl md:text-9xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Get in touch</span>
        </h1>

        <p className="text-center text-lg font-semibold text-gray-500 md:text-2xl">
          Want to talk? Send me an e-mail through this button
        </p>

        <div className="flex items-center gap-4">

          <a

            href="mailto:hlecce.contato@gmail.com"
            className="text-nonwrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
          >
            Contact Me

          </a>
          
        </div>

      </div>

    </div>

  );

};

export default Contact;
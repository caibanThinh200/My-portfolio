interface ProcessProps {}

const Process: React.FC<ProcessProps> = () => {
  return (
    <section className="mr-48">
      <div>
        <p
          id="#process"
          className=" font-bold text-5xl sticky top-[30%] pl-5 py-5 border-l-4 border-l-blue-600"
        >
          Working process
        </p>
      </div>
      <div className="mt-10 space-y-36">
        {/* Website Development */}
        <div className="bg-[#252525] border  p-6 rounded-lg shadow-md relative lg:w-9/12">
          <div className="absolute top-full border-white w-1 h-36 border-l border-dashed left-1/2 -translate-x-1/2"></div>
          <h3 className="text-2xl text-white font-bold">Website Development</h3>
          <p className="mt-2 text-white">
            I build websites with responsives, perfect-pixels and user-friendly
            experiences that adapt to across all devices.
          </p>
        </div>

        {/* Web Design */}
        <div className="bg-[#252525] border  p-6 rounded-lg shadow-md relative lg:w-9/12 ml-auto">
          <div className="absolute top-full border-white w-1 h-36 border-l border-dashed left-1/2 -translate-x-1/2"></div>
          <h3 className="text-2xl text-white font-bold">
            Backend Developement
          </h3>
          <p className="mt-2 text-white">
            I can design your website from scratch. I create modern, simple, and
            user-friendly designs that match your brand and goals.
          </p>
        </div>

        {/* WordPress Development */}
        <div className="bg-[#252525] border  p-6 rounded-lg shadow-md relative lg:w-9/12">
          <h3 className="text-2xl text-white font-bold">
            WordPress Development
          </h3>
          <p className="mt-2 text-white">
            I build websites on WordPress, making them easy to update and
            manage. It’s a great choice for blogs, small businesses, or
            portfolios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;

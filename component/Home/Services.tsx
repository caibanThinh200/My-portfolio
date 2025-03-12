interface ServiceProps {}

const Service: React.FC<ServiceProps> = () => {
  return (
    <section className="mr-48">
      <div>
        <p
          id="#services"
          className=" font-bold text-5xl sticky top-[30%] pl-5 py-5 border-l-4 border-l-blue-600"
        >
          My services
        </p>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 gap-10">
        {/* Website Development */}
        <div className="bg-[#252525] border p-6 group rounded-lg shadow-md relative overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl text-white font-bold">
            Frontend Development
          </h3>
          <p className="mt-2 text-white">
            Build websites with responsives, perfect-pixels interface and
            user-friendly experiences that working across all devices.
          </p>
          <div
            // ref={overlayRef}
            className="absolute bg-gradient-to-b from-[transparent] group-hover:top-0 left-0 top-full from-20% to-white/40 size-full blur-3xl rounded-t-[100%]"
          ></div>
        </div>

        {/* Web Design */}
        <div className="bg-[#252525] border  p-6 rounded-lg shadow-md relative overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 ml-auto">
          <h3 className="text-2xl text-white font-bold">Backend Development</h3>
          <p className="mt-2 text-white">
            Design and build mantainance, scalable and optimized performance
            system with NodeJS.
          </p>
          <div
            // ref={overlayRef}
            className="absolute bg-gradient-to-b from-[transparent] -bottom-[300px] from-20% to-white/40 -left-1/3 size-full blur-3xl rounded-t-[100%]"
          ></div>
        </div>

        {/* WordPress Development */}
        <div className="bg-[#252525] border  p-6 rounded-lg shadow-md relative overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl text-white font-bold">Mobile Development</h3>
          <p className="mt-2 text-white">
            Creating user-friendly, and high-performance mobile applications for
            iOS and Android platforms.
          </p>
          <div
            // ref={overlayRef}
            className="absolute bg-gradient-to-b from-[transparent] -bottom-[300px] from-20% to-white/40 -left-1/3 size-full blur-3xl rounded-t-[100%]"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Service;

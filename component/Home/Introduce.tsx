import { ABOUTS } from "@/constant/data";

const Introduce = () => {
  return (
    <div className="flex gap-x-16 mt-[50vh] mr-36">
      <div className="w-1/3 pb-24">
        <p
          id="about"
          className="font-bold text-5xl sticky top-[30%] pl-5 py-5 border-l-4 border-l-blue-600 scroll-mt-36"
        >
          About me
        </p>
      </div>
      <div className="flex flex-col gap-y-[60vh] w-2/3">
        {ABOUTS.map((item) => (
          <div key={item.title}>
            <p className="text-[#FFEB00] font-bold text-3xl mb-5">
              {item.title}
            </p>
            <p className="text-xl">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduce;

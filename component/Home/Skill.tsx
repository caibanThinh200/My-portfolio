import { SKILLS } from "@/constant/data";
import Image from "next/image";

interface SkillProps {}

const Skill: React.FC<SkillProps> = () => {
  return (
    <section className="lg:mr-48">
      <div className="lg:w-1/3 pb-10">
        <h2
          id="skills"
          className="sticky top-[20%] pl-5 py-5 border-l-4 border-l-blue-600 scroll-mt-72"
        >
          My Skills
        </h2>
      </div>
      <div className="container">
        <div className="flex flex-col gap-20">
          <div className="flex gap-3 flex-wrap">
            {SKILLS.frontend.map((item, index) => (
              <p
                key={index}
                className="p-2 flex items-center font-medium gap-2 px-5 rounded-lg"
                style={{
                  color: item?.textColor || "#fff",
                  background: item?.color || "#FFEB00",
                }}
              >
                <Image
                  alt={item?.name}
                  src={item?.thumbnail}
                  width={10}
                  height={10}
                  className="h-[15px] w-auto"
                />{" "}
                {item?.name}
              </p>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            {SKILLS.backend.map((item, index) => (
              <p
                key={index}
                className="p-2 flex items-center font-medium gap-2 px-5 rounded-lg"
                style={{
                  color: item?.textColor || "#fff",
                  background: item?.color || "#FFEB00",
                }}
              >
                <Image
                  alt={item?.name}
                  src={item?.thumbnail}
                  width={10}
                  height={10}
                  className="h-[15px] w-auto"
                />{" "}
                {item?.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

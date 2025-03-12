interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <div>
      <div className="py-20 mr-48">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-10 w-1/2">
            <h1 className="font-bold text-5xl pl-5 py-5 border-l-4 border-l-blue-600">
              Contact
            </h1>
            <p className="text-white">
              If you have any questions or inquiries, please don't hesitate top
              contact me. I'm always open to new opportunities ands
              collaborations.
            </p>
          </div>
          <div className="w-1/2">
            <form className="flex flex-col gap-5 items-end">
              <input
                placeholder="Your name"
                className="bg-[#252525] outline-none p-3 pl-5 rounded-lg w-10/12 placeholder:text-white"
              />
              <input
                placeholder="Your email"
                className="bg-[#252525] outline-none p-3 pl-5 rounded-lg w-10/12 placeholder:text-white"
              />
              <input
                placeholder="Your phone number"
                className="bg-[#252525] outline-none p-3 pl-5 rounded-lg w-10/12 placeholder:text-white"
              />
              <textarea
                placeholder="Message you want to sent"
                rows={5}
                className="bg-[#252525] outline-none p-3 pl-5 rounded-lg w-10/12 placeholder:text-white"
              />
              <div>
                <button className="bg-blue-600 text-white p-3 px-10 rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

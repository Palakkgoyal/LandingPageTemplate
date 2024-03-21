const Footer = () => {
  return (
    <div className="bg-blue-900 text-white px-20 pt-20">
      <div className="flex max-w-[900px] mx-auto justify-between">
        <div>
          <h3 className="text-5xl mb-10 font-semibold w-[20ch]">
            You only have one chance to make a first impression.
          </h3>
          <p className="text-pink-400 text-lg">Let's make it amazing</p>
        </div>
        <div>
          <ul className="flex flex-col gap-2 text-lg font-semibold">
            <li className="cursor-pointer hover:underline">
              <a href="#">About Me</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Contact</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Projects</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">LinkedIn</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 flex justify-between py-8 border-t-2 border-blue-800 border-solid">
        <p>©2024 MIT</p>
        <a href="font-bold">Back to Top</a>
      </div>
    </div>
  );
};

export default Footer;

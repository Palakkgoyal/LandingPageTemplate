import { featureClickImg, featureHandImg, featureSolImg } from "../assets";

const data = [
  {
    src: featureClickImg,
    title: "User Interface",
    text: "We have already got a few ready made templates for better project management that you can use now",
    imgBgColor: "yellow",
  },
  {
    src: featureHandImg,
    title: "User Interface",
    text: "We have already got a few ready made templates for better project management that you can use now",
    imgBgColor: "blue",
  },
  {
    src: featureSolImg,
    title: "User Interface",
    text: "We have already got a few ready made templates for better project management that you can use now",
    imgBgColor: "pink",
  },
];

const Features = () => {
  return (
    <div className="p-20">
      <ul className="flex gap-10">
        {data.map((card, idx) => (
          <FeatureCard
            key={idx}
            src={card.src}
            title={card.title}
            text={card.text}
            imgBgColor={card.imgBgColor}
          />
        ))}
      </ul>
      <button className="mt-7 text-right block ml-auto text-blue-700 font-semibold">
        Contact Me
      </button>
    </div>
  );
};

const FeatureCard = ({ src, title, text, imgBgColor }) => {
  return (
    <li className="border feature-card border-solid border-slate-100 hover:shadow-2xl transition-all ease-in-out text-center px-8 shadow-md pb-16 pt-10 rounded-xl max-w-[400px]">
      <div className={`feature-image w-60 h-60 rounded-full p-8 mx-auto mb-6`}>
        <img src={src} alt="feature card image" className="w-full h-full" />
      </div>
      <h3 className="font-bold text-lg mb-8">{title}</h3>
      <p className="">{text}</p>
    </li>
  );
};

export default Features;

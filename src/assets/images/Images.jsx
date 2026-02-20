import patternImage from "../images/pattern.jfif";

export const PatternImg = () => {
  return (
    <>
      <img src={patternImage} alt="pattern-image" className="object-cover w-full h-full" />
    </>
  );
};

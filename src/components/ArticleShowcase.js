import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const showcaseData = [
  {
    title: "An expert cleaning service you can trust",
    description:
      "Rade integrated services Ltd is a team of specially trained and dedicated employees to provide professional service.",
    link: "/services",
    buttonText: "Learn More",
  },
  {
    title: "Best Cleaning Service Makes the difference",
    description:
      "Rade integrated services Ltd is a team of specially trained and dedicated employees to provide professional service.",
    link: "/services",
    buttonText: "Learn More",
  },
];

const ArticleShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseData.length);
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const { title, description, link, buttonText } = showcaseData[currentIndex];

  return (
    <div className="showcase" key={currentIndex}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to={link} className="btn">
        {buttonText}
      </Link>
    </div>
  );
};

export default ArticleShowcase;

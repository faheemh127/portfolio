// ...
"use client";
import { useState, useEffect } from "react";
const TIME_TO_FADE = 300;
const TIME_INTERVAL = 3000;
const TIME_PER_LETTER = 100;

const useTypingEffect = (
  text: string,
  duration: number,
  isTypeByLetter = false
) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const items = isTypeByLetter ? text.split("") : text.split(" ");

  useEffect(() => {
    setCurrentPosition(0);
  }, [text]);

  useEffect(() => {
    if (currentPosition >= items.length) return;

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + 1);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPosition, items, duration]);

  return items.slice(0, currentPosition).join(isTypeByLetter ? "" : " ");
};
const texts = [
  "High-performance React.js and Next.js web apps, crafted with precision and passion.",
  "I've worked with 20+ companies, helping them scale and increase their revenue.",
  "Started my web development journey in 2017 since then i have worked on dozens of web apps",
  "We can also use this effect to create a typing effect for our resume",
  "or for your blog",
  "or for your landing page",
  "let's go",
];
export const TextTypingEffectWithTextsFadeOut = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeText, setFadeText] = useState(true);
  const [fadeCircle, setFadeCircle] = useState(true);
  const textToShow = useTypingEffect(texts[textIndex], TIME_PER_LETTER, false);

  const timeToTypeText = texts[textIndex].split(" ").length * TIME_PER_LETTER;

  useEffect(() => {
    const circleTimeout = setTimeout(() => {
      setFadeCircle(false);
    }, timeToTypeText + 1000);

    const textTimeout = setTimeout(() => {
      setFadeText(false);

      setTimeout(() => {
        setTextIndex((prevIndex) =>
          prevIndex >= texts.length - 1 ? 0 : prevIndex + 1
        );
        setFadeCircle(true);
        setFadeText(true);
      }, TIME_TO_FADE);
    }, TIME_INTERVAL);

    return () => {
      clearTimeout(circleTimeout);
      clearTimeout(textTimeout);
    };
  }, [textIndex]);

  return (
    <>
      <div className="leading-20 mt-4 md:mt-8 md:min-h-[40px]">
        <span
          className={`inline-flex items-center  duration-300  font-medium text-pretty text-stone-200 sm:text-2xl/5 md:text-3xl mx-auto min-h-[5rem] md:min-h-0 leading-6 md:leading-6"  ${
            fadeText ? "opacity-1 translate-y-0" : "translate-y-2 opacity-0"
          }`}
          key={textIndex}
        >
          {textToShow}{" "}
          <div
            className={`ml-2 h-3 w-3 rounded-full bg-gray-300 duration-300 dark:bg-white ${
              fadeCircle ? "" : "h-0 w-0 opacity-0"
            }`}
          />
        </span>
      </div>
    </>
  );
};

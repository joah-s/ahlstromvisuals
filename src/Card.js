import React from 'react';

const Card = ({ link, header, subtext, imgSrc }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-white dark:bg-gray-800  hover:bg-gray-100  border-primary dark:border-primaryDark  border-t-4   dark:hover:bg-gray-800 rounded-2xl shadow-sm hover:shadow-2xl grid gap-4 p-8 md:p-10 relative duration-300 transform hover:-translate-y-2 hover:cursor-pointer">
        <img src={imgSrc} alt="" className="h-8 w-8 dark:invert" />
        <img src="/Resources/external-link.png" alt="" className="dark:invert h-6 w-6 opacity-70 hover:opacity-100 absolute top-4 right-4" />
        <p className="text-xl font-semibold text-textColor dark:text-white">{header}</p>
        <p className="text-sm mb-8 text-[#636262] dark:text-white">{subtext}</p>
      </div>
    </a>
  );
};

export default Card;
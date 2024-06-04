import React from 'react';

const Faq = () => {
  const questions = [
    {
      id: 1,
      question: "The Best Financial Accounting App Ever!",
      answer: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.”",
    },
    {
      id: 2,
      question: "The Best Financial Accounting App Ever!",
      answer: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.”",
    },
    {
      id: 3,
      question: "The Best Financial Accounting App Ever!",
      answer: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.”",
    },
    {
      id: 4,
      question: "The Best Financial Accounting App Ever!",
      answer: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.”",
    },
    {
      id: 5,
      question: "The Best Financial Accounting App Ever!",
      answer: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.”",
    },
    {
      id: 6,
      question: "The Best Financial Accounting App Ever!",
      answer: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.”",
    },
  ];

  return (
    <div id="faq" className="py-6 px-10 lg:px-20">
      <h3 className="uppercase w-full tracking-widest text-red-500 ml-1 mb-2 text-xl">faq</h3>
      <h1 className="text-4xl lg:text-7xl font-extrabold capitalize lg:w-1/2">frequently asked questions</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 w-full">
        {questions.map(({ id, question, answer }, index) => {
          const isLargeScreenEvenRow = Math.floor(index / 2) % 2 === 0;
          const isLargeScreenEvenCol = index % 2 === 0;
          const bgClassLargeScreen = (isLargeScreenEvenRow && isLargeScreenEvenCol) || (!isLargeScreenEvenRow && !isLargeScreenEvenCol)
            ? 'lg:bg-red-500 lg:text-white'
            : 'lg:bg-white lg:text-black';

          const bgClassSmallScreen = index % 2 === 0 ? 'bg-red-500 text-white' : 'bg-white text-black';

          return (
            <div
              key={id}
              className={`p-10 rounded-md ${bgClassSmallScreen} ${bgClassLargeScreen}`}
            >
              <h3 className="font-bold text-4xl mb-4">{question}</h3>
              <p className="text-xl tracking-wide">{answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;

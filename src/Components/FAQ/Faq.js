import React from 'react';
import FAQ from './FaqModel';

const faqData = [
  {
    question: 'Como faço para iniciar no React?',
    answer: 'dsa',
  },
  {
    question: 'Qual é a diferença entre state e props?',
    answer: 'dsa'
  },
];

function Faq() {
  return (
    <div>
      <FAQ faqData={faqData} />
    </div>
  );
}

export default Faq;

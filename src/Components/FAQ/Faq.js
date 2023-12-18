import React from 'react';
import FAQ from './FaqModel';

const faqData = [
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2'
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

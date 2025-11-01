import { useState } from 'react';

function AccordionItem({ faq }) {
  // Each item manages its own state, so multiple can be open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Question bar - this is the button to toggle state */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        // The rounded-lg will apply unless it's open, then it becomes rounded-t-lg
        className={`flex justify-between items-center w-full p-5 text-left font-semibold text-gray-800 transition-all duration-300 ${faq.color} ${isOpen ? 'rounded-t-lg' : 'rounded-lg hover:opacity-90'}`}
      >
        <span>{faq.question}</span>
        {/* Show + or - based on the isOpen state */}
        <span className="text-xl font-bold">{isOpen ? '−' : '+'}</span>
      </button>
      
      {/* Answer section - conditionally rendered */}
      {isOpen && (
        <div className={`p-5 rounded-b-lg ${faq.color} bg-opacity-50`}>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
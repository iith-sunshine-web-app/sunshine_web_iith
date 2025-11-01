import { faqs } from '../data/faqData.js';
import AccordionItem from '../components/AccordionItem.jsx';

function FAQPage() {
  // To match your design, we split the array into two columns
  const halfwayIndex = Math.ceil(faqs.length / 2);
  const column1Faqs = faqs.slice(0, halfwayIndex);
  const column2Faqs = faqs.slice(halfwayIndex);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title Section with decorative circles */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <span className="w-8 h-8 rounded-full bg-teal-300"></span>
        <h1 className="text-4xl font-bold text-gray-800">FAQ</h1>
        <span className="w-8 h-8 rounded-full bg-green-300"></span>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {/* Column 1 */}
        <div className="space-y-4">
          {column1Faqs.map(faq => (
            <AccordionItem key={faq.id} faq={faq} />
          ))}
        </div>
        {/* Column 2 */}
        <div className="space-y-4">
          {column2Faqs.map(faq => (
            <AccordionItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
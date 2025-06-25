
// import React, { useState } from 'react';


// function Frequently_Ask_Questions() {

//     const [openIndex, setOpenIndex] = useState(null);

//     const faqs = [
//         {
//             question: '1. How do I sign up as a donor or recipient?',
//             answer: 'Click the Sign Up button on the homepage and choose your role to create an account.'
//         },
//         {
//             question: '2. How can I request blood?',
//             answer: 'After signing in as a recipient, go to Request Blood, enter details, and submit your request.'
//         },
//         {
//             question: '3. Can I contact donors directly?',
//             answer: 'Yes, you can search for donors by blood type and contact them through their profile details.'
//         },
//         {
//             question: '4. How can I host a blood donation event?',
//             answer: 'Register your organization and create an event by providing date, location, and contact info.'
//         },
//         {
//             question: '5. Who can see my blood request?',
//             answer: 'All registered donors can see blood requests.'
//         },
//         {
//             question: '6. Is my personal information secure on this site?',
//             answer: 'Yes, we take data privacy seriously and only share necessary information for blood donation purposes.'
//         },
//         {
//             question: '7. What is the purpose of this website?',
//             answer: 'Our platform connects blood donors, recipients, and organizations to make blood donation easier and faster.'
//         },
//         {
//             question: '8. Do I need to be a registered user to access services?',
//             answer: 'Yes, creating an account allows you to request blood, donate, or post events.'
//         },
//         {
//             question: '9. How can I find nearby blood donors?',
//             answer: 'Use the search option to filter donors by blood group and location.'
//         },
//         {
//             question: '10. Can I donate blood more than once?',
//             answer: 'Yes, donors can donate multiple times. The system tracks your donation history.'
//         },
//     ];




//     const toggle = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };





//     return (
//         <div className="max-w-4xl mx-auto p-6 mt-20 font-nunito">
//             <h1 className="text-4xl font-bold text-center mb-6">
//                 <span className="text-our_red">Frequently</span> Asked Questions
//             </h1>
//             <p className="text-center text-gray-600 mb-12">
//                 Find answers to common questions about blood donation and how you can help.
//             </p>

//             <div className="space-y-4">
//                 {faqs.map((faq, index) => (
//                     <div
//                         key={index}
//                         className="border rounded-xl p-4 shadow-sm transition duration-300 bg-white"
//                     >
//                         <button
//                             className="w-full text-left font-semibold text-lg flex justify-between items-center"
//                             onClick={() => toggle(index)}
//                         >
//                             {faq.question}
//                             <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
//                         </button>
//                         {openIndex === index && (
//                             <div className="mt-2 text-gray-600">
//                                 {faq.answer}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Frequently_Ask_Questions;































import React, { useState } from 'react';

function Frequently_Ask_Questions() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: '1. How do I sign up as a donor or recipient?',
            answer: 'Click the Sign Up button on the homepage and choose your role to create an account.'
        },
        {
            question: '2. How can I request blood?',
            answer: 'After signing in as a recipient, go to Request Blood, enter details, and submit your request.'
        },
        {
            question: '3. Can I contact donors directly?',
            answer: 'Yes, you can search for donors by blood type and contact them through their profile details.'
        },
        {
            question: '4. How can I host a blood donation event?',
            answer: 'Register your organization and create an event by providing date, location, and contact info.'
        },
        {
            question: '5. Who can see my blood request?',
            answer: 'All registered donors can see blood requests.'
        },
        {
            question: '6. Is my personal information secure on this site?',
            answer: 'Yes, we take data privacy seriously and only share necessary information for blood donation purposes.'
        },
        {
            question: '7. What is the purpose of this website?',
            answer: 'Our platform connects blood donors, recipients, and organizations to make blood donation easier and faster.'
        },
        {
            question: '8. Do I need to be a registered user to access services?',
            answer: 'Yes, creating an account allows you to request blood, donate, or post events.'
        },
        {
            question: '9. How can I find nearby blood donors?',
            answer: 'Use the search option to filter donors by blood group and location.'
        },
        {
            question: '10. Can I donate blood more than once?',
            answer: 'Yes, donors can donate multiple times. The system tracks your donation history.'
        },
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 mx-auto py-10 sm:py-12 md:py-16 lg:py-20 font-nunito mt-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
                    <span className="text-our_red">Frequently</span> Asked Questions
                </h1>
                <p className="text-center text-xs sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12">
                    Find answers to common questions about blood donation and how you can help.
                </p>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm transition duration-300 bg-white hover:shadow-md"
                        >
                            <button
                                className="w-full text-left font-medium sm:font-semibold text-base sm:text-lg flex justify-between items-center"
                                onClick={() => toggle(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-${index}`}
                            >
                                <span className="text-left pr-4 text-xs md:text-lg">{faq.question}</span>
                                <span className="text-sm sm:text-sm text-our_red">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div
                                    id={`faq-${index}`}
                                    className="mt-2 sm:mt-3 text-xs md:text-lg text-gray-600"
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Frequently_Ask_Questions;
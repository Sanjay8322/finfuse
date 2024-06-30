import React, { useState,useEffect  } from 'react'
import { Minus,Plus } from 'lucide-react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsopen] = useState(false);
  useEffect(()=>{
    Aos.init({duration:1200})
  })
  return (
    <div className="max-w-xs" data-aos="fade-up">
      <div className="flex p-5 justify-between rounded-xl border border-grey-900 hover:bg-[#0c4b54]/30">
        <h2 className="text-black">{question}</h2>
        <button onClick={() => setIsopen(!isOpen)}>
          {isOpen ? <Minus color="#0c4b54" /> : <Plus color="#0c4b54" />}
        </button>
      </div>
      {isOpen && (
        <div className="bg-[#0c4b54] p-5 rounded-xl mt-2">
          <hr className="w-3/5 h-px bg-white border-0 my-1"></hr>
          <p className="text-white">{answer}</p>
        </div>
      )}
    </div>
  );
};



const FAQ = () => {
    const faqData = [
        {
          question: "How do I open an account with FinFuse?",
          answer: "Opening an account with FinFuse is quick and easy. Simply click on the 'Open an Account' button, follow the prompts, and provide the required information. We prioritize your security throughout.",
        },
        {
          question: "What kind of support does FinFuse offer?",
          answer: "FinFuse offers 24/7 customer support via chat, email, and phone to assist with any inquiries or issues.",
        },
        {
          question: "Are there any fees associated with FinFuse accounts?",
          answer: "FinFuse accounts are free to open, but certain transactions may incur fees. Please refer to our fee schedule for more details.",
        },
        {
          question: "What makes FinFuse different from other banks?",
          answer: "FinFuse offers unique features such as real-time transaction notifications, personalized financial insights, and an easy-to-use mobile app, setting it apart from traditional banks.",
        },
        {
          question: "How secure is my information with FinFuse?",
          answer: "We use advanced encryption and multi-factor authentication to ensure that your information is secure. Our security protocols are regularly updated to protect against emerging threats.",
        },
        {
          question: "Can I access my account on multiple devices?",
          answer: "Yes, you can access your FinFuse account on multiple devices, including your smartphone, tablet, and computer. Simply log in with your credentials to manage your account from anywhere.",
        },
        {
          question: "How can I set up alerts and notifications for my account?",
          answer: "You can set up alerts and notifications through the FinFuse mobile app or website. Customize your preferences to receive updates on account activity, transactions, and more.",
        },
        {
          question: "Can I link external accounts to FinFuse for a financial overview?",
          answer: "Yes, you can link external accounts to FinFuse. This allows you to get a comprehensive view of your finances in one place, making it easier to manage your money.",
        },
      ];
    
  return (
    <div className='flex flex-col justify-center items-center mt-10 lg:mt-20 mb-10 lg:mb-20'>
        <div className='text-center'>
            <h1 className='text-black font-semibold lg:text-4xl sm:text-5xl'>Frequently Asked Questions</h1>
            <p className='text-neutral-500 mt-5 mb-10'>Navigating common Queries to Ensure a Seamless Experience with FinFuse</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center p-5'>
            {faqData.map((item,index)=>(
                 <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
        
    </div>
  )
}

export default FAQ
import React from 'react'
import Faqlist from './Faqlist'
import { frequentlyAskedQuestions } from './Faqs'
import styling from './faq.module.css'



const FAQ = () => {
    const{faqContainerList,faqContainer}= styling
  return (
    <section className={faqContainer} >
        <h2>Frequently Asked Questions</h2>
        <div className={faqContainerList}>
        {frequentlyAskedQuestions.map((faq)=>(
            <Faqlist 
            id={faq.id}
            answer ={faq.answer}
            question={faq.question}
            status={faq.status}
            />

        ))}
        </div>
        

    </section>
    
  )
}

export default FAQ
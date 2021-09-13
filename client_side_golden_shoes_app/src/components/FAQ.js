
import './AccordionMenu.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FAQ = function() {

    const questionsAndAnswers = [
        {
            id: 1,
            heading: 'What?',
            content: 'yes'
        },
        {
            id:2,
            heading: 'Why?',
            content: 'no'
        }
    ];

    return (
        <div className='main-container'>
            <h1>FAQs</h1>
            <Accordion>
                {questionsAndAnswers.map((question) => {
                    return <AccordionItem key={question.id}>
                        <AccordionItemHeading className='accordion-question'>
                            <AccordionItemButton>
                                {question.heading}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='accordion-answer'>
                            {question.content}
                        </AccordionItemPanel>
                    </AccordionItem>
                })}
            </Accordion>
        </div>
    );
};

export default FAQ;
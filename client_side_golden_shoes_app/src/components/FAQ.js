
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
            heading: 'Has my order gone through OK?',
            content: 'We send a confirmation email to you as soon as your order is placed – this should arrive within a few minutes. If it doesn’t, check your ‘Junk’ folder in case it’s hiding away there. If you still don’t have it, get in touch with our Customer Experience Team and we can resend it to you. Don’t forget, if you have an account you can check the status of your order at any time too!'
        },
        {
            id:2,
            heading: 'Is your checkout secure?',
            content: 'We take online security very seriously and our site uses the latest online SSL encryption software to ensure your details are safe. When the browser bar changes from ‘http’ to ‘https’ and the locked padlock appears, this indicates you’re on a secure page.  We’re also enrolled in the MasterCard Securecode and Verified by Visa card payment protection schemes.'
        },
        {
            id:3,
            heading: 'How long will my order take?',
            content: 'It’s up to you! We believe in giving you options so you can decide on cost, speed and convenience – we’ve got a delivery option to suit everyone’s needs, including weekend delivery. For our full range of services, including delivery timescales and costs, visit our delivery info page.'
        },
        {
            id:4,
            heading: 'Can I track my order?',
            content: 'As soon as your order is despatched we’ll send you an email with a link to the courier’s website and tracking number to allow you to view up-to-date tracking on your order. If you haven’t received the email, check your ‘Junk’ folder, in case it’s hiding away there. If you’ve not received the email within a few hours, please contact us.'
        },
        {
            id:5,
            heading: 'Do you offer student discount?',
            content: "Yes we do! For a limited time only students get 10% discount on all purchases, including sale items*. Check out our student discount page for full info."

           
        }
    ];

    return (
        <div className='main-container faqs'>
            <h1>FAQs</h1>
            <Accordion>
                {questionsAndAnswers.map((question) => {
                    return <AccordionItem key={question.id}>
                        <AccordionItemHeading className='accordion-question'>
                            <AccordionItemButton>
                            &#43;{question.heading}
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
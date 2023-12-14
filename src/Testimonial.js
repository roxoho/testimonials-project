import { useState } from "react";
import "./style.css";


const Testimonial = () => {
    const [index, setIndex] = useState(0);
    
    const testimonials = [
        {
            quote: "Working with your team was an absolute pleasure. The attention to detail and commitment to excellence is unmatched. Thank you for a job well done!",
            author: "Mark Thompson"
        },
        {
            quote: "I was skeptical at first, but your product exceeded my expectations. It has truly made a difference in my daily life. Thank you for creating such a remarkable solution!",
            author: "Sophie Anderson"
        },
        {
            quote: "The level of professionalism and expertise your team demonstrated throughout the project was outstanding. I highly recommend your services to anyone in need of top-notch quality.",
            author: "Chris Roberts"
        },
        {
            quote: "The support I received from your customer service team was exceptional. They went above and beyond to address my concerns promptly and efficiently. Great job!",
            author: "Linda Carter"
        },
        {
            quote: "Your company's dedication to environmental sustainability is commendable. I'm proud to support a business that values the planet and takes tangible steps to make a positive impact.",
            author: "Alex Rodriguez"
        },
        {
            quote: "I've tried many products in the market, but yours stands out. The quality and innovation are evident. Keep up the fantastic work!",
            author: "Rachel Turner"
        },
        {
            quote: "The event you organized was a huge success. The seamless planning and execution left a lasting impression on everyone. Looking forward to future collaborations!",
            author: "Michael Davis"
        },
        {
            quote: "The team's creativity and attention to detail in designing our website were remarkable. Our online presence has never looked better. Thank you for bringing our vision to life!",
            author: "Caroline Miller"
        },
        {
            quote: "I can't thank you enough for the timely and efficient service. Your team went above and beyond to meet our tight deadline, and the results were beyond our expectations.",
            author: "Tom Anderson"
        },
        {
            quote: "Your dedication to customer satisfaction is evident in every interaction. The support I received from your team made me feel valued as a customer. Kudos to your excellent service!",
            author: "Jennifer Wilson"
        },
        {
            quote: "The training program your company provided was insightful and beneficial. The trainers were knowledgeable and engaging, making the learning experience enjoyable. Highly recommended!",
            author: "Robert Smith"
        },
        {
            quote: "I've been a loyal customer for years, and your consistently high-quality products keep me coming back. Thank you for maintaining such a standard of excellence!",
            author: "Emma Turner"
        },
        {
            quote: "The attention to detail in your product design is impressive. It's evident that your team is passionate about creating a product that not only looks great but also performs exceptionally well.",
            author: "Jason Harris"
        },
        {
            quote: "The level of professionalism and communication from your team exceeded our expectations. It was a pleasure working with a group that truly understands and values client satisfaction.",
            author: "Melissa Turner"
        },
        {
            quote: "Your commitment to community outreach and charitable initiatives is truly inspiring. It's refreshing to see a company actively contributing to make the world a better place.",
            author: "Daniel Martin"
        },
        {
            quote: "The user-friendly interface of your software made a significant difference in our day-to-day operations. It has streamlined our processes and increased overall efficiency. Thank you for a fantastic product!",
            author: "Grace Turner"
        },
        {
            quote: "The attention to detail and personalized service we received from your team made our special event unforgettable. Thank you for going above and beyond to make it a memorable experience!",
            author: "William Carter"
        },
        {
            quote: "I appreciate the transparency and honesty of your business practices. It's refreshing to work with a company that values integrity and places a high priority on ethical standards.",
            author: "Laura Davis"
        },
        {
            quote: "Your commitment to innovation and staying ahead of industry trends is evident in your products. It's reassuring to know that I can trust your brand to deliver cutting-edge solutions.",
            author: "Steven Turner"
        },
        {
            quote: "The efficiency and professionalism of your delivery service were outstanding. The product arrived well-packaged and on time. Thank you for making the entire purchasing process hassle-free!",
            author: "Nancy Harris"
        }
    ];
    
    function handlenextclick() {
        setIndex((index + 1) % testimonials.length);
    }
    function handleprevclick() {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(testimonials.length - 1);
        } else {
            setIndex(nextIndex);
        }
    }
  return (
    <div className="testimonials">
        <div className="testimonials-quote">
            {testimonials[index].quote}
        </div>
        <div className="testimonials-author">
            - {testimonials[index].author}
        </div>
        <testimonials className="testimonials-nav">
            <button onClick={handleprevclick}>Prev</button>
            <button onClick={handlenextclick}>Next</button>
        </testimonials>
    </div>
  )
}

export default Testimonial
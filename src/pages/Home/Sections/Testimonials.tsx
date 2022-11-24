import { useLayoutEffect, useState } from "react";

/* eslint-disable */
const fakeData: TestimonialType[] = [
    {
        testimonial: `We started IDS to bring together all the students who want to make a change in ourenvironment. We encourage every student to join regardless of their faculty!`,
        image: require("../../../static/images/avatars/person5.png"),
        author: "Ashwin1",
        role: "Leader",
    },
    {
        testimonial: `We started IDS to bring together all the students who want to make a change in our
    environment. We encourage every student to join regardless of their faculty!`,
        image: require("../../../static/images/avatars/person5.png"),
        author: "Ashwin2",
        role: "Leader",
    },
    {
        testimonial: `We started IDS to bring together all the students who want to make a change in our
    environment. We encourage every student to join regardless of their faculty!,`,
        image: require("../../../static/images/avatars/person5.png"),
        author: "Ashwin3",
        role: "Leader",
    },
];

export default function Testimonials() {
    useLayoutEffect(() => {
        $(".testimonials")
            .not(".slick-initialized")
            .slick({
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                pauseOnFocus: false,
                autoplaySpeed: 1500,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            arrows: false,
                            dots: true,
                        },
                    },
                ],
            });
    });
    const [testimonials, setTestimonials] = useState<TestimonialType[]>(fakeData);
    return (
        <section id="testimonials" className="s-clients">
            <div className="row section-header" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">Testimonials</h3>
                </div>
            </div>

            <div className="row clients-testimonials" data-aos="fade-up">
                <div className="col-full">
                    <div className="testimonials">
                        {testimonials.map((item) => (
                            <Testimonial key={item.author} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
type TestimonialType = {
    testimonial: string;
    image: string;
    author: string;
    role: string;
};
function Testimonial({ testimonial, image, author, role }: TestimonialType) {
    return (
        <div className="testimonials__slide">
            <p>{testimonial}</p>

            <img src={image} alt="Testimonial Author" className="testimonials__avatar" />
            <div className="testimonials__info">
                <span className="testimonials__name">{author}</span>
                <span className="testimonials__pos">{role}</span>
            </div>
        </div>
    );
}

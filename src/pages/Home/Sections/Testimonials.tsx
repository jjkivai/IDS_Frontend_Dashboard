import { useLayoutEffect, useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";

import { testimonials as initialData } from "./defaultData";

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
    useLayoutEffect(() => {
        if (testimonials.length > 0) {
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
        }
    });
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setTestimonials(initialData); // remove when setup
        // axios
        //     .get<TestimonialType[]>("testimonial")
        //     .then((res) => res.data)
        //     .then((data) => {
        //         setTestimonials(data);
        //     })
        //     .catch((error) => {
        //         console.error(error);

        //         // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        //         setTestimonials(initialData);
        //     });
    }, []);
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
    image: string | typeof import("*.png") | undefined;
    author: string;
    role: string;
};
function Testimonial({ testimonial, image, author, role }: TestimonialType) {
    return (
        <div className="testimonials__slide">
            <p>{testimonial}</p>
            {/* @ts-ignore */}
            <img src={image} alt="Testimonial Author" className="testimonials__avatar" />
            <div className="testimonials__info">
                <span className="testimonials__name">{author}</span>
                <span className="testimonials__pos">{role}</span>
            </div>
        </div>
    );
}

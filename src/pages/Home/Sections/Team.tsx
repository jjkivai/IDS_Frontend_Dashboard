import { useLayoutEffect, useState } from "react";
/* eslint-disable */
const initialData: Member[] = [
    {
        name: "Sayra",
        position: "Founder",
        image: require("../../../static/images/avatars/person5.png"),
    },
    {
        name: "Ashwin",
        position: "Founder",
        image: require("../../../static/images/avatars/person5.png"),
    },
    {
        name: "Eric",
        position: "Founder",
        image: require("../../../static/images/avatars/person5.png"),
    },
    {
        name: "Alexis",
        position: "Founder",
        image: require("../../../static/images/avatars/person5.png"),
    },
    {
        name: "Prachi",
        position: "Founder",
        image: require("../../../static/images/avatars/person5.png"),
    },
];
export default function Team() {
    useLayoutEffect(() => {
        /* eslint-disable */

        $(".team")
            .not(".slick-initialized")
            .slick({
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 2,
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
    const [members, setMembers] = useState<Member[]>(initialData);
    return (
        <section id="team" className="s-clients">
            <div className="row section-header" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead">Our Team</h3>
                    <h1 className="display-2">Meet group of unique individuals that made this club possible</h1>
                </div>
            </div>

            <div className="row clients-team" data-aos="fade-up">
                <div className="col-full">
                    <div className="team">
                        {members.map((member) => (
                            <Member key={member.name} {...member} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
type Member = {
    image: string;
    name: string;
    position: string;
};
function Member({ image, name, position }: Member) {
    return (
        <div className="team__slide">
            <img src={image} alt="Author" className="team__avatar" />
            <div className="team__info">
                <span className="team__name">{name}</span>
                <span className="team__pos">{position}</span>
            </div>
        </div>
    );
}

import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { Waypoint } from "react-waypoint";
import axios from "axios";

type AboutData = {
    members: number;
    partners: number;
    faculty: number;
    meetingsDone: number;
};
const fakeData: AboutData = { members: 102, partners: 4, faculty: 3, meetingsDone: 46 };

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const [hasCounted, sethasCounted] = useState(false);
    const [data, setData] = useState<AboutData>(fakeData);
    useEffect(() => {
        axios
            .get<AboutData[]>("about")
            .then((res) => res.data)
            .then((data) => {
                setData(data[0]);
            })
            .catch((err) => {
                console.log(err);
                setData(fakeData);
            });
    }, []);
    // use this unless other counts are needed
    // eslint-disable-next-line
    const countNumbers = (_args: Waypoint.CallbackArgs) => {
        Array.from(ref.current?.getElementsByClassName("stats__count")!).forEach((element) => {
            const $this = $(element);
            $({ Counter: 0 }).animate(
                { Counter: $this.text() },
                {
                    duration: 2000,
                    easing: "swing",
                    step: (curValue: number) => {
                        $this.text(Math.ceil(curValue));
                    },
                }
            );
        });
        sethasCounted(true);
    };
    return (
        <section id="about" className="s-about target-section">
            <div className="row section-header has-bottom-sep" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead subhead--dark">About Us</h3>
                    <h1 className="display-1 display-1--light">Innovate, Design, Sustain</h1>
                </div>
            </div>
            <div className="row about-desc" data-aos="fade-up">
                <div className="col-full">
                    <p>
                        IDS is UBC Okanagan's first sustainability-focused design club. IDS's roots stem from three core
                        concepts- Innovate, Design and Sustain and use science, engineering and creativity for the
                        betterment of our present and future Okanagan Campus.
                    </p>
                </div>
            </div>
            <div className="row services-list block-1-3 block-tab-full">
                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-paint-brush" />
                    </div>
                    <div className="service-text">
                        <h3 className="h2">Innovate</h3>
                        <p>
                            Demonstrate out of the box thinking while understanding the diverse perspectives of all
                            relevant stakeholders.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-group" />
                    </div>
                    <div className="service-text">
                        <h3 className="h2">Design</h3>
                        <p>
                            Utilize existing coursework knowledge to apply and design solutions in a safe ethical and
                            inclusive manner.
                        </p>
                    </div>
                </div>

                <div className="col-block service-item" data-aos="fade-up">
                    <div className="service-icon">
                        <i className="icon-megaphone" />
                    </div>
                    <div className="service-text">
                        <h3 className="h2">Sustain</h3>
                        <p>
                            Source components and other materials that are future-ready and environment friendly for our
                            growing campus needs.
                        </p>
                    </div>
                </div>
            </div>
            <Waypoint onEnter={!hasCounted ? countNumbers : () => {}}>
                <div
                    className="row about-stats stats block-1-4 block-m-1-2 block-mob-full"
                    data-aos="fade-up"
                    ref={ref}
                >
                    <div className="col-block stats__col">
                        <div className="stats__count">{data.members}</div>
                        <h5>Members</h5>
                    </div>
                    <div className="col-block stats__col">
                        <div className="stats__count">{data.partners}</div>
                        <h5>Partners</h5>
                    </div>
                    <div className="col-block stats__col">
                        <div className="stats__count">{data.faculty}</div>
                        <h5>Faculty Support</h5>
                    </div>
                    <div className="col-block stats__col">
                        <div className="stats__count">{data.meetingsDone}</div>
                        <h5>Meetings Completed</h5>
                    </div>
                </div>
            </Waypoint>
            {/* end about-stats  */}

            <div className="about__line" />
        </section>
    );
}

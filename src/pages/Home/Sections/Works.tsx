import { useEffect, useState } from "react";
import axios from "axios";
// import * as Masonry from "masonry-layout";
import "imagesloaded";
// import * as Parallax from "jquery-parallax.js"

/* eslint-disable */
type Project = {
    title: string;
    link: string;
    image: string;
    docLink?: string;
    description: string;
    caption?: string;
};

const fakeData: Project[] = [
    {
        title: "Solar Bench Project",
        link: "/solar_bench",
        image: "../../../static/images/portfolio/gallery/solar_bench.png",
        docLink:
            "https://docs.google.com/presentation/d/1SNtXMcVFSYvDvYd1gbPlbcELS1MevdR-yTPqgnv6i48/edit#slide=id.g35f391192_00",
        description: "Implementing Solar Benches on Campus",
        caption: `IDS has realized that there is a lack of available renewable energy
        resources for student use on the UBCO campus. As a result of this, IDS is
        proposing the Solar Bench Project; the objective of this project is to
        design and implement sustainable solar benches on campus which will act as
        seating and charging stations.`,
    },
    {
        title: "Campus Waste Initiaive",
        link: "/cwi",
        image: "../../../static/images/portfolio/gallery/cwi.png",
        description: "Waste Management around University Campus",
    },
    {
        title: "Solar Decathelon",
        link: "https://www.solardecathlon.gov/",
        image: "../../../static/images/portfolio/gallery/sd.jpg",
        description: "The solar decathelon competition",
    },
];

export default function Works() {
    const [data, setData] = useState<Project[]>([]);
    useEffect(() => {
        axios
            .get<Project[]>("project")
            .then((res) => res.data)
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error(error);
                setData(fakeData);
            });
    }, []);
    return (
        <section id="works" className="s-works">
            <div className="intro-wrap">
                <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead">Recent Projects</h3>
                        <h1 className="display-2 display-2--light">
                            We love what we do, check out some of our latest Projects
                        </h1>
                    </div>
                </div>
            </div>

            <div className="row works-content">
                <div className="col-full masonry-wrap">
                    <div className="masonry">
                        {data.map((item) => (
                            <ProjectRender key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectRender({ link, title, image, description, docLink, caption }: Project) {
    return (
        <div className="masonry__brick" data-aos="fade-up">
            <div className="item-folio">
                <div className="item-folio__thumb">
                    <a href={link} target="_blank" className="thumb-link" title={title} data-size="1800x1800">
                        <img
                            /* eslint-disable */
                            src={image}
                            alt=""
                            height="auto"
                            width="100%"
                        />
                    </a>
                </div>

                <div className="item-folio__text">
                    <h3 className="item-folio__title">{title}</h3>
                    <p className="item-folio__cat">{description}</p>
                </div>
                {docLink && (
                    <a href={docLink} className="item-folio__project-link" title="Project link">
                        <i className="icon-link" />
                    </a>
                )}
                {caption && (
                    <div className="item-folio__caption">
                        <p>{caption}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

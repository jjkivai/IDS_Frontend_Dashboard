import { useEffect, useState } from "react";
import axios from "axios";
// import * as Masonry from "masonry-layout";
import "imagesloaded";
// import * as Parallax from "jquery-parallax.js"
import { projects as fakeData } from "./defaultData";
/* eslint-disable */
type Project = {
    title: string;
    link: string;
    image: string | typeof import("*.png") | undefined;
    docLink?: string;
    description: string;
    caption?: string;
};

export default function Works() {
    // const [data, setData] = useState<Project[]>([]);
    const [data, setData] = useState<Project[]>([]);
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setData(fakeData);
        //     axios
        //         .get<Project[]>("project")
        //         .then((res) => res.data)
        //         .then((data) => {
        //             setData(data);
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //             setData(fakeData);
        //         });
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
                            /* eslint-disable*/
                            /* @ts-ignore */
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

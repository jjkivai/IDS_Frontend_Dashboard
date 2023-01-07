import { Helmet } from "react-helmet-async";

export default function CampusWaste() {
    return (
        <>
            <Helmet>
                <style type="text/css" media="screen">
                    {`.s-styles {
        background: white;
        padding-top: 15rem;
        padding-bottom: 12rem;
      `}
                </style>
            </Helmet>
            <section id="styles" className="s-styles">
                <div className="row narrow section-intro add-bottom text-center">
                    <div className="col-twelve tab-full">
                        <h1 className="display-2">Campus Waste Initiative</h1>

                        <p className="lead">
                            This project aims to address the existing waste management problems on campus, find design
                            solutions and raise awareness around campus waste management around University Campus. CWI
                            has 2 projects that aims to resolve these major problems.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-six tab-full">
                        <h3>Placing stickers on campus products</h3>

                        <p>
                            <img
                                width="120"
                                height="120"
                                className="pull-left"
                                alt="Recycle"
                                /* eslint-disable */
                                src={require("../../static/images/portfolio/gallery/sticker.png")}
                            />
                            <strong>Explanation:</strong> The idea is to have stickers on campus products with the same
                            color as the assigned waste bin. This will allow us remove the pressure of throwing waste
                            properly off of students and staff as it has been predetermined by the seller (food service,
                            vendors, etc.)
                        </p>

                        <p>
                            <strong>Design and Specifications:</strong> A simple circle shaped sticker is enough. The
                            circle shaped sticker will have the same color as its intended waste bin and will be small
                            enough that it will not be aesthetically unpleasant, but distinct enough that people will
                            notice its presence.
                        </p>

                        <p>
                            <strong>Methodology:</strong> Stickers will be printed and given to campus representatives
                            (food service, etc.). Before products are given to buyers or displayed, stickers can be put
                            on the product to indicate which waste bin it should go if it is intended to be thrown out.
                        </p>

                        <div className="tab-full">
                            <h3>Steps that need to be taken</h3>

                            <ol>
                                <li>Identify the colors of the waste bins.</li>
                                <li>Either design our own stickers or purchase existing stickers.</li>
                                <li>
                                    Contact UBCO representatives (food services, etc.) and propose the idea. Ask to see
                                    if they are willing to do the extra work.
                                </li>
                                <li>Put stickers on campus products.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="col-six tab-full">
                        <h3>Posters near bins colormaps and nearest location of other bins</h3>

                        <p className="drop-cap">
                            We notice how on campus there are the complete waste bins (waste, recycling, compost, etc.)
                            as well as the gray bins. Our primary goal is to have consistent waste bins graphic all
                            around campus. However, if this could not be achieved, and we still have single gray bins
                            around (especially at places with no high waste demand, etc.), we can provide a poster on
                            each gray bins, informing people what can be thrown here (to minimize waste contamination),
                            and provide a colormap and information on the nearest location of the complete waste bins.
                            That said, to have this idea as effective as possible, we would like to also propose having
                            at least one complete waste bin in every building, located in the most populated area.
                        </p>

                        <p>
                            <strong>Design and Specifications:</strong> Images/icons of the accepted waste will be
                            shown. Text and a colormap showing the nearest location of the main waste bin in the
                            specific building will also be included.
                        </p>

                        <p>
                            <strong>Methodology:</strong> Put posters on top of every gray bin for people to see before
                            throwing their garbage.
                        </p>
                    </div>
                    <div className="tab-full">
                        <h3>Steps that need to be taken</h3>

                        <ol>
                            <li>
                                Propose the idea and wait to see if the idea to have at least one complete waste bin in
                                every building around campus is approved. Identify the most populated area of each
                                building.
                            </li>
                            <li>
                                If approved, design the graphic with pictures of acceptable waste and information
                                regarding the nearest location of the main waste bin.
                            </li>
                        </ol>
                    </div>
                </div>
                {/* <!-- end row --> */}

                {/* <!-- end row --> */}
            </section>
        </>
    );
}

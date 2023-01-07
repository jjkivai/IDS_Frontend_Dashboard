import { Helmet } from "react-helmet-async";

export default function SolarBench() {
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
                        <h1 className="display-2">Solar Bench Project</h1>

                        <p className="lead">
                            IDS has realized that there is a lack of available renewable energy resources for student
                            use on the UBCO campus. As a result of this, IDS is proposing the Solar Bench Project; the
                            objective of this project is to design and implement sustainable solar benches on campus
                            which will act as seating and charging stations.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-six tab-full">
                        <h3>Goals</h3>

                        <p>
                            <img
                                width="120"
                                height="120"
                                className="pull-left"
                                alt="Solar Bench"
                                /* eslint-disable */
                                src={require("../../static/images/portfolio/gallery/solar_bench.png")}
                            />
                            The basic deliverables of this project include an off-grid solar panel system design, a
                            bench with structural integrity, and an overall structure that follows UBCO guidelines and
                            policies. The benches must be able to charge electronic devices (laptops, phones, etc.)
                            during all seasons of the year. A pilot solar bench will be implemented after initial
                            designs are complete and, after adjustments, more solar benches will be implemented in
                            multiple high-traffic locations around campus.
                        </p>

                        <p>
                            <strong>Material Considerations</strong> While complying with the UBCO design guidelines,
                            resysta is a wood substitute made if abundant by-product rice farming, which means it
                            reduces waste and is biodegradable. It is also a high-density material, meaning it is
                            resistant to rain, and does not swell or splinter. It is also durable and can handle forces
                            greater than that of wood.
                        </p>
                        <div className="row add-bottom">
                            <div className="col-twelve">
                                <h3>Material Consideration Table</h3>

                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th />
                                                <th>Resysta</th>
                                                <th>Ash Wood</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Density(g/cm^3)</td>
                                                <td>1.46</td>
                                                <td>0.6</td>
                                            </tr>
                                            <tr>
                                                <td>Hardness (N/mm^2)</td>
                                                <td>81.1</td>
                                                <td>44.0</td>
                                            </tr>
                                            <tr>
                                                <td>Bending Strength (MPa)</td>
                                                <td>46</td>
                                                <td>62.7</td>
                                            </tr>
                                            <tr>
                                                <td>Tensile Strength (MPa)</td>
                                                <td>21</td>
                                                <td>6.5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-six tab-full">
                        <h3>Electrical Design</h3>

                        <p className="drop-cap">
                            We have chosen to go with an off-grid electrical solar system in order to incorporate a
                            modular design that can be moved around the campus while also taking into consideration the
                            simplicity of our needs. <br />
                            The electrical system design consists of various key components that will allow us to
                            harness the generated power from the panel and store it in a battery. The battery storage
                            also acts as a standby in the night when there is no power generation through the panel.
                            Component ratings were decided based on comparison between panel configuration and power
                            requirement.
                        </p>

                        <div className="row half-bottom">
                            <div className="tab-full">
                                <h3>Components</h3>

                                <dl>
                                    <dt>
                                        <strong>Solar Panel - HQST 100W</strong>
                                    </dt>
                                    <dd>
                                        Common solar panel manufacturers panel’s were assessed for efficiency, build
                                        quality, racking support, customer reviews as well as price. Standout panels
                                        were
                                        <strong>Renogy 100 W</strong> Solar Panel as well as the
                                        <strong>HQST 100 W</strong> solar panel. Both panels are virtually identical
                                        while HQST provides the panel at a lower cost.
                                    </dd>
                                    <dt>
                                        <strong>Charge Controller - Rich Solar 20 Amp-12/24V MPPT</strong>
                                    </dt>

                                    <dd>
                                        Preliminary research was carried out on advantages of
                                        <strong>MPPT</strong> vs <strong>PWM</strong> charge controllers for long term
                                        temperature variant based applications. It was concluded that Rich Solar
                                        provides a competitively priced <strong>MPPT</strong> for our needs that
                                        supports upgauging at the input terminals while also providing a screen to view
                                        our system’s performance.
                                    </dd>

                                    <dt>
                                        <strong>Battery - 70Ah Lead-Acid </strong>
                                    </dt>

                                    <dd>
                                        Comparisons were made between lead-acid and lithium iron phosphate batteries.
                                        Lithium iron phosphate has many advantages (High DOD, High efficiency, long
                                        lifespan), however it is quite expensive in comparison to Lead-acid. Lead-acid
                                        was chosen for the pilot bench while lithium iron phosphate is an option for
                                        large scale implementation of benches on campus.
                                    </dd>

                                    <dt>
                                        <strong>Copper wire connectors </strong>
                                    </dt>

                                    <dd>
                                        6 or 10 AWG copper wire is recommended based on our system ratings. This will
                                        allow us to cut down on losses. Readily available at stores like Home Depot.
                                    </dd>

                                    <dt>
                                        <strong>Fuses </strong>
                                    </dt>

                                    <dd>Bolt down 20 Amp fuse was chosen based on charge controller output rating.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end row --> */}
            </section>
        </>
    );
}

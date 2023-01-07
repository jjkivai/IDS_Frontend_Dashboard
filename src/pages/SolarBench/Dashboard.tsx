import { Helmet } from "react-helmet-async";

export default function Dashboard() {
    return (
        <>
            <Helmet>
                <style type="text/css" media="screen">
                    {`.s-frame {
                        padding-top: 15rem;
                        padding-bottom: 12rem;
                        height: 100vh
                    `}
                </style>
            </Helmet>
            <section className="row s-frame">
                <iframe
                    className="col-12"
                    title="IDS_Dashboard"
                    src="https://isshah10.grafana.net/goto/nMChyKOVk?orgId=1"
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    sandbox="allow-same-origin allow-scripts"
                />
            </section>
        </>
    );
}

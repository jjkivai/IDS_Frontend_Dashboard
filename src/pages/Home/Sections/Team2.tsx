import React from "react";
import $ from "jquery";
import axios from "axios";
/* eslint-disable */
const initialData: MemberType[] = [
    {
        name: "Sayra Gorgani",
        position: "Founder",
        image: require("../../../static/images/avatars/person5.png"),
    },
    {
        name: "Ashwin Ramesh",
        position: "Co-Founder",
        image: require("../../../static/images/avatars/person7.png"),
    },
    {
        name: "Eric Laksmono",
        position: "Co-Founder",
        image: require("../../../static/images/avatars/person5.png"),
    },
    {
        name: "Alexis Guidi",
        position: "Co-Founder",
        image: require("../../../static/images/avatars/person3.png"),
    },
];

export class Team extends React.Component<{}, { members: MemberType[] }> {
    constructor({}) {
        super({});
        this.state = { members: [] };
        this.loadMembers = this.loadMembers.bind(this);
    }
    loadMembers() {
        axios
            .get<MemberType[]>("people")
            .then((res) => res.data)
            .then((data) => {
                this.setState({ members: data });
            })
            .catch((error) => {
                console.error(error);

                this.setState({ members: initialData });
            });
    }

    render(): React.ReactNode {
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
                            {this.state.members.map((member: MemberType) => (
                                <Member key={member.name} {...member} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

type MemberType = {
    image: string;
    name: string;
    position: string;
};
function Member({ image, name, position }: MemberType) {
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

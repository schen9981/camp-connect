import React from "react"
import "./Inclusivity.css"

import Donate from "./Donate"
import { timingSafeEqual } from "crypto";

type InclusivityPageProps = {

};

type InclusivityPageState = {
    displayModal: string;
};

export default class Inclusivity extends React.Component<InclusivityPageProps, InclusivityPageState> {
    constructor(props: InclusivityPageProps) {
        super(props);
        this.state = {
            displayModal: "none"
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        if (this.state.displayModal === 'none') {
            this.setState({displayModal: "block"});
        }
        if (this.state.displayModal === 'block') {
            this.setState({displayModal: 'none'});
        }
    }



    render() {
        return (
            <div className="InclusivityContainer">
                <div className="InclusivityInfo">
                    <h1>Inclusivity</h1>
                    <p>We are a group of college students working throughout this summer to startup this business.
                       We have our set price to compensate our staff who have been working daily on this project. We
                       do recognize the financial stress families are facing right now, and do not want to limit access
                       to our program by any means. For this reason, if you feel as though you don't have the means
                       to pay for our service, we invite you to reach out in order to recieve free access to our courses.
                    </p>
                    <p>For families who are willing to donate to our organization, funds will go to subsidize other
                       students and provie materials. All contributions are appreciated, and we thank you.
                    </p>
                    <button className="DonateButton" type="button" onClick={this.clickHandler}>Donate Here</button>
                </div>
                <div className="EmailList">
                    <p>Not sure yet? Join our email list to stay in the loop!</p>
                    <div className="EmailListForm">
                        <div>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="example@email.com" />
                        </div>
                        <button className="EmailListSubmit" type="button">Submit</button>
                    </div>
                </div>
                <div style={{display: this.state.displayModal}} className="DonationModal">
                    <Donate click={this.clickHandler}/>
                </div>
            </div>
        )
    }

      
}
import React from "react"
import "./Inclusivity.css"

import Donate from "./Donate"

type InclusivityPageProps = {

};

type InclusivityPageState = {

};

export default class Inclusivity extends React.Component<InclusivityPageProps, InclusivityPageState> {
    constructor(props: InclusivityPageProps) {
        super(props);
        this.state = {

        };
    }

    clickHandler() {
        console.log("I am  clicked");
    }

    render() {
        return (
            <div className="inclusivity">
                <div className="info">
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
                    <button className="donateBtn" type="button" onClick={this.clickHandler}>Donate Here</button>
                </div>
                <div className="emailList">
                    <p>Not sure yet? Join our email list to stay in the loop!</p>
                    <div className="emailForm">
                        <div>
                            <input className="name" type="text" placeholder="Name" />
                            <input className="email" type="text" placeholder="example@email.com" />
                        </div>
                        <button className="submit" type="button">Submit</button>
                    </div>
                </div>
                <Donate />
            </div>
        )
    }

      
}
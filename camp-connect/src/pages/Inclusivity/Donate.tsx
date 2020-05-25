import React from "react"
import "./Donate.css"

type InputBoxProps = {
    header: string,
    placeholder: string
};

type DonateProps = {
    click: any
};

type DonateState = {

};

export default class Donate extends React.Component<DonateProps, DonateState> {
    constructor(props: DonateProps) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="DonateContainer">
                <div className="DonationHeader">
                    <button onClick={this.props.click} className="DonationExit" type="button">X</button>
                    <h1>Donate Today</h1>
                    <span></span>
                </div>
                <div className="DonationAmount">
                    <h2>Donation Amount</h2>
                    <input type="text" placeholder="$00.00" />
                </div>
                <div className="DonationForm"> 
                    <div className="DonationBilling">
                        <h2>Billing Info</h2>
                        <InputBox header="Full Name" placeholder="John Doe" />
                        <InputBox header="Address" placeholder="123 Main Street" />
                        <div className="DonationRow">
                            <InputBox header="City" placeholder="New York" />
                            <InputBox header="Zip Code" placeholder="10101" />
                        </div>
                        <InputBox header="Country" placeholder="United States" />
                    </div>
                    <div className="DonationCredit">
                        <h2>Credit Card Info</h2>
                        <InputBox header="Card Number" placeholder="123 456 7890" />
                        <InputBox header="Card Holder Name" placeholder="John Doe" />
                        <div className="DonationRow">
                            <InputBox header="Expiration Date" placeholder="00 / 00" />
                            <InputBox header="CVV" placeholder="123" />
                        </div>
                        <button className="DonationSubmitButton" type="button">Donate</button>
                    </div>
                </div>
            </div>
        )
    }

      
}

function InputBox(props: InputBoxProps) {
    return (
        <div className="InputBox">
            <p>{props.header}</p>
            <input type="text" placeholder={props.placeholder} />
        </div>
    )
} 
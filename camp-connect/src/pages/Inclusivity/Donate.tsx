import React from "react"
import "./Donate.css"

type InputBoxProps = {
    header: string,
    placeholder: string
};

type DonateProps = {

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
            <div className="donate">
                <h1>Donate Today</h1>
                <div className="amount">
                    <h2>Donation Amount</h2>
                    <InputBox header="" placeholder="$00.00" />
                </div>
                {/* <div className="donateInfo">
                    <div className="billing">
                        <h2>Billing Info</h2>
                        <InputBox header="Full Name" placeholder="John Doe" />
                        <InputBox header="Address" placeholder="123 Main Street" />
                        <div className="inputPair">
                            <InputBox header="City" placeholder="New York" />
                            <InputBox header="Zip Code" placeholder="10101" />
                        </div>
                        <InputBox header="Country" placeholder="United States" />
                    </div>
                    <div className="credit">
                        <h2>Credit Card Info</h2>
                        <InputBox header="Card Number" placeholder="123 456 7890" />
                        <InputBox header="Card Holder Name" placeholder="John Doe" />
                        <div className="inputPair">
                            <InputBox header="Expiration Date" placeholder="00 / 00" />
                            <InputBox header="CVV" placeholder="123" />
                        </div>
                        <button className="submitBtn" type="button">Donate</button>
                    </div>
                </div> */}
            </div>
        )
    }

      
}

function InputBox(props: InputBoxProps) {
    return (
        <div className="inputBox">
            <p>{props.header}</p>
            <input type="text" placeholder={props.placeholder} />
        </div>
    )
} 
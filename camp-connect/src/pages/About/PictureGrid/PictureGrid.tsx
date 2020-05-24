import React from "react";
import "./PictureGrid.css";

type Person = {
  name: string,
  imagePath: string,
  bio: string
}
type PictureGridProps = {
  rows: number,
  cols: number,
};

type PictureGridState = {
  people: Person[]
  currentDisplay: string | null
};

export default class PictureGrid extends React.Component<PictureGridProps, PictureGridState> {
  constructor(props: PictureGridProps) {
    super(props);
    this.state = {
      people: [
        {
          name: "Gabby Asuncion",
          imagePath: "..",
          bio: "Hi I'm Gabby"
        }
      ],
      currentDisplay: null
    };
  }

  setCurrentDisplay(name : string) {
    this.setState({
      this.currentDisplay: name
    });
  }

  render () {
    return (
      <div className="PictureGrid">
        <div className="pictures"
          style={{display: grid, gridTemplateColumns: {this.props.cols}, gridTemplateRows: {this.props.rows}}}
        >
        {this.state.people.map(person) => (
          <div className="person" onClick={() => this.setCurrentDisplay(person.name)}>
            <img src={person.imagePath}></img>
            <p> {person.name} </p>
            <span className={this.state.currentDisplay == person.name ? "bio show" : "bio"}>
              <p>{person.name}</p>
              <p>{person.bio}</p>
            </span>
          </div>
        )}
        </div>
      </div>
    )
  }
}

import React from "react";
import "./PictureGrid.css";

//import bio from "bio.json";

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
            "name": "Alex Morishige",
            "imagePath": "../../../assets/headshots/alex-morishige.png",
            "bio": "hi"
        },
        {
            "name": "Callie Teitelbaum",
            "imagePath": "../../../assets/headshots/callie_teitelbaum.png",
            "bio": "hi"
        },
        {
            "name": "Gabby Asuncion",
            "imagePath": "../../../assets/headshots/gabby_asuncion.png",
            "bio": "hi"
        }

      ],
        currentDisplay: null
    };
  }

  setCurrentDisplay(name : string) {
    console.log("set current display");
    // this.setState(
    //   this.state.currentDisplay : name
    // );
  }

  render () {
    return (
      <div className="PictureGrid">
        <div className="pictures" style={{display: 'grid', gridTemplateColumns: this.props.cols, gridTemplateRows: this.props.rows}}>
          
          {this.state.people.map((person) => {
            <div className="person" onClick={() => this.setCurrentDisplay(person.name)}>
              <img src={person.imagePath}></img>
              <p> {person.name} </p>

              <span className={this.state.currentDisplay == person.name ? "bioShow" : "bio"}>
                <p>{person.name}</p>
                <p>{person.bio}</p>
              </span>

            </div>
          })}

        </div>
      </div>
    )
  }
}

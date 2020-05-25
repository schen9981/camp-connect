import React from "react";
import "./PictureGrid.css";
//import bio from "bio.json";
import headshotAlex from "../../../assets/headshots/alex_morishige.png";
import headshotCallie from "../../../assets/headshots/callie_teitelbaum.png";
import headshotGabby from "../../../assets/headshots/gabby_asuncion.png";
import headshotDavidB from "../../../assets/headshots/david_bonilla.png";
import headshotDavidD from "../../../assets/headshots/david_lepelstat.jpg";
import headshotDylan from "../../../assets/headshots/dylan_marin.jpg";
import headshotEli from "../../../assets/headshots/eli_glass.png";
import headshotHolly from "../../../assets/headshots/holly_zheng.png";
import headshotJackD from "../../../assets/headshots/jack_dermer.png";
import headshotJackM from "../../../assets/headshots/jack_malamud.jpg";
import headshotLea from "../../../assets/headshots/lea_jacobson.png";
import headshotMary from "../../../assets/headshots/mary_bibbey.jpg";
import headshotOlivia from "../../../assets/headshots/olivia_mcclain.png";
import headshotSophia from "../../../assets/headshots/sophia_chen.png";

type Person = {
  name: string,
  imagePath: any,
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
          name: "Alex Morishige",
          imagePath: headshotAlex,
          bio: "hi"
        },
        {
          name: "Callie Teitelbaum",
          imagePath: headshotCallie,
          bio: "hi"
        },
        {
          name: "Gabby Asuncion",
          imagePath: headshotGabby,
          bio: "hi"
        }

      ],
      currentDisplay: null
    };
  }

  setCurrentDisplay(name : string) {
    console.log("set current display");
    console.log(name);

    this.setState({
      currentDisplay : name
    });

    console.log(this.state.currentDisplay);
  }

  render () {
    return (
      <div className="pictureGrid">
        
        {/*  style={{gridTemplateColumns: this.props.cols, gridTemplateRows: this.props.rows}}   */}

        <div className="pictures">
          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Alex Morishige")}>
            <img className="headshot" src={headshotAlex}></img>
            <div className="gridName"> Alex Morishige </div>
            <span className={this.state.currentDisplay === "Alex Morishige" ? "bioShow" : "bioHide"}>
              <p> Alex Morishige </p>
              <p> Alex's bio </p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Callie Teitelbaum")}>
            <img className="headshot" src={headshotCallie} ></img>
            <div className="gridName"> Callie Teitelbaum </div>
            <span className={this.state.currentDisplay === "Callie Teitelbaum" ? "bioShow" : "bioHide"}>
              <p> Callie Teitelbaum </p>
              <p> Callie's bio </p>
            </span>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotDavidB}/>
            <div className="gridName"> David Bonilla</div>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotDavidD}/>
            <div className="gridName"> David Lepelstat</div>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Dylan Marin")}>
            <img className="headshot" src={headshotDylan}/>
            <div className="gridName"> Dylan Marin</div>
            <span className={this.state.currentDisplay === "Dylan Marin" ? "bioShow" : "bioHide"}>
              <p> Dylan Marin </p>
              <p> Dylan's bio </p>
            </span>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotEli}/>
            <div className="gridName"> Eli Glass</div>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotGabby}></img>
            <div className="gridName"> Gabby Asuncion </div>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotHolly}></img>
            <div className="gridName"> Holly Zheng </div>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotJackD}></img>
            <div className="gridName"> Jack Dermer </div>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotJackM}></img>
            <div className="gridName"> Jack Malamud </div>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotLea}></img>
            <div className="gridName"> Lea Jacobson </div>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotMary}></img>
            <div className="gridName"> Mary Bibbey </div>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotOlivia}></img>
            <div className="gridName"> Olivia McClain </div>
          </div>

          <div className="smallGrid">
            <img className="headshot" src={headshotSophia}></img>
            <div className="gridName"> Sophia Chen </div>
          </div>

          <div className="zoomBar">

          </div>


          {/* {this.state.people.map((person) => {
            console.log(person.imagePath); 
            // onClick={() => this.setCurrentDisplay(person.name)}
            
            <div className="smallGrid" >
              <img className="headshot" src={person.imagePath} alt={person.name} />
              <div className="gridName"> {person.name} </div>
              <span className={this.state.currentDisplay == person.name ? "bioShow" : "bio"}>
                <p>{person.name}</p>
                <p>{person.bio}</p>
              </span>

            </div>
          })} */}

        </div>
      </div>
    )
  }
}

import React from "react";
import "./PictureGrid.css";


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

    if (this.state.currentDisplay === name) {
      this.setState({
        currentDisplay : null
      });
    }
    else {
      this.setState({
        currentDisplay : name
      });
    }

  }

  createGrid(){

    this.state.people.map((person) => {
      <div className="smallGrid" onClick={() => this.setCurrentDisplay(person.name)}>
        <img className="headshot" src={person.imagePath} alt={person.name} />
        <div className="gridName"> {person.name} </div>
        <span className={this.state.currentDisplay === person.name ? "bioShow" : "bioHide"}>
          <p>{person.name}</p>
          <p>{person.bio}</p>
        </span>
      </div>
    })

    
  }



  render () {

    return (
      <div className="pictureGrid">
        
        {/*  style={{gridTemplateColumns: this.props.cols, gridTemplateRows: this.props.rows}}   */}

         <div className="pictures">

          {/* {this.createGrid()} */}


          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Alex Morishige")}>
            <img className="headshot" src={headshotAlex}></img>
            <div className="gridName"> Alex Morishige </div>

            <span className={this.state.currentDisplay === "Alex Morishige" ? "bioShow" : "bioHide"}>
              <p> Alex Morishige </p>
              <p> I am a junior at Hamilton College studying Economics, Government, and mathematics. 
                At school, I play for the Varsity Soccer team, write for the school newspaper, The Spectator, 
                and play on an intramural basketball team. I am also fluent in Japanese and can speak conversational Spanish. 
                Outside of school, I have done internships at marketing and financial firms, and I plan to go into finance. 
                I’ve loved being a camp counselor in the past, and I’m excited to be part of Camp Connect! </p>
            </span>
            
          </div>

          

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Callie Teitelbaum")}>
            <img className="headshot" src={headshotCallie} ></img>
            <div className="gridName"> Callie Teitelbaum </div>
            <span className={this.state.currentDisplay === "Callie Teitelbaum" ? "bioShow" : "bioHide"}>
              <p> Callie Teitelbaum </p>
              <p> I am a junior at the University of Michigan studying history and philosophy. 
              At Michigan, I work as a news staff reporter for the school newspaper, The Michigan Daily, 
              and previously worked as a podcast content producer for The Daily Weekly. 
              I serve on the executive board for Michigan’s premier pre-law and public policy co-ed fraternity, KOA, 
              and weekly tutor a third grade student through Proyecto Avance: Latino Mentoring Association. 
              I’m so excited to be on the team of Camp Connect, and can’t wait to work with you all this summer!</p>
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

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Jack Dermer")}>
            <img className="headshot" src={headshotJackD}></img>
            <div className="gridName"> Jack Dermer </div>
            <span className={this.state.currentDisplay === "Jack Dermer" ? "bioShow" : "bioHide"}>
              <p> Jack Dermer </p>
              <p> Hi! I’m a junior at Brown majoring in Computer Science and Psychology. At school, 
                I work as a teaching assistant for an introductory CS class as well as working in a child-psychology research lab. 
                Outside of class, I enjoy cooking, pickup basketball, and theatrical lighting design.  </p>
            </span>
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

          
          

        </div>
      </div>
    )
  }
}

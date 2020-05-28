import React from "react";
import "./PictureGrid.css";

import headshotAdam from "../../../assets/headshots/adam_garrity.jpg";
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
import headshotJohn from "../../../assets/headshots/john_mattson.jpeg";
import headshotLea from "../../../assets/headshots/lea_jacobson.png";
import headshotMary from "../../../assets/headshots/mary_bibbey.jpg";
import headshotOlivia from "../../../assets/headshots/olivia_mcclain.png";
import headshotOliviaT from "../../../assets/headshots/olivia_testa.png";
import headshotSophia from "../../../assets/headshots/sophia_chen.png";
import headshotTzion from "../../../assets/headshots/tzion_jones.png";

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

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Adam Garrity")}>
            <img className="headshot" src={headshotAdam}></img>
            <div className="gridName"> Adam Garrity </div>
            <span className={this.state.currentDisplay === "Adam Garrity" ? "bioShow" : "bioHide"}>
              <p> Adam Garrity </p>
              <p> I am a Junior at Syracuse University studying TRF (Television, Radio and Film) and Policy Studies. 
                At Syracuse, I am the Art Director for the largest student theater group on campus, First Year Players. 
                Additionally, I am a member of the professional film fraternity DKA and I work as an engagement specialist
                for Syracuse Hillel. 
                Outside of class I love playing soccer, listening to podcasts, and finding great places to eat! </p>
            </span>    
          </div>

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

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("David Bonilla")}>
            <img className="headshot" src={headshotDavidB}/>
            <div className="gridName"> David Bonilla</div>
            <span className={this.state.currentDisplay === "David Bonilla" ? "bioShow" : "bioHide"}>
              <p> David Bonilla </p>
              <p> Hi! I’m David Bonilla, a rising junior at Brown University studying cognitive neuroscience on the pre-med track. 
                I’m originally from Colombia so I am a native Spanish speaker, a skill that I use every day as a medical interpreter 
                and volunteer manager at a free clinic in Providence. Outside of school I love playing the trombone, piano, and bass guitar. 
                For the past few summers I’ve given elementary school band lessons to kids in my district who can’t afford traditional private tutors. 
                I’m so excited to be a part of Camp Connect this year!</p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("David Lepelstat")}>
            <img className="headshot" src={headshotDavidD}/>
            <div className="gridName"> David Lepelstat</div>
            <span className={this.state.currentDisplay === "David Lepelstat" ? "bioShow" : "bioHide"}>
              <p> David Lepelstat </p>
              <p> Hello! I’m a junior at Wesleyan University where I major in American Government and Educational Studies. 
                At college, I am in an improv group, I tutor at a local elementary school, and work for the Center of the Arts. 
                When I’m not at school, I am a Mainstage Storyteller for The Moth podcast where I also work as a teaching intern. 
                Some of my interests are playing guitar, acting, and playing basketball. </p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Dylan Marin")}>
            <img className="headshot" src={headshotDylan}/>
            <div className="gridName"> Dylan Marin</div>
            <span className={this.state.currentDisplay === "Dylan Marin" ? "bioShow" : "bioHide"}>
              <p> Dylan Marin </p>
              <p> Hi! I'm a Sophomore at Northeastern University currently undeclared. I've been studying Architecture and Engineering, 
                in addition to a few other disciplines. 
                I have a background in theatrical lighting design, and outside of class, I like longboarding, photography, and soccer. </p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Eli Glass")}>
            <img className="headshot" src={headshotEli}/>
            <div className="gridName"> Eli Glass</div>
            <span className={this.state.currentDisplay === "Eli Glass" ? "bioShow" : "bioHide"}>
              <p> Eli Glass </p>
              <p> 
              I am a junior at Tufts University studying Biopsychology on a pre-med track. 
              At school, I am a mentor in the Tufts DREAM Village Mentoring Program, and a student leader for FOCUS, 
              a community service-based pre-orientation program for incoming freshmen. 
              I’ve also worked in a neurobiology lab doing autism research. 
              Some things I love are animals, playing soccer, and playing the piano. 
              I’m so excited to be part of the Camp Connect team!
              </p>
            </span>

          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Gabby Asuncion")}>
            <img className="headshot" src={headshotGabby}></img>
            <div className="gridName"> Gabby Asuncion </div>
            <span className={this.state.currentDisplay === "Gabby Asuncion" ? "bioShow" : "bioHide"}>
              <p> Gabby Asuncion </p>
              <p> 
              Hey I’m Gabby and I’m a senior at Brown studying Computer Science and Art Histor
              Outside of school, I TA an introductory CS class, co-direct a dance company on campus, 
              and handle communications for a new pre-professional fashion organization! 
              Besides that, I love baking, playing the ukulele (badly), and drawing.
              </p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Holly Zheng")}>
            <img className="headshot" src={headshotHolly}></img>
            <div className="gridName"> Holly Zheng </div>
            <span className={this.state.currentDisplay === "Holly Zheng" ? "bioShow" : "bioHide"}>
              <p> Holly Zheng </p>
              <p> 
              My name is Holly, and I a junior at Brown University studying Computer Science and Linguistics. 
              When I’m not thinking about human or computer languages, I like to play the clarinet and read mystery novels.
              </p>
            </span>
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

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Jack Malamud")}>
            <img className="headshot" src={headshotJackM}></img>
            <div className="gridName"> Jack Malamud </div>
            <span className={this.state.currentDisplay === "Jack Malamud" ? "bioShow" : "bioHide"}>
              <p> Jack Malamud </p>
              <p> Hi! I am a junior at Brown University majoring in Latin and Political Science. 
                At school, I serve as the president of Brown's chapter of Every Vote Counts, a non-partisan organization dedicated to 
                increasing voter turnout and expanding voter access. I also write for the Brown Political Review and edit for the Brown Journal of World Affairs. 
                Outside of school, I've worked for a couple of political campaigns; 
                I also studied ballet for about ten years and I love to act whenever I have the chance. 
                I'm thrilled to join the Camp Connect team and I can't wait to meet you all!  </p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("John Mattson")}>
            <img className="headshot" src={headshotJohn}></img>
            <div className="gridName"> John Mattson </div>
            <span className={this.state.currentDisplay === "John Mattson" ? "bioShow" : "bioHide"}>
              <p> John Mattson </p>
              <p> I’m a junior at Tufts University studying Economics and Philosophy. 
                At school, I am part of an organization that consults with non-profit organizations and socially-conscious start-ups. 
                I also sit on a philanthropy council that gives grants to NGOs in the Boston area every semester. 
                I’ve loved being a summer camp counselor in the past, and I’m excited to be on the Camp Connect team!  </p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Lea Jacobson")}>
            <img className="headshot" src={headshotLea}></img>
            <div className="gridName"> Lea Jacobson </div>
            <span className={this.state.currentDisplay === "Lea Jacobson" ? "bioShow" : "bioHide"}>
              <p> Lea Jacobson </p>
              <p> Hi! I’m a junior at Tufts University studying Human Factors Engineering, which is an interdisciplinary area of study that combines engineering, 
                psychology, computer science, and cognitive science. At school, I am involved in a volunteer tutoring program
                called EVkids which pairs undergraduate students in the Boston area with inner-city youth from underserved communities.  
                Some of my interests outside of school include making art, baking, doing yoga, and listening to music. 
                I also spent 9 summers going to sleepaway camp and was a counselor for girls ages 7-9.</p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Mary Bibbey")}>
            <img className="headshot" src={headshotMary}></img>
            <div className="gridName"> Mary Bibbey </div>
            <span className={this.state.currentDisplay === "Mary Bibbey" ? "bioShow" : "bioHide"}>
              <p> Mary Bibbey </p>
              <p> Hello! I’m a junior at Brown concentrating in Behavioral Decision Sciences with a focus on Economics.  At school I am on the Cross Country and Track and Field team, and part of Brown Political Reviews Media board.  Outside of school you can find me in nature, doodling or making some art, or spending some quality time with friends.</p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Olivia McClain")}>
            <img className="headshot" src={headshotOlivia}></img>
            <div className="gridName"> Olivia McClain </div>
            <span className={this.state.currentDisplay === "Olivia McClain" ? "bioShow" : "bioHide"}>
              <p> Olivia McClain </p>
              <p> Hi! I’m a junior at Brown majoring in Environmental Science on the climate science track. 
                When I’m not studying, I enjoy teaching science to third graders in Providence, leading outdoor trips around New England, 
                and working as a Student Ambassador. 
                To relax, I love running, photography, and playing games outside.</p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Olivia Testa")}>
            <img className="headshot" src={headshotOliviaT}></img>
            <div className="gridName"> Olivia Testa </div>
            <span className={this.state.currentDisplay === "Olivia Testa" ? "bioShow" : "bioHide"}>
              <p> Olivia Testa </p>
              <p> Hi! I am a junior at Stanford University studying Product Design under the mechanical engineering department. 
                At Stanford, I am the VP of Growth for BASES, Stanford’s largest entrepreneurship club, work in the theater department as a set designer, 
                and tutor locally around the Bay Area. Outside of class, I have worked on the television shows Madam Secretary and Awkwafina is Nora From Queens 
                as a set dresser. I am thrilled to join the Camp Connect team, and look forward to meeting you!</p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Sophia Chen")}>
            <img className="headshot" src={headshotSophia}></img>
            <div className="gridName"> Sophia Chen </div>
            <span className={this.state.currentDisplay === "Sophia Chen" ? "bioShow" : "bioHide"}>
              <p> Sophia Chen </p>
              <p> Hey! I’m a senior at Brown University studying Computer Science and Applied Mathematics. 
                At school, I’m a member of the development team of Hack@Brown and a teaching assistant for a software engineering course. 
                In my free time, I love hiking, trying my hand at a new mochi recipe, and working on random web projects. 
                I will be working on the web portal and frontend experience of Camp Connect, and I’m excited to be on the team!</p>
            </span>
          </div>

          <div className="smallGrid" onClick={() => this.setCurrentDisplay("Tzion Jones")}>
            <img className="headshot" src={headshotTzion}></img>
            <div className="gridName"> Tzion Jones </div>
            <span className={this.state.currentDisplay === "Tzion Jones" ? "bioShow" : "bioHide"}>
              <p> Tzion Jones </p>
              <p> Hello! I’m a junior at Brown majoring in Computer Science and International Relations. 
                I’m a CS Teaching Assistant and diversity workshop coordinator on campus, and you can usually 
                find me watching documentaries or taking nature photos. 
                I like reading, writing, and telling jokes, and I can’t wait to get to know you all!</p>
            </span>
          </div>
          
          

        </div>
      </div>
    )
  }
}

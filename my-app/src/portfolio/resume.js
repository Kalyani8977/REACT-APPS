import "./fresher.css";
function Fresher() {
  return (
    <>
      <div className="fresher">
        <h1 style={{ color: "red", paddingTop: "3vh" }}>
          KALYANI LEKKALA
        </h1>
        <h3 style={{ color: "white", fontSize: "5vh", paddingTop: "-10vh" }}>
          {" "}
          Check My Resume
        </h3>
      </div>
      <div className="fresher1">
        <div className="fresher2">
          <a className="fresher3" href="#raa">
            ABOUT
          </a>
          <a className="fresher3" href="#raa1">
            EDUCATION
          </a>
          <a className="fresher3" href="#raa2">
            SKILLS
          </a>
          <a className="fresher3" href="#raa3">
            PROJECTS
          </a>
          <a className="fresher3" href="#raa4">
            CERTIFICATIONS
          </a>
          <a className="fresher3" href="#raa4">
            CONTACT
          </a>
        </div>
      </div>
      <div className="fresher4">
        <h3 className="fresher5" id="raa">ABOUT</h3>
        <p className="fresher6">
          {" "}
          As a recent graduate, I am eager to start my career as a Front-End
          Developer with a solid foundation in HTML, CSS, and JavaScript. I have
          gained hands-on experience through [internships, personal projects, or
          coding bootcamps], focusing on responsive and visually appealing web
          applications. I am currently enhancing my skills and am familiar with
          Git for version control. Passionate about creating intuitive
          interfaces and solving design challenges, I am excited to collaborate
          with teams and contribute to impactful digital projects. Committed to
          continuous learning and skill development, I am enthusiastic about
          growing in front-end development.{" "}
        </p>
      </div>

      <div className="fresher4">
        <h3 className="fresher5" id="raa1">EDUCATION</h3>
        <p className="fresher8">
          <span className="fresher7"> .</span> B.Tech in (Electronics and
          Communication Engineering) from Avanthi Institute of Engineering
          CGPA:-8.3 (2020-2024)
        </p>
        <p className="fresher8">
          <span className="fresher7"> .</span>Intermediate in
           (MPC) from Sri Chaitanya junior College
          CGPA:-9.32 (2018-2020)
        </p>
 </div>
 <div className="fresher4">
        <h3 className="fresher5" id="raa2">SKILLS</h3>
        <h4 className="fresher10"> TECHNICAL SKILLS</h4>
      <p className="fresher9">Html,CSS,JavaScript</p>
      <p className="fresher9">Bootstrap,React</p>
      <p className="fresher9">SQL</p>
      {/* <h4 className="fresher10"> VERSION CONTROL</h4> */}
      <p className="fresher9">GIT,GITHUB</p>
      <h4 className="fresher10"> SOFT SKILLS</h4>
 <p className="fresher9">Problem-Solving</p>
 <p className="fresher9">Time Management</p>
 <p className="fresher9">Adaptable</p>
 <p className="fresher9">Teamwork</p>
      </div>    


      <div className="fresher4">
        <h3 className="fresher5" id="raa3">PROJECTS</h3>
        <h4 className="fresher10"> WHATSAPP CHAT BOX USING HTML ,CSS</h4>
       
        <p className="fresher8">
          <span className="fresher7"> .</span>Creating a WhatsApp chatbox using HTML and CSS focuses primarily on replicating the visual aspects of the messaging application. 
        </p>
      <span>
      <p className="fresher8">
          <span className="fresher7"> .</span>This type of project is great for practicing HTML and CSS skills and understanding how to structure and style a web application interface. 
        </p>
      </span>
        <h4 className="fresher10"> BASIC ZIG-ZAG TEMPLATE USING HTML ,CSS,BOOT STRAP</h4>
       
       {/* <p className="fresher8">
         <span className="fresher7"> .</span>Creating a WhatsApp clone using HTML and CSS focuses primarily on replicating the visual aspects of the 
         messaging application. 
       </p> */}
       <p className="fresher8">
         <span className="fresher7"> .</span> A ZIG-ZAG template project using HTML,CSS and Bootstrap typically involves creating a small, self-contained web project to 
         practice and experiment with front-end development skills.
       </p>

       <h4 className="fresher10"> WHACK-A-MOLE GAME USING HTML,CSS,BOOTSTRAP AND JAVASCRIPT </h4>
       
       <p className="fresher8">
         <span className="fresher7"> .</span>The game board will be divided into a grid of holes, where moles can randomly appear.
Moles will pop up from random holes for a short period before disappearing if not whacked.Players can click on moles to whack them and earn points.A timer will count down the remaining time for each round of the game.The game will keep track of the player's score and display it on the screen.
Sound effects will be played when moles appear and when they are successfully whacked.

       </p>
       <p className="fresher8">
         <span className="fresher7"> .</span> Javascript is used For implementing game logic, including mole movement, scoring, timing, and event handling.
 
       </p>
      </div>   




       <div className="fresher4">
        <h3 className="fresher5" id="raa4">CERTIFICATIONS</h3>
        <p className="fresher8">
          <span className="fresher7"> .</span> Certified in professional Certification by TCS NQT-Cognitive AND
          Full Stack Web devolopment by HTML,CSS & JavaScript
        </p>
        {/* <p className="fresher8">
          <span className="fresher7"> .</span>Intermediate in
          Mathematics,physics & chemisry (MPC) from Sri Vikas junior College
          CGPA:-937 (2018-2020)
        </p> */}
 </div> 



 <div className="fresher12">
        <h3 className="fresher5" id="raa5">CONTACT</h3>
        <p className="fresher13">
          <span className="fresher20"> </span> Mobile:8978040967 </p>
        <p className="fresher14">
          <span className="fresher20"> </span>Email:<a href="lekkalakalyanilekkala@gmail.com">mailid</a>
        </p>
        <p className="fresher15">
          <span className="fresher20"> </span>Github:<a href="https://github.com/RakeshReddy123devoloper?tab=repositories">github</a>
         
        </p>
        {/* <p className="fresher16"> */}
          {/* <span className="fresher20"> .</span>:Linkedin:<a href="https://linkedin.com/in/anumandla-rakesh-reddy-94347931a">linkedin</a> */}
        {/* </p> */}
 </div>
 
    </>
  );
}
export default Fresher;
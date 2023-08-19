import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import ProjectCard from "./ProjectCard"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
{/*         
        <Slide direction="left"> */}

            <div className="row">
                <div className="title">
                  <h1>
                    <span>Internships/Projects</span>
                  </h1>
                </div>
            <Container sx={{paddingTop: 6}}>
              <Grid container spacing={3} alignItems="stretch">
              <Grid item xs={12} md={6}>
                    <ProjectCard
                      imgSrc="oslfifthrow.png"
                      title="Project OSL-Fifth Row App"
                      dateRange="Jun 2023 - Aug 2023"
                      bodyText="As part of 50.003: Elements of Software Construction module, I worked in a team of 8 to develop a form management system for the Office of Student Life. With the end goal goal of providing a seamless form submission and endorsement flow in focus, our system was designed from scratch over a period of 2 months, following the 5 stages of the software development life cycle (SDLC). The final tech stack consisted of React frontend, Express backend, and AWS Amplify deployment. My contributions included drawing the use case diagram, implementing an online fillable form with custom logic validations using React, and writing system and unit tests using Jest and Selenium."
                      skillTags="javascript,react,jest,selenium"
                      videoUrl="https://drive.google.com/file/d/1sQpJY8KudrkNaZZT0YPnvjGOF1c7M81x/view/"
                      githubUrl="https://github.com/esctmp/osl-fifth-row-app" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProjectCard
                      imgSrc="razer.jpg"
                      title="Test Automation intern"
                      dateRange="May 2022 - Sep 2022"
                      bodyText="Razer Synapse is a cloud-based hardware configuration tool for Razer devices. For every new product launched, testers repeat the same set of tests to ensure that the new product is working in sync with Razer Synapse. Using a combination of browser and desktop automation tools, I wrote test cases for mouse, keyboard, and other devices to automate this testing process. I also used Jenkins to implement the CI/CD pipeline for the deployment and execution of the automated test cases."
                      skillTags="python,robot,selenium,jenkins"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProjectCard
                      imgSrc="hadtech.png"
                      title="Software Engineer Intern"
                      dateRange="Dec 2020 - Oct 2021"
                      bodyText="HADTech JSC is a Vietnamese start-up whose main goal is to develop a personalized learning platform for K-12 students. As a backend and later full stack intern, I directed a team of 5 in the construction of course recommendation and math solver algorithms for using Django and other libraries. I also took part in the development of APIs using the NestJS framework, generated sequence diagrams through several development cycles, and wrote the MongoDB database schema."
                      skillTags="python,javascript,nestjs,django,mongodb"/>
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <ProjectCard
                      imgSrc="astar.png"
                      title="Research Intern"
                      dateRange="Apr 2019 - Jun 2020"
                      bodyText="As part of a deep learning project, I worked in a team of 3 to develop an end-to-end software for analyzing heart blockage severity in fluoroscopy scans. My main responsibilities involved preprocessing the dataset provided by National Heart Center consisting of 102 videos, training and tuning the stage one image classification model, and writing the code for geometrically processing vessel width and blockage. I also contributed to another project that involving building defenses against adversarial attacks."
                      skillTags="python,keras,sklearn"
                      paperUrl="https://arxiv.org/pdf/2101.12505.pdf"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProjectCard
                      imgSrc="coldbrew.jpg"
                      title="Project ColdBrew"
                      dateRange="Jul 2022"
                      bodyText="ColdBrew: Linkedin for Volunteering is an NLP-powered platform for connecting volunteers and organizations. Aside from suggesting opportunities to perspective volunteers, the app generates training programs (e.g. logistic planning training) that organizations can hold to attract prospective volunteers. Working in a team of 4, I implemented the program suggestion feature via an unsupervised text classification model and pre-labeled categories using Python. This app won Theme Runner Up at LifeHack 2022."
                      skillTags="python,gensim"
                      videoUrl="https://youtu.be/UimYhsvEW6U"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProjectCard
                      imgSrc="microbform.jpg"
                      title="Microbform Game"
                      dateRange="Sep 2021"
                      bodyText="Microbform is an interactive, humorous and entertaining game that follows the adventures of a microbe with social anxiety. Through the game, players may find themselves relating to the main character’s conundrums or woes, and will get to select different responses to various situations that may cause social anxiety, and manage an “anxiety bar” as the character goes through events in a day. This game was made by a team of 4 passionate friends who love classic role-playing games with Undertale vibes."
                      skillTags="javascript,godot"
                      playUrl="https://tkaixiang.itch.io/microbform"/>
                </Grid>
            </Grid>
            </Container>
          </div>
        {/* </Slide> */}
      </section>
    );
  }
}

export default Portfolio;

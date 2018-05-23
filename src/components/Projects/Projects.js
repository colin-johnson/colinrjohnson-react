import React, { Component } from 'react';
import Slider from 'react-slick';
import mobile from 'is-mobile';
import projectData from './data';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.renderProjects = this.renderProjects.bind(this);
    this.beforeSlideChange = this.beforeSlideChange.bind(this);
    this.slide = this.slide.bind(this);
  }

  slide(e) {
    e.preventDefault();
    if (!mobile()) {
      const neg = -25;
      const pos = 25;
      const projects = document.getElementById('projects');

      if (projects !== null) {
        if (e.wheelDelta >= pos || e.wheelDelta <= neg) {
          if (Math.sign(e.wheelDelta) === 1) this.projectsSlider.slickNext();
          if (Math.sign(e.wheelDelta) === -1) this.projectsSlider.slickPrev();
        }
      }
    }
  }

  beforeSlideChange(current, next) {
    const nextSlide = document.getElementById(`project-${next}`);
    const currentSlide = document.getElementById(`project-${next - 1}`);
    const projects = document.getElementsByClassName('project');

    for (let x = 1; x < projects.length; x++) {
      projects[x].getElementsByClassName('header')[0].classList.remove('slick-active');
    }

    if ((next - 1) >= 1) {
      currentSlide.getElementsByClassName('title')[0].classList.add('hidden');
      currentSlide.getElementsByClassName('project-content')[0].classList.add('hidden');
      currentSlide.getElementsByClassName('link')[0].classList.add('hidden');
    }

    if (next > 0) {
      nextSlide.getElementsByClassName('header')[0].classList.add('slick-active');
      nextSlide.getElementsByClassName('title')[0].classList.remove('hidden');
      nextSlide.getElementsByClassName('project-content')[0].classList.remove('hidden');
      nextSlide.getElementsByClassName('link')[0].classList.remove('hidden');
    }
  }

  componentDidMount() {
    if (!mobile()) {
      window.addEventListener('wheel', e => this.slide(e));
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      document.getElementsByTagName('body')[0].style.position = 'relative';
      document.addEventListener('touchmove', e => e.preventDefault());
      document.addEventListener('touchend', e => e.preventDefault());
      document.addEventListener('touchstart', e => e.preventDefault());
    }

    document.getElementById('projects').style.opacity = '1';
  }

  renderProjects() {
    return projectData.map((project, index) => {
      const bgImage = { backgroundImage: `url("${project.image}")` };
      return (
        <div className="project box" style={bgImage} id={`project-${index + 1}`}>
          <div className="container-fluid">
            <div className="header" />
            <div className="container">

              <div className="title type hidden">
                <h2>{project.title}</h2>
              </div>

              <div className="project-content hidden">
                <div className="summary type">
                  <p>{project.summary}</p>
                </div>

                <div className="responsibilities type">
                  <h4>Responsibilities</h4>
                  <ul>
                    {project.responsibilities.map(a => <li>{a}</li>)}
                  </ul>
                </div>

                <div className="technologies type">
                  <h4>Technologies</h4>
                  <div className="content">
                    {project.technologies.map(tech => (
                      <div>
                        <h5>{tech.title}</h5>
                        <ul>
                          {tech.types.map(type => <li>{type}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="link type hidden">
                <a href={project.href} target="_blank">View</a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      vertical: true,
      adaptiveHeight: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      initialSlide: 0,
      appendDots: dots => (
        <ul>
          {dots.map((dot, index) => (
            <div key={index} className="dot-container">{dot}</div>
          ))}
        </ul>
      ),
      beforeChange: (current, next) => this.beforeSlideChange(current, next),
    };

    if (mobile()) {
      // settings.verticalSwiping = true;
      settings.swipeToSlide = true;
      settings.touchMove = true;
      settings.draggable = true;
    }

    return (
      <div id="projects" className="page-container">
        <Slider
          {...settings}
          ref={projectsSlider => this.projectsSlider = projectsSlider}
        >
          <div className="project box" id="project-0">
            <div className="container-fluid">
              <div className="container">

                <div className="project-content" id="intro-slide">
                  <div className="summary type">
                    <h2 className="intro">Current highlighted projects of mine<span className="pink">.</span></h2>
                    <p className="disclaimer">{(mobile()) ? 'Swipe left' : 'Scroll'} to view</p>
                  </div>
                </div>

                <div className="scroll" />
              </div>
            </div>
          </div>
          {this.renderProjects()}
        </Slider>
      </div>
    );
  }
}

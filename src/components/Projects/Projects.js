import React, { Component } from 'react';
import Slider from 'react-slick'
import projectData from './data';

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.renderProjects = this.renderProjects.bind(this);
    this.slide = this.slide.bind(this);
  }

  slide(e) {
    e.preventDefault()
    const neg = -25;
    const pos = 25;

    if (e.wheelDelta >= pos || e.wheelDelta <= neg) {
      if (Math.sign(e.wheelDelta) === 1) document.getElementById('projects').getElementsByClassName('slick-next')[0].click();
      if (Math.sign(e.wheelDelta) === -1) document.getElementById('projects').getElementsByClassName('slick-prev')[0].click();
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', (e) => this.slide(e));
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', (e) => this.slide(e));
  }

  renderProjects() {
    return projectData.map(project => {
      const bgImage = { backgroundImage: `url("${project.image}")` };
      return (
        <div className="project box" style={bgImage}>
          <div className="container">
            <div className="project-content">
              <div className="title type">
                <div className="geo"></div>
                <h2>{project.title}</h2>
              </div>

              <div className="image type" style={bgImage}></div>

              <div className="summary type">
                <h4>Summary</h4>
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
        </div>
      );
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      adaptiveHeight: true,
      vertical: true,
      swipe: true,
      swipToSlide: true,
      touchMove: true,
      draggable: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div id="projects" className="page-container">
        <Slider
          {...settings}
          ref={projectsSlider => this.projectsSlider = projectsSlider }
        >
          {this.renderProjects()}
        </Slider>
      </div>
    );
  }
}

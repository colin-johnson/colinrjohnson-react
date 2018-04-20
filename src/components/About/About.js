import React, { Component } from 'react';
import Slider from 'react-slick';
import aboutData from './data';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.renderData = this.renderData.bind(this);
    this.slide = this.slide.bind(this);
  }

  slide(e) {
    e.preventDefault();
    const neg = -25;
    const pos = 25;

    if (e.wheelDelta >= pos || e.wheelDelta <= neg) {
      if (Math.sign(e.wheelDelta) === 1) document.getElementById('about').getElementsByClassName('slick-next')[0].click();
      if (Math.sign(e.wheelDelta) === -1) document.getElementById('about').getElementsByClassName('slick-prev')[0].click();
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', e => this.slide(e));
    document.getElementById('about').style.opacity = '1';
  }

  renderData() {
    return aboutData.map((about) => {
      if (about.type === 'nested') {
        return (
          <div className="about box">
            <div className="type">

              <h2>{about.title}</h2>
              <div className="content">
                {about.content.map(a => (
                  <div>
                    <h4>{a.title}</h4>
                    <ul>
                      {a.languages.map(language => <li>{language}</li>)}
                    </ul>
                    <p>{a.description}</p>
                  </div>
                  ))}
                <p className="disclaimer">A highlighted, but not exhaustive list</p>
              </div>
            </div>
          </div>
        );
      }

      if (about.type === 'social') {
        return (
          <div className="about box">
            <div className="type">

              <h2>{about.title}</h2>

              <ul>
                {about.content.map(c => (
                  <li>
                    <a href={c.href} target="_blank">{c.title}</a>
                  </li>
                  ))}
              </ul>
            </div>
          </div>
        );
      }

      const content = Array.from(about.content);
      return (
        <div className="about box">
          <div className="type">
            <h2>{about.title}</h2>
            {content.map(b => <p>{b}</p>)}
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
      slidesToScroll: 1,
    };

    return (
      <div id="about" className="page-container">
        <Slider
          {...settings}
          className="container"
          ref={aboutSlider => this.aboutSlider = aboutSlider}
        >
          {this.renderData()}
        </Slider>
      </div>
    );
  }
}

import React, { Component } from 'react';
import CardContainer from '../UI/Cards/CardContainer';
import Card from '../UI/Cards/Card';
import ImageCard from '../UI/Cards/ImageCard';
import Modal from '../UI/Modal';
import data from './data';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      modalTitle: data.languages.title,
      modalBody: data.languages.content,
      cardHeight: '',
    };
  }

  componentDidMount() {
    if (window.innerWidth >= 480) this.determineCardWidth();

    // const contactButton = document.getElementsByClassName('contact-button');
    // setTimeout(() => Object.assign(contactButton[0].style, { top: '0', opacity: 1 }), 4000);
  }

  componentWillUpdate() {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 480) this.determineCardWidth();
    }, true);
  }

  determineCardWidth() {
    const cardBox = document.getElementsByClassName('card-div');
    const height = (cardBox[2].offsetWidth * (2 / 100));
    const heightPx = `${(cardBox[2].offsetWidth - height).toString()}px`;
    if (heightPx !== this.state.cardHeight) this.setState({ cardHeight: heightPx });
  }

  openModal(modalData) {
    this.setState({
      isModalOpen: true,
      modalTitle: modalData.title,
      modalBody: modalData.content,
    });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div id="about">
        <CardContainer>
          <div className="card-box" style={{ height: this.state.cardHeight }}>
            <Card
              flex="9"
              style={{ backgroundColor: 'rgba(255,255,255,1)' }}
              fadeIn={1}
            >
              <div>
                <p className="title">Colin Johnson</p>
                <p className="sub-title">Front End Web Developer</p>
              </div>
            </Card>

            <Card
              flex="3"
              style={{ backgroundImage: "url('../images/about/colin-r-johnson.jpg')" }}
              fadeIn={1.5}
            />
          </div>

          <div className="card-box" style={{ height: this.state.cardHeight }}>
            <Card
              onClick={() => this.openModal(data.languages)}
              fadeIn={1.5}
            >
              <p className="title">{data.languages.title}</p>
            </Card>

            <Card onClick={() => this.openModal(data.frameworks)} fadeIn={2}>
              <p className="title">{data.frameworks.title}</p>
            </Card>

            <Card onClick={() => this.openModal(data.tools)} fadeIn={2.5}>
              <p className="title">{data.tools.title}</p>
            </Card>
          </div>

          <div className="card-box" style={{ height: this.state.cardHeight }}>
            <ImageCard
              img="../images/about/github-512.png"
              fadeIn={(window.innerWidth >= 480) ? 2.5 : 3}
              href="https://github.com/colin-johnson"
            />

            <ImageCard
              fadeIn={3}
              href="../images/about/ColinJohnson-Resume.pdf"
            >
              <p className="title">Resume</p>
            </ImageCard>

            <ImageCard
              img="../images/about/twitter.png"
              fadeIn={3.5}
              href="https://twitter.com/whatchamacolin"
            />

          </div>

          {/* <div className="contact-button" onClick={() => this.openModal(data.contact)}>
            <p>Contact</p>
          </div> */}

          <Modal
            isOpen={this.state.isModalOpen}
            title={this.state.modalTitle}
            body={this.state.modalBody}
            closeModal={() => this.closeModal()}
          />
        </CardContainer>
      </div>
    );
  }
}

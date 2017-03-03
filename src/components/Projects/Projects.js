import React, { Component } from 'react';
import CardContainer from '../UI/Cards/CardContainer';
import Card from '../UI/Cards/Card';
import ProjectModal from '../UI/ProjectModal';
import data from './data';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      modalTitle: data.projectOne.title,
      modalBody: data.projectOne.content,
    };

    this.renderContent = this.renderContent.bind(this);
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
    setTimeout(() => { document.getElementById('wrapper1').scrollTop = 0; }, 1000);
  }

  renderContent(projectData, fade) {
    return (
      <div className="card-box">
        <Card
          style={{ backgroundImage: `url('${projectData.image}')` }}
          onClick={() => this.openModal(projectData)}
          fadeIn={fade}
        >
          <p className="title">
            {projectData.title}
          </p>
          <p className="hover">
            Click for project details
          </p>
          <div className="overlay"></div>
        </Card>
      </div>
    );
  }

  render() {
    return (
      <div id="projects">
        <CardContainer>
          {/* this.renderContent(data.projectOne,   0.5) */}
          {this.renderContent(data.projectTwo, 0.5)}
          {this.renderContent(data.projectThree, 1)}
          {/* this.renderContent(data.projectFour, 1.5) */}
          {this.renderContent(data.projectFive, 1.5)}
          {this.renderContent(data.projectSix, 2)}
          {this.renderContent(data.projectSeven, 2.5)}
          {this.renderContent(data.projectEight, 3)}

          <ProjectModal
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

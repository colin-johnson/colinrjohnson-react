/**
 * Created by colinjohnson on 2/15/17.
 */
import React, { Component } from 'react';

export default class ProjectModal extends Component {
  render() {
    const responsibilities = this.props.body.responsibilities;
    const technologies = this.props.body.technologies;
    const componentClasses = ['modal', 'project-modal'];
    if (this.props.isOpen) componentClasses.push('show');

    return (
      <div className={componentClasses.join(' ')} role="dialog">
        <div className="container">
          <div className="modal-header">
            <button
              type="button"
              onClick={this.props.closeModal}
              className="close"
              data-dismiss="modal"
            >&times;
            </button>
            <h4 className="modal-title">
              {this.props.title}
            </h4>
          </div>
          <div className="wrapper">
            <div className="modal-dialog">
              <div className="modal-data">
                <div className="modal-body">
                  <p className="modal-body--summary">
                    {this.props.body.summary}
                  </p>

                  <div className="modal-body">
                    <h5>Responsibilities</h5>
                    <div className="modal-flex">
                      {responsibilities.map(a => (<p>{a}</p>))}
                    </div>

                    <h5>Technologies</h5>
                    <div className="modal-flex">
                      {technologies.map(a => (<p>{a}</p>))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <a
              href={this.props.body.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={this.props.body.image}
                className="project-modal-img"
                alt="presentation"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ProjectModal.propTypes = {
  isOpen: React.PropTypes.bool,
  closeModal: React.PropTypes.func,
  body: React.PropTypes.string,
  title: React.PropTypes.string,
};

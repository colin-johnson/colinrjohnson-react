/**
 * Created by colinjohnson on 2/10/17.
 */
import React from 'react';

const Modal = ({ isOpen, closeModal, title, body }) => {
  const componentClasses = ['modal', 'default-modal'];
  if (isOpen) { componentClasses.push('show'); }

  return (
    <div className={componentClasses.join(' ')} role="dialog">
      <div className="container">
        <div className="modal-wrapper">
          <div className="modal-dialog">
            <div className="modal-data">

              <div className="modal-header">
                <button
                  type="button"
                  onClick={closeModal}
                  className="close"
                  data-dismiss="modal"
                >&times;
                </button>
                <h4 className="modal-title">{title}</h4>
              </div>

              <div className="modal-body">
                {body.map((a, index) => (<p className="modal-body--p" key={index}>{a}</p>))}
                {body.map((a, index) => (a.includes('*')) ?
                  <p key={index} className="asterisk">* denotes basic knowledge</p> : null)}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: React.PropTypes.bool,
  closeModal: React.PropTypes.func,
};

export default Modal;

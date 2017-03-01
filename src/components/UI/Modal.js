/**
 * Created by colinjohnson on 2/10/17.
 */
import React from 'react';

const Modal = ({ isOpen, closeModal, title, body }) => {
  const componentClasses = ['modal', 'default-modal'];
  if (isOpen) { componentClasses.push('show'); }

  function parseBody(data) {
    if (typeof data === 'string') {
      return data.split(',').map(a => (<p className="modal-body--p">{a}</p>));
    } else {
      return data();
    }
  }

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
                {parseBody(body)}
                {typeof body === 'string' ?
                  (body.includes('*')) ?
                    <p className="asterisk">* denotes basic knowledge</p> :
                    null : null}
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

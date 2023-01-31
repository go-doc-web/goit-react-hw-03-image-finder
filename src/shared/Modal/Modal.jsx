import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <span className={css.close}>
            <span>x</span>
          </span>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;

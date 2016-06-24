import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  react: '15.x.x',
}, 'patrickml:react-modal');

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Modal = ({ title, isOpen, closeIcon, close, children, options, id, theme }) => {
  if (isOpen) {
    return (
      <ReactCSSTransitionGroup
        transitionName="md-modal"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <div className={ `md-modal ${theme || 'default-theme'}` } id={ id } {...options}>
          <div className="md-content">
            <h3 className="md-title">
              { title }
              { closeIcon && <i className={ `md-close ${closeIcon}` } onClick={ close } /> }
            </h3>
            <div className="md-body">
              { children }
            </div>
          </div>
        </div>
        <div className="md-overlay" onClick={ close } />
      </ReactCSSTransitionGroup>
    );
  }
  return (
    <ReactCSSTransitionGroup
      transitionName="md-modal"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    />
  );
};

Modal.propTypes = {
  title: React.PropTypes.string,
  isOpen: React.PropTypes.bool,
  closeIcon: React.PropTypes.bool,
  close: React.PropTypes.func,
  children: React.PropTypes.any,
  options: React.PropTypes.object,
  id: React.PropTypes.string,
  theme: React.PropTypes.string,
};

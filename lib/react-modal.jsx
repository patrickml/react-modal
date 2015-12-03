Modal = React.createClass({
  render () {
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
    if(this.props.isOpen) {
      return (
        <ReactCSSTransitionGroup transitionName="md-modal" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <div className="md-modal" id={ this.props.id }>
            <div className="md-content">
              <h3>{ this.props.title }</h3>
              <div className="md-body">
                { this.props.children || this.props.content }
                { this.props.ionClose && <i className="md-close close ion ion-close" onClick={ this.props.close }></i> }
              </div>
            </div>
          </div>
          <div className='md-overlay' onClick={ this.props.close }></div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return <ReactCSSTransitionGroup transitionName="md-modal" transitionEnterTimeout={300} transitionLeaveTimeout={300}/>;
    }
  }
});

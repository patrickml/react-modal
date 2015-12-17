Modal = React.createClass({
  render () {
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
    if(this.props.isOpen) {
      return (
        <ReactCSSTransitionGroup transitionName="md-modal" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          <div className={ ["md-modal", this.props.theme || "default-theme"].join(' ') } id={ this.props.id } {...this.props.options}>
            <div className="md-content">
              <h3 className="md-title">{ this.props.title }</h3>
              <div className="md-body">
                { this.props.children || this.props.content }
                { this.props.ionClose && <i className="md-close ion ion-close" onClick={ this.props.close }></i> }
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

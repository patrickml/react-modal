Modal = React.createClass({
  render () {
    return (
      <div className="md-modal md-effect-1" id={this.props.id}>
        <div className="md-content">
          <h3>{this.props.title}</h3>
          <div className="md-body">
            {this.props.content}
            <i className="md-close close ion ion-close"></i>
          </div>
        </div>
      </div>
    )
  }
});
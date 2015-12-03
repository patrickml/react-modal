ControlledModal = React.createClass({
  render () {
    return (
      <div>
        <Modal
          isOpen={ this.props.isOpen }
          close={ this.props.closeModal }
          title="Demo Controlled Modal">
          <p>This modal is controlled by the parent component. It can be opened and closed by padding props to the component</p>
          <button onClick={ this.props.closeModal }>Click Here to Close</button>
        </Modal>
      </div>
    );
  }
});

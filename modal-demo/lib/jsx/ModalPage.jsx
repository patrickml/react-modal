ModalPage = React.createClass({
  getInitialState () {
    return {
      controlledModalOpen : false
    };
  },
  openModal () {
    this.setState({
      controlledModalOpen : true
    });
  },
  closeModal () {
    this.setState({
      controlledModalOpen : false
    });
  },
  render () {
    return (
      <div>
        <EnclosedModal/>
        <ControlledModal closeModal={ this.closeModal } isOpen={ this.state.controlledModalOpen } />
        <button onClick={ this.openModal }>Open Controlled Modal</button>
      </div>
    );
  }
});

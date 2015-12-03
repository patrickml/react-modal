EnclosedModal = React.createClass({
  mixins : [ReactModalMixin],
  render () {
      return (
        <div>
          <button onClick={ this.openModal }>Open Enclosed Modal</button>
          <Modal
            isOpen={ this.state.isOpen }
            close={ this.closeModal }
            title="Demo Enclosed Modal">
            <p>This modal and all of its functionality are enclosed in the 'EnclosedModal' loading the 'ReactModalMixin' which controls the open and closed state.</p>
            <button onClick={ this.closeModal }>Click Here to Close</button>
          </Modal>
        </div>
      );
  }
});

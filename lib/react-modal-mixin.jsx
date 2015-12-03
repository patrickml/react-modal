ReactModalMixin = {
  getInitialState () {
    return {
      isOpen : false
    };
  },
  openModal () {
    this.setState({
      isOpen : true
    });
  },
  closeModal () {
    this.setState({
      isOpen : false
    });
  }
};

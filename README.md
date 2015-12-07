## React Modal

This is a lightweight stylish modal

![enter image description here](photo.png)

`meteor add patrickml:react-modal`

### How to use

#### Enclosed Modal

An enclosed modal is one where the state is enclosed in the same component as the rendering of the modal. For this you can use the `ReactModalMixin` provided with this package. A component with the `ReactModalMixin` will inherit the state `openModal` and the functions `openModal` and `closeModal` which set the state accordingly

```jsx
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

```

#### Controlled Modal
A Controlled Modal is one that is controlled by a parent component and the properties are passed to the Modal via properties.

##### Controlled Modal JSX
```jsx
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
```

##### Parent Component for Controlled Modal

```jsx
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
        <ControlledModal closeModal={ this.closeModal } isOpen={ this.state.controlledModalOpen } />
        <button onClick={ this.openModal }>Open Controlled Modal</button>
      </div>
    );
  }
});
```

Demo
[http://react-modal.meteor.com/](http://react-modal.meteor.com/)

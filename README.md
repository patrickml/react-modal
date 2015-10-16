##React Modal

This is a lightweight stylish modal that is < 4kb

![enter image description here](photo.png)

`meteor add patrickml:react-modal`

###How to use

Add the following line to any `jsx` file and change the content to some other React Class that you would like to render in the modal

`< Modal title="React Modal" content={ < SomeContent /> } id="modal-1"/>`

You can trigger the modal by adding the following to any html element

`className="md-trigger" data-modal="modal-1"`

Example

`<a href="#" className="md-trigger" data-modal="modal-1">Description</a>`



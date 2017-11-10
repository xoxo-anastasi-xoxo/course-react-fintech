import React from 'react';

export default class Order extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      price: '',
      type: ''
    };
  }

  formClear() {
    this.setState({
      title: '',
      price: '',
      type: ''
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.title && this.state.price && this.state.type) {
      this.props.handleSubmit(this.state);
      this.formClear();
    }
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" name='title' value={this.state.title} onChange={this.handleInputChange} placeholder='Название' />
      <input type="text" name='price' value={this.state.price} onChange={this.handleInputChange} placeholder='Цена' />
      <input type="text" name='type' value={this.state.type} onChange={this.handleInputChange} placeholder='Тип' />
      <button type='submit'>Отправить</button>
    </form>
  }
}

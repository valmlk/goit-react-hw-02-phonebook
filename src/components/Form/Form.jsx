import { Component } from 'react';
import { nanoid } from 'nanoid'
import css from './Form.module.css';

const STATE = {
  name: '',
  number: '',
};

export class Form extends Component {
  state = { ...STATE};

  nameId = nanoid()
  tagId = nanoid()

  handleChange = event => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
  event.preventDefault();
  this.props.onSubmit(this.state);
  this.reset();
  }

  reset = () => {
    this.setState({...STATE});
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
          <label htmlFor={this.nameId}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id={this.nameId}
            value={this.state.name}
            onChange={this.handleChange}
            className={css.formInput}
            required
            pattern={"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}
          />
          <label htmlFor={this.tagId}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            id={this.tagId}
            value={this.state.number}
            onChange={this.handleChange}
            className={css.formInput}
            required
            pattern={"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"}
            />
        <button type="submit" className={css.addButton}>Add contact</button>
      </form>
    );
  }
}
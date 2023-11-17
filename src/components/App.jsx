import { Component} from "react";
import { nanoid } from "nanoid";

import { ContactList } from './ContactsList/ContactList';
import { Form } from './Form/Form';
import { Filter} from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSubmitHandler = (data) => {
    const hasDuplicates = this.state.contacts.some(
      contact => contact.name === data.name
    );

    if (hasDuplicates) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...data }],
    }));
  }

  handleDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  updateFilterValue = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
      const sortedContacts = [...this.state.contacts].sort((a, b) => a.name.localeCompare(b.name));

    return (
      <div >
          <section>
            <h2>Phonebook</h2>
            <Form onSubmit={this.formSubmitHandler} />
          </section>
          <section>
            <h2>Contacts</h2>
            <Filter onFilterChange={this.updateFilterValue} filter={this.state.filter} />
            <ContactList contacts={sortedContacts} filter={this.state.filter} handleDeleteContact={this.handleDeleteContact}/>
          </section>
      </div>
    );
  }
};
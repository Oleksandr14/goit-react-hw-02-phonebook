import { GlobalStyle } from './GlobalStyle';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box } from './Box';

import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = { name, number, id: uuidv4() };

    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { name, number, filter } = this.state;

    return (
      <Box p={4}>
        <h1>Phonebook</h1>
        <Form
          valueName={name}
          valueNumber={number}
          onHandleChange={this.handleChange}
          onAddContact={this.addContact}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onHandleChange={this.handleChange} />
        <Contacts contacts={this.filterContacts()} />
        <GlobalStyle />
      </Box>
    );
  }
}

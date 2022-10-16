import { GlobalStyle } from '../styles/GlobalStyle';
import React, { Component } from 'react';

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
  };

  addContact = (newContact, name) => {
    const namesArray = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );

    if (namesArray.includes(name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prev => {
      return { contacts: [...prev.contacts, newContact] };
    });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  render() {
    const { contacts } = this.state;

    return (
      <Box p={4}>
        <h1>Phonebook</h1>
        <Form onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={this.changeFilter} />
        {contacts.length > 0 && (
          <Contacts
            contacts={this.filterContacts()}
            onDeleteContact={this.deleteContact}
          />
        )}
        <GlobalStyle />
      </Box>
    );
  }
}

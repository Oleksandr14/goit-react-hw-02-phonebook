import React, { Component } from 'react';
import { FormContainer, Button, Input, NameLabel } from './Form.styled';

export class Form extends Component {
  render() {
    const { onHandleChange, onAddContact, valueName, valueNumber } = this.props;
    return (
      <>
        <FormContainer onSubmit={onAddContact}>
          <label>
            <NameLabel>Name</NameLabel>
            <Input
              type="text"
              name="name"
              value={valueName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={onHandleChange}
            />
          </label>
          <label>
            <NameLabel>Namber</NameLabel>
            <Input
              type="tel"
              name="number"
              value={valueNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={onHandleChange}
            />
          </label>
          <Button type="submit">Add contact</Button>
        </FormContainer>
      </>
    );
  }
}

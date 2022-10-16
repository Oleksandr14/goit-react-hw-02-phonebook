import PropTypes from 'prop-types';
import { Component } from 'react';
import { SpanName, LabelContainer, Input } from './Filter.styled';

export class Filter extends Component {
  state = {
    filter: '',
  };

  changeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });

    this.props.onChangeFilter(value);
  };

  render() {
    return (
      <LabelContainer>
        <SpanName>Find contacts by name</SpanName>
        <Input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.changeFilter}
        />
      </LabelContainer>
    );
  }
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

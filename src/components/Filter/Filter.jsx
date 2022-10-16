import PropTypes from 'prop-types';
import { Component } from 'react';
import { SpanName, LabelContainer, Input } from './Filter.styled';

export class Filter extends Component {
  render() {
    const { filter, onChangeFilter } = this.props;
    return (
      <LabelContainer>
        <SpanName>Find contacts by name</SpanName>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
      </LabelContainer>
    );
  }
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

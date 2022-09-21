import { SpanName, LabelContainer, Input } from './Filter.styled';

export const Filter = ({ value, onHandleChange }) => {
  return (
    <LabelContainer>
      <SpanName>Find contacts by name</SpanName>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onHandleChange}
      />
    </LabelContainer>
  );
};

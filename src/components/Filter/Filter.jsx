import { SpanName, LabelContainer, Input } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <LabelContainer>
      <SpanName>Find contacts by name</SpanName>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </LabelContainer>
  );
};

import { Box } from 'components/Box';
import { Item } from './Contacts.styled';
import { BsEmojiSmile } from 'react-icons/bs';

export const Contacts = ({ contacts }) => {
  return (
    <Box width={320}>
      <Box as="ul" gridRowGap={10} pt={4}>
        {contacts.map(({ name, number, id }) => {
          return (
            <Item key={id}>
              <BsEmojiSmile size={14} color="blue" /> {name}: {number}
            </Item>
          );
        })}
      </Box>
    </Box>
  );
};

import styled from 'styled-components';

export const Item = styled.li`
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii.normal};

  & + & {
    margin-top: 10px;
  }
`;

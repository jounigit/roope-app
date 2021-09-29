import styled from 'styled-components';

interface IText {
    lead: boolean,
    muted: boolean,
    children: string
}

const Text = styled.p<IText>`
  margin: 0 0 0.5em;
  font-size: ${({ lead }) => (lead ? 1.5 : 1)}rem;
  opacity: ${({ muted }) => (muted ? 0.7 : 1)};
`;

export default Text;

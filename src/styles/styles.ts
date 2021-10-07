import styled from 'styled-components';
import { device } from './theme/breakpoints';

export const SiteContent = styled.div`
    flex: 1 0 auto;
`;

export const BaseFooter = styled.div`
    flex-shrink: 0;

    /* @media ${device.tablet} {    
        flex-direction: column;
    } */
`;

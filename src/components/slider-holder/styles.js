import styled, { css } from 'styled-components';

const SlideHolder = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: ${props => props.maxWidth}
`;

const Slide = styled.label`
    top: 0;
    left: 0;
    width: 100%;
    cursor: pointer;
    transition: all 0.2s ease;
    display: block;
    position: absolute;
    z-index: -1;

    ${props => props.direction === 'left' && css`
        transform: translate(-210px) scale(0.65);

        ${props => props.distance === 2 && css`
            z-index: 0;
        `}

        ${props => props.distance === 1 && css`
            z-index: 1;
            transform: translate(-100px) scale(0.85);
        `}

        ${props => props.distance === 0 && css`
            position: relative;
            z-index: 2;
            transform: translate(0) scale(1);
        `}
    `}

    ${props => props.direction === 'right' && css`
        transform: translate(210px) scale(0.65);

        ${props => props.distance === 2 && css`
            z-index: 0;
        `}

        ${props => props.distance === 1 && css`
            z-index: 1;
            transform: translate(100px) scale(0.85);
        `}

        ${props => props.distance === 0 && css`
            position: relative;
            z-index: 2;
            transform: translate(0) scale(1);
        `}
    `}

`;

export { SlideHolder, Slide }
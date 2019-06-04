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
    opacity: 1;
    transition: all 0.2s ease;
    display: block;
    opacity: 0;
    position: absolute;
    z-index: -1;
    transform: translate(0) scale(0.65);

    ${props => props.main && css`
        opacity: 1;
        position: relative;
        z-index: 2;
        transform: translate(0) scale(1);
    `}

    ${props => props.direction === 'left-1' && css`
        opacity: 1;
        z-index: 1;
        transform: translate(-100px) scale(0.85);
    `}

    ${props => props.direction === 'left-2' && css`
        opacity: 1;
        z-index: 0;
        transform: translate(-210px) scale(0.65);
    `}

    ${props => props.direction === 'right-1' && css`
        opacity: 1;
        z-index: 1;
        transform: translate(100px) scale(0.85);
    `}

    ${props => props.direction === 'right-2' && css`
        opacity: 1;
        z-index: 0;
        transform: translate(210px) scale(0.65);
    `}


`;

export { SlideHolder, Slide }
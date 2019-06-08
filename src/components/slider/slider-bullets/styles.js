import styled, { css } from 'styled-components';

const BulletContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
`;

const Bullet = styled.label`
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 4px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: ${props => props.inactive};

    ${props => props.checked && css`
        background: ${props.active};
    `}
`;

export { BulletContainer, Bullet }
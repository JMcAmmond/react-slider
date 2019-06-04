import styled from 'styled-components';

const Header = styled.h1`
    text-align: center;
    color: #fff;
`;

const Card = styled.div`
    position: relative;
    display: block;
    border-radius: 8px;
    background: #FFF;
    padding: 40px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
    margin: 2rem 0;
`;

export { Header, Card, Container }
import React from 'react';
import Slider from '../../components/slider';
import { Header, Card, Container } from './styles';

export default function App() {

    const renderSlides = () => {
        const arr = [];
        for(let i=0; i<5; i++) {
            arr.push(
                <Card>
                    <h2>Slider Content</h2>
                    <p>This tutorial will teach you how to create a SCSS only responsive
                    slider. Feel free to read the whole tutorial or just download and
                    try it by yourself.</p>
                    <p>This tutorial will teach you how to create a SCSS only responsive
                    slider. Feel free to read the whole tutorial or just download and
                    try it by yourself.</p>
                    <a target="__blank" href="https://www.google.ca">A link inside the slider</a>
                </Card>
            )
        }
        return arr;
    }

    return (
        <div className="App">
            <Header>React Slider</Header>
            <Container>
                <Slider
                    slides={renderSlides()}
                    sliderWidth={'600px'}
                />
            </Container>
        </div>
    );
}

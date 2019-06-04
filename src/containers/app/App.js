import React from 'react';
import Slider from '../../components/slider';

export default function App() {

    const renderSlides = () => {
        const arr = [];
        for(let i=0; i<5; i++) {
            arr.push(
                <div style={styles.card}>
                    <h2>Slider Content</h2>
                    <p>This tutorial will teach you how to create a SCSS only responsive
                    slider. Feel free to read the whole tutorial or just download and
                    try it by yourself.</p>
                    <p>This tutorial will teach you how to create a SCSS only responsive
                    slider. Feel free to read the whole tutorial or just download and
                    try it by yourself.</p>
                    <a target="__blank" href="https://www.google.ca">A link inside the slider</a>
                </div>
            )
        }
        return arr;
    }

    return (
        <div className="App">
            <h1 style={styles.header}>React Slider</h1>
            <div style={styles.container}>
                <Slider
                    slides={renderSlides()}
                    sliderWidth={'600px'}
                />
            </div>
        </div>
    );
}

const styles = {
    header: {
        textAlign: 'center',
        color: '#fff',
    },
    card: {
        position: 'relative',
        display: 'block',
        borderRadius: '8px',
        background: '#FFF',
        padding: '40px',
        boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    },
    container: {
        margin: '2rem 0'
    }
}

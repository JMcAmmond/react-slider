import React, { Component } from 'react';
import SliderRadio from '../../components/slider-radio';
import SliderBullets from '../../components/slider-bullets';
import SliderHolder from '../../components/slider-holder';
import { Slider as SliderContainer } from './styles';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: props.startIndex
        }
    }
    onSliderChange = (index) => {
        this.setState({
            selectedIndex: index
        });
    }

    render() {
        const { slides, showBullets, activeColor, inactiveColor, sliderWidth } = this.props;

        return slides.length ? (
            <SliderContainer className="slider">
                <SliderRadio 
                    count={slides.length} 
                    selectedIndex={this.state.selectedIndex}
                    onSliderChange={this.onSliderChange}
                />

                <SliderHolder
                    slides={slides}
                    selectedIndex={this.state.selectedIndex}
                    sliderWidth={sliderWidth}
                />

                {showBullets && (
                    <SliderBullets
                        count={slides.length}
                        checkedIndex={1}
                        activeColor={activeColor}
                        inactiveColor={inactiveColor}
                        selectedIndex={this.state.selectedIndex}
                    />
                )}
            </SliderContainer>
        ) : null
    }
}

Slider.defaultProps = {
    slides: [],
    showBullets: true,
    startIndex: 0,
    activeColor: '#fff',
    inactiveColor: '#0003',
    sliderWidth: '600px',
}
import React from 'react';
import { SlideHolder, Slide } from './styles';

export default function SliderHolder(props) {
    const { slides, selectedIndex, sliderWidth } = props;
    return (
        <SlideHolder className="slider__holder" maxWidth={sliderWidth}>
            {slides.map((slide, key) => {
                const main = key === selectedIndex;
                const direction = key < selectedIndex 
                    ? `left-${Math.abs(key - selectedIndex)}` 
                    : `right-${Math.abs(key - selectedIndex)}`;

                return (
                    <Slide 
                        htmlFor={`slide-${key}`} 
                        className={`slider__item slider__item--${key}`} 
                        main={main}
                        direction={direction}
                    >
                        {slide}
                    </Slide>
                )
            })}
        </SlideHolder>
    )
}
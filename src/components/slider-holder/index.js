import React from 'react';
import { SlideHolder, Slide } from './styles';

export default function SliderHolder(props) {
    const { slides, selectedIndex, sliderWidth } = props;
    return (
        <SlideHolder className="slider__holder" maxWidth={sliderWidth}>
            {slides.map((slide, key) => {
                const distance = Math.abs(key - selectedIndex);
                const direction = key < selectedIndex 
                    ? `left` 
                    : `right`;

                return (
                    <Slide 
                        key={key}
                        htmlFor={`slide-${key}`} 
                        className={`slider__item slider__item--${key}`} 
                        distance={distance}
                        direction={direction}
                    >
                        {slide}
                    </Slide>
                )
            })}
        </SlideHolder>
    )
}
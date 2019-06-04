import React from 'react';

export default function SliderRadio(props) {
    const { count, selectedIndex, onSliderChange } = props;
    const items = [];

    for(let i=0; i<count; i++){
        items.push(
            <input 
                type="radio"
                name="slider"
                id={`slide-${i}`}
                className="slider__radio"
                checked={i === selectedIndex ? `checked` : ``}
                style={{display: 'none'}}
                onChange={() => onSliderChange(i)}
            ></input>
        )
    }

    return items;
}
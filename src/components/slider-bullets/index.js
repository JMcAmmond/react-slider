import React from 'react';
import { BulletContainer, Bullet } from './styles';

export default function SliderBullets(props) {
    const { count, selectedIndex, activeColor, inactiveColor } = props;  
    const items = [];

    for(let i=0; i<count; i++) {
        items.push(
            <Bullet
                htmlFor={`slide-${i}`} 
                className={`bullets__item bullets__item--${i}`}
                checked={i === selectedIndex}
                inactive={inactiveColor}
                active={activeColor}
            ></Bullet>
        )
    }

    return (
        <BulletContainer className="slider__bullets">
            {items}
        </BulletContainer>
    )
}
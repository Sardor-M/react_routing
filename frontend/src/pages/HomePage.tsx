import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const images:  string[]  = [
    "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661948404806-391a240d6d40?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1540998145333-e2eef1a9822d?q=80&w=2883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]


const CarouselContainer = styled.div `
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;

`
export default function HomePage({images : [], interval = 3600}) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex: number) => {
                if (prevIndex === images.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            })
        }, interval)
        return () => {
            clearInterval(timer);
        }
    }, [images, interval]);
    return (
        <CarouselContainer>
            <h2>  Explore the running events near you</h2>
            {images.map((imageUrl, index) => (
                <img
                    key={index}
                    src={imageUrl}
                    alt={"carousel image"}
                    // style={{opacity: index === activeIndex ? 1 : 0}}
                />
            ))}
        </CarouselContainer>
    )
}
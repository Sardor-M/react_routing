import React, {useEffect, useState} from 'react';
import styled from "styled-components";

// interface CarouselProps {
//     interval?: number
// }

interface CarouselImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    active: boolean;
}

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

const CarouselImage = styled.img<CarouselImageProps>`
    width: 100%; 
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opcacity 0.5s ease-in;
`
const CarouselControls = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`

const CarouselControl = styled.button`
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    //align-items: center;align-items: center;
    font-size: 18px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        background-color: rgba(255, 200, 0)
    }
`

const CarouselDots = styled.div `
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
`

const CarouselDot = styled.button `
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in;
    
    &:hover {
        background-color: rgb(255, 250, 0);
    }
`
export default function HomePage  ({images : [], interval = 3600}) {
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

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => {
                if (prevIndex === images.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            }
        );
    }

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length -1 : prevIndex - 1
        );
    }
    return (
        <CarouselContainer>
            <h2>  Explore the running events near you</h2>
            {images.map((imageUrl, index) => (
                <CarouselImage
                    key={index}
                    src={imageUrl}
                    alt={"carousel image"}
                    // style={{opacity: index === activeIndex ? 1 : 0}}
                    active= {index === activeIndex}
                />
            ))}
            <CarouselControls>
                <CarouselControl onClick = {handlePrevClick }> &#8249; </CarouselControl>
                <CarouselControl onClick = {handleNextClick}> &#8250; </CarouselControl>
            </CarouselControls>
            <CarouselDots>
                {images.map((_, index) => (
                    <CarouselDot
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        style={{backgroundColor: index === activeIndex ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)'}}
                    />
                ))}
            </CarouselDots>
        </CarouselContainer>
    )
}
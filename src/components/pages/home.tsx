import React from "react";
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Button } from "../../trunks-ui/trunks-ui";
import './styles/home.sass'
export default function Home(){

    return (
        <>
        <div className="home">
        <h1 className='banner-title'>{`{ trunks-ui }`}</h1>
        <h2 className='banner-subtitle'>A lightweight UI framework for React. Written in TypeScript & SASS.</h2>
        <div className='main-buttons'>
            <Button type='primary' size='large'>Get Started</Button><Button type='textonly' size='large' iconRight={<MdKeyboardArrowRight />}>Learn More</Button>
        </div>
        </div>
        </>
    )
}
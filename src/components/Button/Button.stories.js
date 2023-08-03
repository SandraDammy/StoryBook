import React from "react";
import Buttons from "./Buttons";

export default {
    title: 'Button',
    component: Buttons
}

export const Primary = () => <Buttons variant='primary'>Primary</Buttons>
export const Secondary = () => <Buttons variant='secondary'>Secondary</Buttons>
export const Success = () => <Buttons variant='success'>Success</Buttons>
export const Danger = () => <Buttons variant='danger'>Danger</Buttons>
//Call story within story
import React from "react";
import { BlueOutline } from "../Button_Primary/Button_Primary.stories";
import { Active } from "../TextField/TextField.stories";
import { Error } from "../TextField/TextField.stories";

export default {
    title: "Form/Subscription",
};

export const Subscription = () => (
    <>
     <Active/>
     <BlueOutline/>
    </>
);

export const Sub_Error = () => (
    <>
    <Error/>
    <BlueOutline/>
    </>
);
import React from "react";
import Button_Primary from "./Button_Primary";
import Refresh from "../../img/Refresh.png";
import Refreshs from "../../img/Refresh.svg";

export default {
  title: "Button_Primary",
  component: Button_Primary,
};

export const Blue900 = () => (
  <Button_Primary variant="blue900">Button</Button_Primary>
);
export const Blue500 = () => (
  <Button_Primary variant="blue500">Button</Button_Primary>
);
export const Blue300 = () => (
  <Button_Primary variant="blue300">Button</Button_Primary>
);
export const BlueOutline = () => (
  <Button_Primary variant="blueOutline">Button</Button_Primary>
);
export const Blue50 = () => (
  <Button_Primary variant="blue50">Button</Button_Primary>
);
export const blue50Outline = () => (
  <Button_Primary variant="blue50Outline">Button</Button_Primary>
);
export const Blue_Icon900 = () => (
  <Button_Primary variant="blue900">
    <img src={Refresh} />
    Button
  </Button_Primary>
);
export const Blue_Icon500 = () => (
  <Button_Primary variant="blue500">
    <img src={Refresh} />
    Button
  </Button_Primary>
);
export const Blue_Icon300 = () => (
  <Button_Primary variant="blue300">
    <img src={Refresh} />
    Button
  </Button_Primary>
);
export const Blue_IconOutline = () => (
  <Button_Primary variant="blueOutline">
    {/* <img src={Refresh} className="btnIcon" /> */}
    <img src={Refreshs} />
    Button
  </Button_Primary>
);
export const Blue_Icon50 = () => (
  <Button_Primary variant="blue50">
    <img src={Refresh} />
    Button
  </Button_Primary>
);
export const Blue_Icon500Outline = () => (
  <Button_Primary variant="blue500Outline">
    <img src={Refresh} />
    Button
  </Button_Primary>
);

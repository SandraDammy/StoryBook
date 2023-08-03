import React from "react";
import Button_Primary from "./Button_Primary";
import Refresh from '../../img/Refresh.png'

export default {
  title: "Button_Primary",
  component: Button_Primary,
};

export const Blue900 = () => (
  <Button_Primary variant="blue900">Blue900</Button_Primary>
);
export const Blue500 = () => (
  <Button_Primary variant="blue500">Blue500</Button_Primary>
);
export const Blue300 = () => (
  <Button_Primary variant="blue300">Blue300</Button_Primary>
);
export const BlueOutline = () => (
  <Button_Primary variant="blueOutline">BlueOutline</Button_Primary>
);
export const Blue50 = () => (
  <Button_Primary variant="blue50">Blue50</Button_Primary>
);
export const blue50Outline = () => (
  <Button_Primary variant="blue50Outline">Blue50Outline</Button_Primary>
);
export const Blue_Icon900 = () => (
  <Button_Primary variant="blue900">
    <img src={Refresh} />
    Icon
    </Button_Primary>
);
export const Blue_Icon500 = () => (
    <Button_Primary variant="blue500">
      <img src={Refresh} />
      Icon
      </Button_Primary>
  );
  export const Blue_Icon300 = () => (
    <Button_Primary variant="blue300">
      <img src={Refresh} />
      Icon
      </Button_Primary>
  );
  export const Blue_IconOutline= () => (
    <Button_Primary variant="blueOutline">
      <img src={Refresh} />
      Icon
      </Button_Primary>
  );
  export const Blue_Icon50 = () => (
    <Button_Primary variant="blue50">
      <img src={Refresh} />
      Icon
      </Button_Primary>
  );
  export const Blue_Icon500Outline = () => (
    <Button_Primary variant="blue500Outline">
      <img src={Refresh} />
      Icon
      </Button_Primary>
  );
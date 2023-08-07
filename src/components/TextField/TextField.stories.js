import React from "react";
import TextField from "./TextField";

export default {
  title: "Form/Text Field",
  component: TextField
};

export const Empty = () => (
  <TextField text="empty" placeholder="Text Field Empty" />
);
export const Filled = () => (
  <TextField text="filled" placeholder="Text Field Filled" />
);
export const Active = () => (
  <TextField text="active" placeholder="Text Field Active |" />
);
export const Error = () => (
  <TextField text="error" placeholder="Text Field Error" />
);
export const Correct = () => (
  <TextField text="correct" placeholder="Text Field Correct" />
);
 

//change story name 
Empty.storyName = 'Empty-text'
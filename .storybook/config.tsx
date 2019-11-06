import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components/macro";
import StoryRouter from "storybook-react-router";

import "../src/index.css";
import theme from "../src/theme";

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
addDecorator(StoryRouter());

configure(require.context("../src", true, /\.stories\.tsx$/), module);

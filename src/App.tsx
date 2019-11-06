import React from "react";
import styled from "styled-components/macro";
import { Switch, Route } from "react-router-dom";
import {
  space,
  layout,
  color,
  SpaceProps,
  ColorProps,
  TypographyProps,
  typography
} from "styled-system";

const Box = styled.div<SpaceProps & ColorProps>`
  ${space}
  ${layout}
  ${color}
`;

const Paragraph = styled.p<TypographyProps>`
  ${typography}
`;

const App: React.FC = () => {
  return (
    <Box p={[4, 5]} bg="secondary" color="white">
      <Switch>
        <Route exact path="/">
          <Paragraph fontFamily="body" fontSize="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempore eaque a laborum fugiat eius voluptatum vel eum aliquam
            ratione dolore, quia dignissimos rem iure, qui illo nesciunt eos
            aspernatur.
          </Paragraph>
        </Route>
        <Route path="/blog/:slug">World!</Route>
      </Switch>
    </Box>
  );
};

export default App;

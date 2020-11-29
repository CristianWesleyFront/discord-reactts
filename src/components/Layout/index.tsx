import React from "react";

import { Grid } from "./styles";
import ServerList from "../ServerList";
import ServerName from '../ServerName';
import ChanneInfo from '../ChanneInfo';
import ChanneList from '../ChanneList';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChanneInfo />
      <ChanneList />
    </Grid>
  );
};

export default Layout;

import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

interface Props {
  name: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({name, selected}) => {
  return (
    <Container className={selected ? 'active': ''}>
      <div>
        <HashtagIcon />
        <span>{name}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>  
    </Container>
  );
};

export default ChannelButton;

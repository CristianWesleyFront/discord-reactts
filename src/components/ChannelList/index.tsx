import React from "react";
import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from "./styles";
export interface IChannels {
  name: string;
}

const ChannelList: React.FC = () => {

  const data:IChannels[] = [
    {
      name: 'chat-livre'
    },
    {
      name: 'trabalho'
    },
    {
      name: 'lolzinho'
    },
    {
      name: 'csgo'
    },
    {
      name: 'valorant'
    },
  ]

  return (
    <Container>
        <Category>
          <span>Canais de texto</span>
          <AddCategoryIcon />
        </Category>

      {
        data.map(element => (
          <ChannelButton {...element} />
        ))
      }
    </Container>
  );
};

export default ChannelList;

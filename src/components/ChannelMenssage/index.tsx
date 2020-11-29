import React from "react";

import { Container, Avatar, Menssage, Header, Content } from "./styles";

export { Mention } from './styles'

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const ServerList: React.FC<Props> = ({
  author, date, content, hasMention, isBot
}) => {
  return (
    <Container className={hasMention ? 'mention' :  ''}>
       <Avatar className={isBot ? 'bot' :  ''} />

      <Menssage>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Menssage>

    </Container>
  );
};

export default ServerList;

import React, { useRef, useEffect } from "react";
import ChannelMenssage, {Mention} from '../ChannelMenssage';
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }

  }, [])

  return (
    <Container>

      <Messages ref={messagesRef}> 
      <ChannelMenssage 
              author="Cristian Wesley"
              date="29/11/2020"
              content="Hoje é meu aniversario "
            />
        {
          Array.from(Array(15).keys()).map(n => (
            <ChannelMenssage 
              author="Cristian Wesley"
              date="29/11/2020"
              content="Hoje é meu aniversario "
            />
          ))
        }

      <ChannelMenssage 
          author="Lucas BOT"
          date="29/11/2020"
          content= {
            <>
              <Mention>@Cristian Wesley</Mention>, Sla qualquer coisa ai
            </>
          } 
          isBot
          hasMention
        />
      </Messages>



      <InputWrapper>
        <Input type="text" placeholder="Conversar em 'Chat-livre' "/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;

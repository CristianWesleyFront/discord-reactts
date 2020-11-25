import React from "react";

import { Container, Separator } from "./styles";

import ServerButton from "../ServerButton";

interface server {
  name: string;
  photo: string;
  hasNotifications: boolean;
  mentions: number;
}

const ServerList: React.FC = () => {
  const servers: server[] = [
    {
      name: "test1",
      photo: "",
      hasNotifications: true,
      mentions: 3,
    },
    {
      name: "test1",
      photo: "",
      hasNotifications: false,
      mentions: 0,
    },
    {
      name: "test1",
      photo: "",
      hasNotifications: false,
      mentions: 0,
    },
    {
      name: "test1",
      photo: "",
      hasNotifications: false,
      mentions: 0,
    },
    {
      name: "test1",
      photo: "",
      hasNotifications: false,
      mentions: 0,
    },
    {
      name: "test1",
      photo: "",
      hasNotifications: false,
      mentions: 0,
    },
    {
      name: "test1",
      photo: "",
      hasNotifications: false,
      mentions: 0,
    },
  ];

  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      {servers.map((element) => (
        <ServerButton {...element} />
      ))}
    </Container>
  );
};

export default ServerList;

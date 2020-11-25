import React from "react";

import { Button } from "./styles";
import RocketSeatLogo from "../../assets/logos/rocketseat.jpeg";

export interface Props {
  name?: string;
  photo?: string;
  hasNotifications?: boolean;
  mentions?: number;
  isHome?: boolean;
  selected?: boolean;
}

const ServerButton: React.FC<Props> = ({
  hasNotifications,
  mentions,
  isHome,
  selected,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && (
        <img width="48" height="48" src={RocketSeatLogo} alt="rocketseat" />
      )}
    </Button>
  );
};

export default ServerButton;

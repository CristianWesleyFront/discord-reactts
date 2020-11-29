import styled from "styled-components";
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: SN;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--secondary);

  padding: 0px 11px 0px 16px;

  box-shadow: rgba(0,0,0,0.2) 0px 2px 0px 0px;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;
  color: var(--white);
  cursor: pointer;
`

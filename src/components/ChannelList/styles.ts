import styled from "styled-components";
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;


  background-color: var(--secondary);

  padding: 24px 9.5px 0px 16px;

  box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  >span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  cursor: pointer;
  color: var(--symbol);
`


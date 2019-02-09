import styled from "styled-components";

// const
import { Titles } from "constants/const";

const Title = styled.div`
  display: grid;
  grid-template-columns: repeat(${Titles.length}, minmax(80px, 1fr));
  grid-gap: 8px;
  margin: 8px;
  word-wrap: break-word;
  div {
    border: 1px solid #422a63;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 15px;
  }
`;

const CellTitle = styled.div`
  background-color: #bcd8e0;
`;
export { Title, CellTitle };

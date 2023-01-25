import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: inline-block;
  text-decoration: none;
  outline: none;
  font-size: 12px;
  padding: 2px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #faf0f1;
  color: black;
  :hover {
    background-color: #999999;
  }
`;

export const Wraper = styled.div`
  display: flex;
`;

export const Inner = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`;

export const ImgWraper = styled.div`
  margin-right: 10px;
`;

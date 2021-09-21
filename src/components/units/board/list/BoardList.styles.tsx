import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  /* border: 1px solid black; */
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle1 = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;

  :hover{
    background-color: #bdb9b7;
    color: #6a4f4b;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;


export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`

export const Pagenation = styled.div`
  margin-left: 350px;
  height: 52px;
  font-size: 16px;
`    

export const Page = styled.span`
  margin: 0 10px;
  cursor: pointer;
  
  :hover {
    color: brown;
  }
`
import styled from 'styled-components';

export const Profilec = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 60px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #9eddcc7a;
  width: 230px;
  border: 1px solid black;
  border-radius: 5%;
`;

// 1
export const Avatar = styled.img`
  width: 120px;
  border-radius: 100px;
  background-color: rgb(207, 226, 241);
`;

export const Stats = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const Itemm = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  border: 1px;
`;
// 2
export const Statsec = styled.section`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Statlist = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const Label = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #dc6a6a;
  border-radius: 5px;
  padding: 3px 8px;
`;
export const Statitem = styled.li`
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 15px;
  transition: background-color 0.3s ease;
`;

/* 3 */

export const Friendlist = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Friendlistitem = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 9px;
  margin: 0;
  gap: 10px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  width: 180px;
`;
export let Status = styled.span`
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: relative;
  top: 20px;
`;

// 4

export const Td = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  text-align: center;
`;
export const TransactionTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  margin-bottom: 40px;
  th {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    text-align: center;
    background-color: rgba(82, 94, 255, 0.137);
  }
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

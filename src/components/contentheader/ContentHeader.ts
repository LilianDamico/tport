import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction:row;
    color: ${props => props.theme.color.white};
    height: 70px;
    width: 100%;
    font-size:13px;
    padding: 10px;
    justify-content: space-between;
    gap: 20px
`;

export const Title = styled.div`
    display: flex;
`;

export const Controller = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-around;
    padding: 5px;
    gap:5px;
`;




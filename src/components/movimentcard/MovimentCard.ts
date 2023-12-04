import styled from 'styled-components';

interface ITagProps {
    color: string;
}


export const Container = styled.li`
    display: flex;
    justify-content:space-between;
    background-color:${props => props.theme.color.primary};
    color: ${props => props.theme.color.white};    
    list-style: none;
    border-radius: 5px;
    margin: 10px;
    padding: 12px 10px;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position:relative;

    &:hover {
        opacity: .7;
        transform:translatex(10px);
    }

    > div {
        display: flex;
        flex-direction:column;
        justify-content:space-between;
        color: ${props => props.theme.color.white};
        padding-left:10px;
    }
    

    


`;


export const Tag = styled.div<ITagProps>`
    width:10px;
    height:40px;
    position:absolute;
    background-color:${props => props.theme.color.info};
    left:0;
`;
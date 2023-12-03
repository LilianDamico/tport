import styled from 'styled-components';


export const Container = styled.div`

        grid-area: AS;
        background-color: #113c75;
        padding-left: 25px;
        border-right: 1px solid white;
`;

export const Header = styled.header`
        display: flex;
        align-items:center;
`;

export const LogImg = styled.img`
        height: 50px;
        width: 50px;
        margin:10px;
        border-radius:5px 5px 5px 5px;
`;

export const MenuContainer = styled.nav`
        margin-top: 30px;
`;

export const MenuItemLink = styled.a`
        display: flex;
        margin: 20px;
        text-decoration: none;
        color: ${props => props.theme.color.info};
        transition: opacity .3s;

        > svg {
                font-size: 18px;
                margin-right:5px;
        }

        &:hover {
                opacity: .7;
        }
`;

export const Title = styled.h1`
        color: white;
        font-family: 'Rubik';
        font-size: 18px;

`;

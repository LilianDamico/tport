import styled from "styled-components";

export const Container = styled.div`

        grid-area: MH;
        background-color: ${props => props.theme.color.primary};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        border-bottom: 1px solid white;
`;

export const Profile = styled.div`
        display: flex;
        color: ${props => props.theme.color.white}

`;

export const Wellcome = styled.h3`
        display: flex;
        padding: 5px;
`;

export const UserName = styled.span``;
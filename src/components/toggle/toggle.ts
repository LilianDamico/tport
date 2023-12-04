import styled from 'styled-components';
import Switch, {ReactSwitchProps} from 'react-switch';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;

`;


export const ToggleLabel = styled.span`
    color: ${props => props.theme.color.white};
    font-size: 20px;
`;



export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.color.info,
        offColor: theme.color.warning
    })
) <ReactSwitchProps>`
    margin: 1px;
`;
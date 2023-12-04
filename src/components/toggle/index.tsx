import React, { useState } from 'react';

import { Container, ToggleLabel, ToggleSelector } from './toggle';

const Toggle : React.FC = () => {
    // Estado para gerenciar se o switch está ativo (true) ou não (false)
    const [isToggled, setIsToggled] = useState(false);

    // Função para lidar com a mudança do switch
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector 
                checked={isToggled}
                onChange={handleToggle}
            />
            <ToggleLabel>Dark</ToggleLabel>
            
        </Container>
    );
}

export default Toggle;

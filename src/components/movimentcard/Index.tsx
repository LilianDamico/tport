import React from 'react';
import { Container, Tag } from './MovimentCard';

interface IMovimentCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}


const MovimentCard: React.FC<IMovimentCardProps> = ({    
    tagColor,
    title,
    subtitle,
    amount
    

}) => {
    return (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{ subtitle }</small>
            </div>
            <h3>{ amount }</h3>

        </Container>
    )
}


export default MovimentCard;
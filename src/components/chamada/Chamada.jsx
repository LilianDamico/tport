// src/components/MyComponent.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/apiService';

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const result = await fetchData('sua-rota');
                setData(result);
            } catch (error) {
                // Trate o erro, se necessário
            }
        };

        fetchDataFromApi();
    }, []);

    // Renderize os dados aqui ou em outros lugares do componente
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.nome}</div>
            ))}
        </div>
    );
};

export default MyComponent;

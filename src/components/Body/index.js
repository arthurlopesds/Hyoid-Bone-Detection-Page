import React from 'react';
import Card from './cards'
import './styles.css'

const Body = () => (
    <div id="mainv">
        <Card num="1" info="Selecione o arquivo e o objeto a ser Detectado"/>
        <Card num="2" info="Começar a Detecção"/>
        <Card num="3" info="Veja os resultados"/>
    </div>
);

export default Body;
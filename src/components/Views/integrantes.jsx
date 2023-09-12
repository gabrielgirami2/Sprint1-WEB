import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import Navbar from '../components-styled/Navbar/navbar';
import './integrantes.css';

function ListaIntegrantes() {
    const integrantes = [
        { nome: 'Gabriel Girami',   RM: '98017'  },
        { nome: 'Gustavo Vinhola dos Santos',  RM: '98826'  },
        { nome: 'Felipe Santos Pinheiro', RM: '550244'  },
        { nome: 'Felipe Bernardes De Almeida ',  RM: '98866' },
        { nome: 'Victor Gabriel Ribas Fanfoni ',   RM: '99173'  },
        { nome: 'Rafael Chaves',    RM: '99643'  },
    ];
    
      return (
        <div className="lista-integrantes">
            <header>
                <Navbar/> 
            </header>
            <main>
                <h2>Integrantes da Equipe</h2>
                <ul>
                    {integrantes.map((integrante, index) => (
                        <li key={index}>
                            <strong>{integrante.rm}</strong> - {integrante.rm}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
      );
}
export default ListaIntegrantes;

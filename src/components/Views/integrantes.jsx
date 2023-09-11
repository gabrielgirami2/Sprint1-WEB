import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import Navbar from '../components-styled/Navbar/navbar';
import './integrantes.css';

function ListaIntegrantes() {
    const integrantes = [
        { nome: 'Gabriel Girami',   RM: '98017'  },
        { nome: '',  RM: ''  },
        { nome: '', RM: ''  },
        { nome: ' ',  RM: '' },
        { nome: ' ',   RM: ''  },
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
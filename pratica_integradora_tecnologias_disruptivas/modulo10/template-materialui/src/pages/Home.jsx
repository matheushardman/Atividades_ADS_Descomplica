import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'white', // Fundo branco
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <Typography
        variant="h4"
        color="black" // Texto preto
        sx={{
          marginBottom: '1rem',
        }}
      >
        Análise e Desenvolvimento de Sistemas
      </Typography>
      <Typography
        variant="h6"
        color="black" // Texto preto
        sx={{
          fontWeight: '300',
        }}
      >
        Aula: Material-UI - Atividade Prática Módulo 10
      </Typography>
      <Typography
        variant="subtitle1"
        color="black" // Texto preto
        sx={{
          marginTop: '1rem',
          fontStyle: 'italic',
        }}
      >
        Aluno: Matheus Pessoa Santos Hardman de Araujo
      </Typography>
      <Button
        variant="contained"
        color="primary" // Cor do botão original
        sx={{ marginTop: '2rem' }}
        onClick={() => navigate('/tarefas')}
      >
        Ir para Lista de Tarefas
      </Button>
    </Box>
  );
};

export default Home;
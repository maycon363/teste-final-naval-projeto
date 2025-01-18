import React from 'react'
import { Button, Card, Col, Row  } from 'react-bootstrap'
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const data = [
    {
      src: 'https://tecnodefesa.com.br/wp-content/uploads/2021/06/d5bde4ca-abae-4e01-8ca5-aad5c2ec1462.jpg',
      title: 'Comprar Armamentos',
      navegation:'/armamentos/create'

    },
    {
      src: 'https://tecnodefesa.com.br/wp-content/uploads/2022/12/NPa_Maracana_incorporcao-0.jpg',
      title: 'Solicitar Manutenção para o Navio',
      navegation:'/manutencao/create',
    },
    {
      src: 'https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2013/10/30/131028-o-zz999-101.JPG',
      title: 'Comprar Navios',
      navegation:'/construcao/create',
    },
    {
        src: 'https://cdn-pen.nuneshost.com/images/190131-fragata-fremm-francesa.jpg',
        title: 'Solicitar Navio pra Missão',
        navegation:'/missao/create',
    },
    {
        src: 'https://cdn-defesaaereanaval.nuneshost.com/wp-content/uploads/2021/07/luigi-rizzo-f-595-750x500.jpg',
        title: 'Solicitar Navios para o Treinamento',
        navegation:'/treinamento/create',
    },
    {
        src: 'https://www.naval.com.br/blog/wp-content/uploads/2018/09/Navio-Patrulha-La-Moqueuse-P688-e1536529154498.jpg',
        title: 'Solicitar Navio para o Serviço',
        navegation:'/servico/create',
    }
  ];

const SolicitarServico = () => {
  return (
    <Grid>
        <Row>
            <div className='text-center'>
                <h1>Solicitações de Serviços</h1>
            </div>
            {
            data.map((item, i)=> (
                <Col  key={i} md={4} className='ml-4 g-2 letra text-center'  >
                    <Card border="dark" style={{  background: '#000000', color: 'white', width: '18rem' }}>                
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Card.Img variant="top" src={item.src} />
                        <div className='botoesinf'>
                            <CardActions>
                                <Link to={item.navegation}>
                                    <Button size="small">Comprar.</Button>
                                </Link>
                                <Link to={item.navegation2}>
                                    <Button size="small">Saiba mais...</Button>
                                </Link>
                            </CardActions>
                        </div>
                    </Card>
                </Col>
            ))
        }         
      </Row>
    </Grid>
  );
}
export default SolicitarServico
import {Button, Stack} from '@mui/material';
import React from 'react';
import {Card, Col, Row } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const data = [
    {
      src: 'https://jojonoticias.com.br/wp-content/uploads/2023/02/porta-avioes-1.jpg',
      title: 'Porta-Aviões',
      funcao: 'Servir de base aérea móvel',
      text: 'Um porta-aviões é um navio de guerra cujo papel principal é servir de base aérea móvel. Permite, portanto, que uma força naval possa projetar o seu poderio aéreo a grandes distâncias, sem a necessidade de depender de aeroportos (fixos) para os seus aviões.'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BPC_Dixmude.jpg/1200px-BPC_Dixmude.jpg',
      title: 'Porta-helicópteros',
      funcao: 'Transportar helicópteros e, por vezes, também navios de assalto anfíbio.',
      text: ' Um porta-helicóptero é um navio que tem como principal função transportar helicópteros, mas o termo também pode ser usado para referir-se a navios de assalto anfíbio.'
    },
    {
      src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHtxR-ZMj1ZAKMgvjgdYUNU1wO57xf5R-NrHWIS8RiYY0DMurhPlpC4lLJq97lNg8qf8VrEsnmGrCqe40bIrP20B3GC_b2MMR7dtN3CGU3plWCTNoocKOzyKfWW9vBNChSaErf17MimRo/s1600/KIROV+B9wpZQ3.jpg',
      title: 'Cruzadores',
      funcao: 'Armazenam armamento de médio calibre, e mísseis de longo alcance.',
      text: 'Um cruzador é um navio de guerra com as seguintes características: Grande velocidade, Boa mobilidade, Armamento de calibre médio e tiro rápido, Proteção moderada, Grande raio de ação.'
    },
    {
        src: 'https://preview.redd.it/o2194jbkqsz81.jpg?auto=webp&s=66a7277c686ce8d2293f1cc2aa5849c7fb351942',
        title: 'destroyers',
        funcao: 'Seu principal uso é na guerra anti-submarina.',
        text: 'É um tipo de navio de guerra, rápido e manobrável, concebido para escoltar navios maiores numa esquadra naval ou comboio de navios e defendê-los contra agressores menores, mas perigosos.' 
    },
    {
        src: 'https://www.naval.com.br/blog/wp-content/uploads/2021/02/Surcouf.jpg',
        title: 'Fragata',
        funcao: 'Podem localizar e destruir aeronaves, navios de superfície e submarinos inimigos, além de efetuar patrulhas nas nossas águas.',
        text: 'As fragatas estão equipadas para lidar com ameaças submarinas e aéreas, mas com menos ênfase em sistemas de ataque de superfície pesados. Por serem menores, também possuem sistemas eletrônicos menos sofisticados em comparação com os Destroyers e Cruzadores.'
    },
    {
        src: 'https://www.naval.com.br/blog/wp-content/uploads/2017/03/Gowind-2500-2.jpg',
        title: 'Corvetas ',
        funcao: 'Podem localizar e destruir aeronaves, navios de superfície e submarinos inimigos, além de efetuar patrulhas nas nossas águas.',
        text: 'São Navios-Escolta. Podem localizar e destruir aeronaves, navios de superfície e submarinos inimigos, além de efetuar patrulhas nas nossas águas.'
    },
    {
        src: 'https://www.naval.com.br/blog/wp-content/uploads/2018/09/Navio-Patrulha-La-Moqueuse-P688-e1536529154498.jpg',
        title: 'Navios Patrulhas',
        funcao: 'Projetados para operações de patrulhamento em águas territoriais e costeiras, proteção de plataformas “offshore”, combate ao tráfico de drogas, contrabando e pesca ilegal, além de realizar missões de busca e salvamento.',
        text: 'Os navios-patrulha são, normalmente, embarcações com cerca de 30 m de comprimento, armadas com uma única peça de calibre médio, além de uma variedade de armamento secundário mais ligeiro, como metralhadoras.'
    },
    {
        src: 'https://api.metro1.com.br/noticias/142244,governo-federal-e-franca-tem-reuniao-sigilosa-para-complementar-acordo-sobre-submarino-nuclear-3.jpg',
        title: 'Submarinos',
        funcao: 'Eles são utilizados como plataformas de armas, defesa e ataque contra inimigos e patrulhamento das áreas costeiras.',
        text: 'Os submarinos são navios de guerra que podem navegar ocultos no fundo do mar, permitindo a realização de patrulhas e ataques submersos. Eles são uma parte fundamental das forças militares de muitos países e são projetados para missões como vigilância, reconhecimento, coleta de informações e operações ofensivas e defensivas.'
    },
    {
        src: 'https://www.naval.com.br/blog/wp-content/uploads/2017/11/mcmv-47mine-explosion_2340x1316-1024x576.jpg',
        title: 'Caça-minas',
        funcao: 'Detectar, remover ou destruir minas navais, para garantir a segurança de embarcações e vias navegáveis',
        text: 'Os navios caça-minas são projetados para neutralizar minas navais, que são dispositivos explosivos colocados no mar ou em rios. Para isso, eles têm características que os ajudam a passar despercebidos pelas minas.'
    },

  ];
  
    
const Infor = () => {
  return (
    <Grid>
        <Row>
            <div style={{background: '#000000', color: 'white',}} className='text-center'>
                <h1>Informações de todos os tipos de Navios de guerra</h1>
            </div>
            {
            data.map((item, i)=> (
                <Col  key={i} md={4} className='ml-4 g-2 letra text-center'  >
                    <Card border="dark" style={{  background: '#000000', color: 'white', width: '18rem' }}>
                        <Card.Img variant="top" src={item.src} />
                        <Typography gutterBottom variant="h4" component="div">
                            {item.title}
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                            <h5 style={{  background: '#1E90FF' }}>Função</h5>
                            {item.funcao}
                        </Typography>
                        <Typography variant="text" component="div">
                        <h5 style={{  background: '#1E90FF' }}>Característica</h5>
                        {item.text}
                        </Typography>
                        <div className='estrela'>
                            <Stack spacing={3}>
                                <Rating style={{background: '#1E90FF' }} name="size-large" defaultValue={1} size="large" />
                            </Stack>
                        </div>
                        <div>
                            <CardActions>
                                <Button size="small">Compartilhar</Button>
                                <Button size="small">Saiba mais...</Button>
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

export default Infor
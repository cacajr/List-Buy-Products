import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Title, Image, Description, BuyContainer } from './styles';

import ButtonBuy from '../../components/ButtonBuy/buttonBuy';

import Typography from '@material-ui/core/Typography';

function ProductDetail() {
    const { title, picture, description, price } = useLocation().state;

    return (
        <Container>
            <Title> {title} </Title>

            <Image>
                <img
                    src = {picture}
                />
            </Image>

            <Description> {description} </Description>

            <BuyContainer>
                <Typography gutterBottom variant="h6" component="h2" style={{ marginRight: '20px' }}>
                    {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </Typography>

                <ButtonBuy />
            </BuyContainer>
        </Container>
    );
}

export default ProductDetail;
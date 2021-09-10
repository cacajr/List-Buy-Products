import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Title, Image, Description, BuyContainer } from './styles';

import ButtonBuy from '../../components/ButtonBuy/buttonBuy';

import Typography from '@material-ui/core/Typography';

function ProductDetail() {
    const product = useLocation().state.product;

    return (
        <Container>
            <Title> {product.title} </Title>

            <Image>
                <img
                    src = {product.picture}
                />
            </Image>

            <Description> {product.description} </Description>

            <BuyContainer>
                <Typography gutterBottom variant="h6" component="h2" style={{ marginRight: '20px' }}>
                    {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </Typography>

                <ButtonBuy product={product}/>
            </BuyContainer>
        </Container>
    );
}

export default ProductDetail;
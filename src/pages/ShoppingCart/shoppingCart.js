import React, { useContext } from 'react';

import { ShoppingCartContext } from '../../context/ShoppingCart/shoppingCart';

import ListShoppingCart from '../../components/ListShoppingCart/listShoppingCart';
import { Container, ContentContainerLeft, ContentContainerRight, Title, Text} from './styles';

function ShoppingCart() {
    const shoppingCartContext = useContext(ShoppingCartContext);

    return (
        <Container>
            {shoppingCartContext.getTotalPrice() != 0 ?
                <>
                    <ContentContainerLeft>
                        <ListShoppingCart />
                    </ContentContainerLeft>

                    <ContentContainerRight>
                        <Title> Total da Compra </Title>
                        <Text> { shoppingCartContext.getTotalPrice().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) } </Text>
                    </ContentContainerRight>
                </>
            :
                <ContentContainerLeft>
                    <Title> Nenhum produto no carrinho =\ </Title>
                </ContentContainerLeft>
            }
        </Container>
    );
    
}

export default ShoppingCart;
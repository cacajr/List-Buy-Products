import React, { useState } from 'react';

import CardProduct from '../CardProduct/cardProduct';

function ListProducts() {
    const [ products ] = useState({
        products: [
            {
                id: 133453126,
                title: "Smartphone Motorola Moto G6 Dual Chip Android Oreo - 8.0 Tela 5.7\" Octa-Core 1.8 GHz 32GB 4G Câmera 12 + 5MP (Dual Traseira) - Índigo",
                price: 1299,
                picture: "https://tecnoblog.net/wp-content/uploads/2020/11/motog6plus-700x700.png",
                description: "Misturando inovação, modernidade e qualidade, o novo moto g6 chegou para deixar tudo o que você precisa na palma da sua mão, desbravando um mundo de novidades e experiências extremamente inesquecíveis. Com processador octa-core de 1,8 GHz, 3GB de RAM(1), bateria que dura o dia todo(2) e carregamento TurboPower™, você executa suas tarefas sem se preocupar(3). Além disso, sua deslumbrante Tela Max Vision permite com que você veja sua vida em tela cheia, já que pode assistir a tudo em um incrível espaço Full HD+ de 5,7 polegadas. Pensa que acabou? Então prepare-se: este novo integrante da Família moto g6 possui design com acabamento traseiro em vidro 3D que se encaixa perfeitamente em suas mãos.E não para por aí! Agora você pode registrar todos os seus momentos em fotos incríveis, já que o moto g6 vem com câmera traseira dupla e câmera frontal de 8MP com flash LED. Ah, e ele tem Android Puro 8.0 Oreo, a última versão do sistema operacional mais utilizado em todo o mundo. moto g6: impressionante em todos os ângulos.",
                memory: "32GB",
                brand: "Motorola",
                chipType: "Nano Chip",
                quantity: 2
            },
            {
                id: 132537782,
                title: "Smartphone Samsung Galaxy J7 Pro Android 7.0 Tela 5.5\" Octa-Core 64GB 4G Wi-Fi Câmera 13MP - Preto",
                price : 1229,
                picture: "https://www.notebookcheck.info/uploads/tx_nbc2/672017111356AM_635_j7_db.jpeg",
                description : "O Smartphone Samsung Galaxy J7 Pro possui tela de 5.5 polegadas com a tecnologia Super Amoled, isso permite que você visualize fotos, vídeo, jogos e seus aplicativos preferidos com cores mais intensas e maior nitidez. Entre seus destaques estão suas duas câmeras, traseira e frontal de 13MP, ambas com Flash LED para você tirar fotos com alta qualidade mesmo em ambientes de baixa luminosidade. Além disso, é possível controlar o obturador com um simples gesto manual. O Galaxy J7 Pro também conta com processador Octa Core de última geração, capaz de rodar seus aplicativos com velocidades de tirar o fôlego. Aliado a uma memória RAM de 3GB, oferendo uma experiência móvel de alta qualidade para você poder fazer streaming de vídeos, jogar os mais recentes games ou ver suas séries favoritas com o melhor desempenho. Equipado com uma bateria para não te deixar na mão e poder usar o telefone sem preocupações. Porém ele conta com uma solução inteligente para economizar tempo e bateria. A Tela Always On permite que você acesse a hora, o calendário e as notificações recebidas rapidamente sem precisar ativar o aparelho. Este celular vem com 64GB de armazenamento interno, mas caso não seja suficiente você poderá expandir essa capacidade através de um cartão microSD de até 256GB (vendido separadamente). Outra grande novidade do Galaxy J7 Pro é que ele agora possui sensor de impressões digitais, provendo a máxima proteção de seus dados e garantindo que somente você os acesse.",
                memory: "64GB",
                brand: "Samsung",
                chipType: "Nano Chip",
                quantity: 4
            },
            {
                id: 133453169,
                title: "Smartphone Motorola Moto G6 Play Dual Chip Android Oreo - 8.0 Tela 5.7\" Octa-Core 1.4 GHz 32GB 4G Câmera 13MP - Índigo",
                price: 1099,
                picture: "https://www.notebookcheck.info/uploads/tx_nbc2/MotorolaMotoG6Play__1_.JPG",
                description: "Misturando inovação, modernidade e qualidade, o novo moto g6 play chegou para deixar tudo o que você precisa na palma da sua mão, desbravando um mundo de novidades e experiências extremamente inesquecíveis. Com processador octa-core de 1,4 GHz, 3GB de RAM(1), bateria que dura mais de um dia(2) e carregamento TurboPowerTM, você executa suas tarefas sem se preocupar. Além disso, sua deslumbrante Tela Max Vision permite com que você veja sua vida em tela cheia, já que pode assistir a tudo em um incrível espaço HD de 5,7 polegadas. Pensa que acabou? Então prepare-se: este novo integrante da Família moto g6 possui design único feito com polímero de vidro.E não para por aí! Agora você pode registrar todos os seus momentos em fotos incríveis, já que o moto g6 play vem com câmera traseira de 13MP e câmera frontal de 8MP com flash LED. Ah, e ele tem Android Puro 8.0 Oreo, a última versão do sistema operacional mais utilizado em todo o mundo. moto g6 play: com a vida em tela cheia, você se diverte muito mais.",
                memory: "32GB",
                brand: "Motorola",
                chipType: "Nano Chip",
                quantity: 1
            }
        ]
    });

    return (
        <>
            {!!products.products.length && (
                products.products.map(product => (
                    <li key={product.id} style={{'listStyleType': 'none'}}>
                        <CardProduct
                            id={product.id} 
                            picture={product.picture}
                            description={product.description}
                            title={product.title}
                            price={product.price}
                        />
                    </li>
                ))
            )}
        </>
    );
}

export default ListProducts;
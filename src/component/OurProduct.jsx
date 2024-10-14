import React from 'react'
import Countainer from '../layer/Container'
import Title from '../layer/Title'
import OurProductNavebar from './OurProductNavebar'
import ProductItem from '../layer/ProductItem'
import p1 from '/public/products//p1.jpg'
import p2 from '/public/products//p2.jpg'
import p3 from '/public/products//p3.jpg'
import p4 from '/public/products//p4.jpg'
import p5 from '/public/products//p5.jpg'
import p6 from '/public/products//p6.jpg'
import p7 from '/public/products//p7.jpg'
import p8 from '/public/products//p8.jpg'

const OurProduct = () => {

    const Products = [
        {
            id: 1,
            productImage: p1,
            titleName: 'Sweater Shirt',
            mainPrice: 45.99,
            disPrice: 35.99,
        },
        {
            id: 2,
            productImage: p2,
            titleName: 'Pastel Long Sleeve',
            mainPrice: 55,
            disPrice: 44.99,
        },
        {
            id: 3,
            productImage: p3,
            titleName: 'T-Shirt orange',
            mainPrice: 29.99,
            disPrice: 15.99,
        },
        {
            id: 4,
            productImage: p4,
            titleName: 'Blue Bombers',
            mainPrice: 49.99,
            disPrice: 69.99,
        },
        {
            id: 5,
            productImage: p5,
            titleName: 'Jeans Jacket',
            mainPrice: 125,
            disPrice: 99.99,
        },
        {
            id: 6,
            productImage: p6,
            titleName: 'Denim shirt',
            mainPrice: 100,
            disPrice: 74.99,
        },
        {
            id: 7,
            productImage: p7,
            titleName: 'Red Suede sweater',
            mainPrice: 29.99,
            disPrice: 19.99,
        },
        {
            id: 8,
            productImage: p8,
            titleName: 'Leather Brown Jacket',
            mainPrice: 90.65,
            disPrice: 79.99,
        },
        {
            id: 4,
            productImage: p4,
            titleName: 'Blue Bombers',
            mainPrice: 49.99,
            disPrice: 69.99,
        },
        {
            id: 5,
            productImage: p5,
            titleName: 'Jeans Jacket',
            mainPrice: 125,
            disPrice: 99.99,
        },
        {
            id: 6,
            productImage: p6,
            titleName: 'Denim shirt',
            mainPrice: 100,
            disPrice: 74.99,
        },
        {
            id: 7,
            productImage: p7,
            titleName: 'Red Suede sweater',
            mainPrice: 29.99,
            disPrice: 19.99,
        },
        {
            id: 4,
            productImage: p4,
            titleName: 'Blue Bombers',
            mainPrice: 49.99,
            disPrice: 69.99,
        },
        {
            id: 5,
            productImage: p5,
            titleName: 'Jeans Jacket',
            mainPrice: 125,
            disPrice: 99.99,
        },
        {
            id: 6,
            productImage: p6,
            titleName: 'Denim shirt',
            mainPrice: 100,
            disPrice: 74.99,
        },
        {
            id: 7,
            productImage: p7,
            titleName: 'Red Suede sweater',
            mainPrice: 29.99,
            disPrice: 19.99,
        },
        {
            id: 4,
            productImage: p4,
            titleName: 'Blue Bombers',
            mainPrice: 49.99,
            disPrice: 69.99,
        },
        {
            id: 5,
            productImage: p5,
            titleName: 'Jeans Jacket',
            mainPrice: 125,
            disPrice: 99.99,
        },
        {
            id: 6,
            productImage: p6,
            titleName: 'Denim shirt',
            mainPrice: 100,
            disPrice: 74.99,
        },
        {
            id: 7,
            productImage: p7,
            titleName: 'Red Suede sweater',
            mainPrice: 29.99,
            disPrice: 19.99,
        },
        {
            id: 4,
            productImage: p4,
            titleName: 'Blue Bombers',
            mainPrice: 49.99,
            disPrice: 69.99,
        },
        {
            id: 5,
            productImage: p5,
            titleName: 'Jeans Jacket',
            mainPrice: 125,
            disPrice: 99.99,
        },
        {
            id: 6,
            productImage: p6,
            titleName: 'Denim shirt',
            mainPrice: 100,
            disPrice: 74.99,
        },
        {
            id: 7,
            productImage: p7,
            titleName: 'Red Suede sweater',
            mainPrice: 29.99,
            disPrice: 19.99,
        },
       
    ]


    return (
        <div>
            <Countainer className={'max-w-[1420px]'}>
                <Title h1className='text-center pt-5 md:pt-16 md:pb-4' titleName={'Our Products'} />
                <OurProductNavebar />
                <div className='grid grid-cols-4 gap-4 pt-8 md:pt-40'>
                   {
                    Products?.filter((item ,i)=> i < 8).map((item,i) => (
                        <div>
                            <ProductItem titleName={item?.titleName} mainPrice={item?.mainPrice} disPrice={item?.disPrice} src={item?.productImage}/>
                        </div>
                    ))
                   }
                </div>
            </Countainer>
        </div>
    )
}

export default OurProduct
"use client"
import CardComponents from '@/components/CardComponents';
import { useState } from 'react'

export default function Home() {

  const [products, setProducts] = useState({
    id:1,
    name:"Product 1",
    price:100,
    quantity:1,
    image:"https://quotesbuddy.in/wp-content/uploads/2022/09/BEST-JACK-MA-QUOTES-ON-FAILURE-SUCCESS-THEN-LEADER-FOR-YOUNG-ENTREPRENEURSHIP-25-800x800.webp",
    description:" this is the description",
  });

  return (
    <main className='flex flex-wrap min-h-screen flex-col items-center justify-be p-24'>
       
        <CardComponents
        key={products.id}
        id={products.id}
        name={products.name}
        price={products.price}
        image={products.image}
        description={products.description}
        />
        </main>
  )
}

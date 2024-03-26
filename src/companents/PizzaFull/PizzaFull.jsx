import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export const PizzaFull = () => {
  const [error, setError] = useState(false);
  const [pizza, setPizza] = useState();
  let {id} = useParams();
  useEffect(() => {
    async function fetchPizzaItem() {
      try {
        const {data} = await axios.get('https://65831edc02f747c8367b1d4c.mockapi.io/api/pizza/pizzas/' + id);
        setPizza(data);
      } catch (error) {
        setError(true);       
      }
    }
    fetchPizzaItem();
  },[])

  return (
     <div>
      <img src={pizza.imageUrl} alt="" />
      <h3>{pizza.name}</h3>
    </div>
  )
}

'use client'
import React, { useState, useEffect } from 'react';
import CoinCard from './components/CoinCard';

function Home() {
    const [coins, setCoins] = useState([]);

    const fetchCoins = async() => {
        try {
            const res = await fetch('https://api.coinlore.net/api/tickers/');
            const coin = await res.json();
            setCoins(coin.data.slice(0, 20));
        } catch (error) {
            console.log('Error: ', err);
        }
    }
    useEffect(() => {
        fetchCoins();
    }, []);

    return (
        <div className='home'>
            <h1>Top 20 Cryptos</h1>
            <div className='coins-container'>
                {coins.map((coin) => (
                    <CoinCard coin={coin} key={coin.id} />
                ))}
            </div>
        </div>
    )
}

export default Home
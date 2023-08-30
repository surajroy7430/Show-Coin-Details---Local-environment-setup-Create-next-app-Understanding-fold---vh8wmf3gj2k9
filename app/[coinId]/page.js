'use client'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

function CoinDetail() {
    const [coin, setCoin] = useState(null);
    // const router = useRouter();
    // const { id } = router.query;

    const fetchCoinDetails = async() => {
        try {
            const pathSegments = window.location.pathname.split('/');
            const id = pathSegments[pathSegments.length - 1];
            const res = await fetch(`https://api.coinlore.net/api/ticker/?id=${id}`);
            const data = await res.json();
            setCoin(data[0]);
        } catch (error) {
            console.log('Error: ', err);
        }
    }
    useEffect(() => {
        fetchCoinDetails();
    }, []);

    if (!coin) {
        return
    }

    return (
        <div className='coin-detail'>
            <div className='name-symbol'>
                <h1 className='name'>{coin.name}</h1>
                <h2 className='symbol'>({coin.symbol})</h2>
            </div>
            <div className='market-description'>
                <p className='coin-rank'>Rank: {coin.rank}</p>
                <p className='coin-price'>Price: ${coin.price_usd}</p>
                <p className='coin-market-cap'>Market Cap: ${coin.market_cap_usd}</p>
                <p className='coin-total-supply'>Total Supply: {coin.tsupply}</p>
                <p className='coin-max-supply'>Max Supply: {coin.msupply}</p>
            </div>
        </div>
    )
}

export default CoinDetail
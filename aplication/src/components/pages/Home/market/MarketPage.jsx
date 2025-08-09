
import React from 'react'
import MarketLayout from './MarketLayOut';
import Header from './MarketHeader';
import TradingViewHeader from './TradingViewHeader'; 
import Trad from './Trad';
import TradingView from './TradingView'; 
import TransactionTable from './Table';

export default function MarketPage() {
  return (
    <MarketLayout>
        <Header />
        <TradingViewHeader/>    
        <Trad />
        <TradingView/>
        <TransactionTable />
    </MarketLayout>
  )
}

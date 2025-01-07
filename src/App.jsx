import { BrowserRouter,  Route, Routes } from 'react-router-dom'

import './App.css'

import AsideForm from './components/AsideForm/AsideForm'
import Ticket from './components/Ticket/Ticket'
import { ChoosingPlaces } from './components/ChoosingPlaces/ChoosingPlaces'

import { MainTemplate } from './components/MainTemplate/MainTemplate'
import { HomePage } from './components/HomePage/HomePage'
import  Page  from './components/Page/Page'
import { Passengers } from './components/Passengers/Passengers'
import { AsideDetails } from './components/AsideForm/AsideDetails/AsideDetails'
import { StageOfPurchase } from './components/StageOfPurchase/StageOfPurchase'

import { Payment } from './components/Payment/Payment'
import { OrderCheck } from './components/OrderCheck/OrderCheck'
import { SuccessfulOrder } from './components/SuccessfulOrder/SuccessfulOrder'
import { SortingBlock } from './components/SortingBlock/SortingBlock'
import { LastTickets } from './components/LastTickets/LastTickets'

import { ModalInfo } from './components/Modals/ModalInfo/ModalInfo'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainTemplate/>}>
        <Route index element= {<HomePage/>}/>
        <Route path='/trains' element={
          <>
            <StageOfPurchase stage={1} />
            <Page aside={
              <>
                <AsideForm/>
                <LastTickets/>
                {/* <LastTicket from={'kkjdk'} to={'fkkf'} price={'1235'}/> */}
              </>
             } main={
             <>
             <SortingBlock/>
             <Ticket/>
            
             </>
             }/>
          </>
        }/>
        <Route path='/places' element={
          <>
            <StageOfPurchase stage={1} />
            <Page aside={
              <>              
                <AsideForm/>
                <LastTickets/>
              </>
             } main={<ChoosingPlaces/>}/>
          </>
        }/>
        <Route path='/passengers' element={
          <>
          <StageOfPurchase stage={2} />
            <Page aside={<AsideDetails/>} main={<Passengers/>}/>
          </>
        }/>
        <Route path='/pay' element={
          <>
          <StageOfPurchase stage={3} />
            <Page aside={<AsideDetails/>} main={<Payment/>}/>
          </>
        }/>
        <Route path='/check' element={
          <>
          <StageOfPurchase stage={4} />
            <Page aside={<AsideDetails/>} main={<OrderCheck/>}/>
          </>
        }/>
        <Route path='/success' element={
          <>
            <Page  main={<SuccessfulOrder/>}/>
          </>
        }/>
        <Route path='/modal' element={
          <>
            <Page  main={<ModalInfo/>}/>
          </>
        }/>
      </Route>
    </Routes>
    </BrowserRouter>
   
    
  )
}

export default App

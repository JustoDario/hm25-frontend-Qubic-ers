import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {QubicConnectCombinedProvider} from './contexts/QubicConnectContext'
import {HM25Provider} from './contexts/HM25Context'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import EchoPage from './pages/EchoPage'
import BurnPage from './pages/BurnPage'
import {Toaster} from 'react-hot-toast'
import {ConfigProvider} from "./contexts/ConfigContext"
import QrCode from './pages/QrCode'
import SendMoney from './pages/Send_money'
import ReceiveMoney from './pages/Receive_money'
import Payment from './pages/payments'
import CurrencyConverter from './pages/CurrencyConverter'

export function Layout({children}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer className="mt-auto"/>
        </div>
    )
}

function App() {
    return (
        <ConfigProvider>
            <QubicConnectCombinedProvider>
                <HM25Provider>
                    <BrowserRouter>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Home />}/>
                                <Route path="/Qrcode" element={<QrCode />}/>
                                <Route path="/SendMoney" element={<SendMoney />} />
                                <Route path="/ReceiveMoney" element={<ReceiveMoney />} />
                                <Route path="/Payment" element={<Payment />} />
                                <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
                                <Route path="/echo" element={<EchoPage/>}/>
                                <Route path="/burn" element={<BurnPage/>}/>
                            </Routes>
                            <Toaster
                                position="top-right"
                                toastOptions={{
                                    style: {
                                        background: "#202E3C",
                                        color: "#fff",
                                    },
                                }}
                            />
                        </Layout>
                    </BrowserRouter>
                </HM25Provider>
            </QubicConnectCombinedProvider>
        </ConfigProvider>
    )
}

export default App

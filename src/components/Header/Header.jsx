import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import pattern from '../../assets/images/pattern-divider-desktop.svg'
import patternMobile from '../../assets/images/pattern-divider-mobile.svg'
import icon from '../../assets/images/icon-dice.svg'

export default function Header() {
    
    const [advice, setAdvice] = useState('Know Your Worth')
    const [adviceId, setAdviceID] = useState(1)
    
    async function generateQuote() {
        const apiURL = `https://api.adviceslip.com/advice`
        const {data} = await Axios.get(`${apiURL}`)
        setAdvice(data.slip.advice)
        setAdviceID(data.slip.id)
    }
    
    return (
        <header className='center my-5 vh-100'>
            <div className="advice-card py-4 px-5 center flex-column col-md-6 col-sm-8 position-relative">
                <p className='quote-head'>Advice {adviceId}</p>
                <p className='quote'>{advice}</p>
                {/* <img src={pattern} className='pattern w-100'/> */}
                <img src={patternMobile} className='pattern w-100'/>
                <Button  onClickHandler={generateQuote}><img src={icon} alt="generate advice button" className='w-100' /></Button>
            </div>
        </header>
    )
}

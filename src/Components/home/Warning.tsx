import React from 'react'
import './css/Warning.css'

interface closeSpan{
    closeBool: boolean;
    setCloseBool: (v: boolean) => void;
}

const Warning: React.FC<closeSpan> = ({closeBool, setCloseBool}) => {

    function closePopUp(): void{
        const BlurDiv = document.getElementById('WId') as HTMLElement ;
        const BlurTitle = document.getElementById('WTId') as HTMLDivElement ;
        const BlurSpan = document.getElementById('WSId') as HTMLSpanElement ;
        // transform: translateY(100);

        if(BlurDiv && BlurTitle && BlurSpan){
            BlurTitle.style.transform = 'translateY(-2000%)';
            BlurSpan.style.transform = 'translateY(-2000%)';
            BlurDiv.style.transition = '1s';
            BlurDiv.style.backgroundColor = 'rgba(128, 128, 128, 0)';            
            
        }
        setTimeout(() => {
            setCloseBool(!closeBool);
        }, 1000);
    }

    return closeBool !== true &&(
        <section className='Warning' id='WId'>
            <div className='WarningTitle' id='WTId'><h2>Warning</h2></div>
            <span className='WarningSpan' id='WSId'>
                <h2>This website is currently under construction</h2>
                <p>However, feel free to take a look at how this website is built step by step.</p>                 
                <button className='CloseSpan' onClick={closePopUp}>Continue</button>           
            </span>
        </section>
    )
    
}

export default Warning
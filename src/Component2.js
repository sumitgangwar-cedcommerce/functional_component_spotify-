import React from 'react'
import './Component2.css'

function Component2(){
    
    return (
        <div id='Component2'>
            <center>
                <div><b>The Power of Premium</b></div>
                <div><img src='./comp2.png'></img></div>
                <div id='dataC'>
                    <div className='item'>
                        <p><b>Ad-free music listening</b></p>
                        <p>Enjoy uninterrupted music.</p>
                    </div>
                    <div className='item'>
                        <p><b>Offline playback</b></p>
                        <p>Save your data by listening offline.</p>
                    </div>
                    <div className='item'>
                        <p><b>Play everywhere</b></p>
                        <p>Listen your speakers, TV, and other favourite devices .</p>
                    </div>
                    <div className='item'>
                        <p><b>Pay your way</b></p>
                        <p>Prepay with paytm, UPI and more.</p>
                    </div>
                </div>
            </center>
        </div>
        )
}
  


export default Component2
import React from 'react'
import './Header.css'
function Header(){
    
        return (
            <div id="header_main">
                <div id='navbar'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBA4m_GlGaxQm9_-QHsNifCIa_zqZKbuaIFtHbaJ3-EjgiTVJXGJJN0MKW-CDtkC03lw&usqp=CAU'></img>
                    <div id='menu'>
                        <a href='#'>Premium</a>
                        <a href='#'>Support</a>
                        <a href='#'>Download</a>
                        <a><b>|</b></a>
                        <a href='#'>Sign up</a>
                        <a href='#'>Log in</a>
                    </div>
                </div>
                <center>
                    <div><b>Get Premium free for 1 month</b></div>
                    <div>Just ₹119/month after. Debit and Credit cards accepted. Cancel anytime</div>
                    <div><button className='btn1'><b>GET STARTED</b></button><button className='btn2'><b>SEE OTHER PLANS</b></button></div>
                    <div id='condition'><a href='#'>Terms and condition apply.</a> 1 month free not available for user who have already tried premium</div>
                </center>
                <center id="cen2">
                    <div><b>Introducing Premium Mini</b></div>
                    <div>₹7 for 1 day</div>
                    <div>₹25 for 1 week</div>
                    <div><button className='btn3'><b>GET MINI</b></button></div>
                    <div id='condition'><a href='#'>Terms and condition apply.</a></div>
                </center>
        
            </div>
          )
    }
  


export default Header
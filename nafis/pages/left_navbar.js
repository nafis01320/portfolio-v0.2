import React from 'react'
import Link from 'next/link'
export default function Navbar(){
    return (
        <>
            <div className='nav'>
                <section className='name_left_navbar'>NAFIS</section>
                <section className='links_left_navbar'>
                    {/* button div here */}
                   <div className='btn_navbar_div'>
                       <Link href='/'><button className='btn_navbar'>> Home</button></Link>
                        
                   </div>
                   
                   <div className='btn_navbar_div'>
                       <Link href='/experiencePage'><button className='btn_navbar'>> Experience</button></Link>
                        
                   </div>
                   <div className='btn_navbar_div'>
                       <Link href=''><button className='btn_navbar'>> Photos</button></Link>
                        
                   </div>

                   <div className='btn_navbar_div'>
                       <Link href='/contact'><button className='btn_navbar'>> Contact</button></Link>
                        
                   </div>
                </section>
                <section className='social_left_navbar'>
                    <div className='img_social' href='' target='blank'>
                        <img src='/facebook.png' />
                        <a href='https://www.facebook.com/profile.php?id=100009292766958' target='blank'></a>
                    </div>
                    <div className='img_social' href=''>
                        <a href=''></a>
                        <img  src='/instagram.png' />
                    </div>
                    <div className='img_social' href='' target='blank'>
                        <img src='/github.png' />
                        <a href='https://github.com/nafis01320' target='blank'></a>
                    </div>
                </section>
            </div>
        </>
    );
}
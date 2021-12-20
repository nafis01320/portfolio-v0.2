import React from 'react'
// Import Image from 'next/image'

export default function Home1(){
    return (
        <>
            <div className='contentBar'>
                <div className='welcomeText'>Welcome!<br /><p>to the world of magic and software</p></div>
                <div className='imageDiv_home'>
                    <img src='/logo1.png' alt='image' />
                </div>
                <div className='learn_skill_text'>
                    gather skill!
                </div>
                <div className='learn_skill_links'>
                    {/* kajer dabba */}
                    <div className='link'> 
                        <div className='linkText'>Learn Next.js</div>
                        <div className='linkText'>want to gather more skills?</div>
                        <div className='linkText'>Learn more ></div>
                    </div>

                    <div className='link'> 
                        <div className='linkText'>Learn Next.js</div>
                        <div className='linkText'>want to gather more skills?</div>
                        <div className='linkText'>Learn more ></div>
                    </div>

                    <div className='link'> 
                        <div className='linkText'>Learn Next.js</div>
                        <div className='linkText'>want to gather more skills?</div>
                        <div className='linkText'>Learn more ></div>
                    </div>

                    <div className='link'> 
                        <div className='linkText'>Learn Next.js</div>
                        <div className='linkText'>want to gather more skills?</div>
                        <div className='linkText'>Learn more ></div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
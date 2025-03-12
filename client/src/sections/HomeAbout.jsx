import React from 'react'
import CountUp from 'react-countup';
import styled from 'styled-components';



const HomeAbout = () => {
    return (
        <>
            <Wrapper>
                <h1>Tmsuit makes growing remote and international <br />
                    teams effortless. Ready to get started?
                </h1>
                <div className="counters">
                    <div className="countries counter-container">
                        <CountUp
                            start={0}
                            end={10}
                            className='counter'
                            duration={2.75} />
                        <span>countries</span>
                    </div>

                    <div className="customers counter-container">
                        <CountUp
                            className='counter'
                            start={0}
                            end={5}
                            duration={2.75} />
                        <span>customers</span>
                    </div>
                    <div className="legal-experts counter-container">
                        <CountUp
                            className='counter'
                            start={0}
                            end={5}
                            duration={2.75} />
                        <span>legal-experts</span>
                    </div>

                    <div className="currencies counter-container">
                        <CountUp
                            className='counter'
                            start={0}
                            end={5}
                            duration={2.75} />
                        <span>currencies</span>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default HomeAbout


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;  
    margin: 4rem 0px;
    text-align: center;
    background-color: #eff2f9;

    h1{
        font-size: 2rem;
    }

    .counters{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        
        .counter-container{
            /* width: 20%; */
            height: max-content;
            display: flex;
            flex-direction: column;
            margin: 1rem;
            font-size: 2rem;

            .counter{
                font-weight: bolder;
                color:#3763eb;
                font-size: 2.5rem;
            }
        }
    }
`
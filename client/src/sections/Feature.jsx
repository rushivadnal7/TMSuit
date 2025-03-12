import React from 'react'
import { Feature2LeftToRightRow, Feature2RightToLeftRow, FeatureOne, FeatureSecond, FeatureWrapper } from '../wrappers/sectionWrappers/feature'
import availabilityManagement from '../assets/features/availabilityManagement.png'
import customReporting from '../assets/features/customReporting.png'
import leaveManagement from '../assets/features/leaveManagement.png'
import resourceSchedule from '../assets/features/resourceSchedule.png'
import timeTracking from '../assets/features/timeTracking.png'
import feature2Row1Banner from '../assets/features/feature2-row1banner.png'
import feature2Row2Banner from '../assets/features/feature2-row2banner.png'
import feature2Row3Banner from '../assets/features/feature2-row3banner.png'
import Button from '../components/Button'

const Feature = () => {

    let rowContentArray = [
        {
            id: 1,
            rowStyle: 'Feature2LeftToRightRow',
            title: 'One seamless system. <br /> Workforce-wide impact.',
            para1: `Tmsuit is the answer to workplace uncertainty, with an intuitive platform that makes staff management easy and streamlined. Rely on Roubler for peace of mind in today's changing work environment - get compliant without stress!`,
            para2: `In the turbulent business world, Tmsuit offers a secure solution to staffing troubles with structured procedures and regulatory adherence. Reclaim your peace of mind today!`,
            button1: {
                text: `book a demo`,
                dark: false
            },
            button2: {
                text: `get started today`,
                dark: true
            },
            img: feature2Row1Banner,
        },
        {
            id: 2,
            rowStyle: 'Feature2RightToLeftRow',
            title: 'Plan and measure your team’s <br /> work',
            para1: `Stay on top of staffing operations by knowing who is available and assigning the right people to projects. Utilize timesheets for effective tracking, managing full-time employees as well as virtual teams or freelancers.`,

            para2: ` Monitor performance metrics regularly; use these insights to measure success in meeting business objectives. All managed remotely and measured for success!`,
            button1: {
                text: `contact us`,
                dark: false
            },
            button2: {
                text: `book a demo`,
                dark: true
            },
            img: feature2Row2Banner,
        },
        {
            id: 3,
            rowStyle: 'Feature2LeftToRightRow',
            title: `Here's How Tmsuit Project <br /> Management Works`,
            para1: `With Tmsuit project management software, you can create the perfect strategy to manage your projects. Our comprehensive solution enables accurate planning and monitoring in order to achieve each goal with ease - even remotely!`,
            para2: `Keep tabs on progress by analyzing individual tasks quickly and accurately; our toolkit is designed specifically for this purpose. Get more done today: choose Tmsuit to manage your upcoming projects like a pro!`,
            button1: {
                text: `contact us`,
                dark: false
            },
            button2: {
                text: `book a demo`,
                dark: true
            },
            img: feature2Row3Banner,
        }
    ]

    const rowComponents = {
        Feature2LeftToRightRow: Feature2LeftToRightRow,
        Feature2RightToLeftRow: Feature2RightToLeftRow,
    };


    return (
        <>
            <FeatureWrapper>
                <FeatureOne>

                    <h1>Key features of Tmsuit - the resource <br /> planning software</h1>
                    <div className="feature-images-container">
                        <div className="image1-conatiner">
                            <img src={resourceSchedule} alt="resource schedule" />
                            <h2>Resource Scheduling</h2>
                        </div>
                        <div className="image2-conatiner">
                            <img src={timeTracking} alt="time tracking" />
                            <h2>Time Tracking</h2>
                        </div>
                        <div className="image3-conatiner">
                            <img src={availabilityManagement} alt="availability management" />
                            <h2>Availability Management</h2>
                        </div>
                        <div className="image4-conatiner">
                            <img src={leaveManagement} alt="leave management" />
                            <h2>Leave Management</h2>
                        </div>
                        <div className="image5-conatiner">
                            <img src={customReporting} alt="custom reporting" />
                            <h2>Custom Reporting</h2>
                        </div>
                    </div>
                </FeatureOne>
                <FeatureSecond>
                    <div className="feature-2-heading">
                        <h2>Employee-Friendly</h2>
                        <h3>Productivity & Time Tracking Software</h3>
                        <span>Enable your workforce to do their best work with Tmsuit's employee-friendly time and productivity tracking.</span>
                    </div>
                    {rowContentArray.map((row) => {
                        const RowComponent = rowComponents[row.rowStyle]; 
                        return (
                            <RowComponent key={row.id}>
                                <div className="first-container">
                                    <span dangerouslySetInnerHTML={{ __html: row.title }} />
                                    <p>{row.para1}</p>
                                    <p>{row.para2}</p>
                                    <div className='buttons-container-row'>
                                        <Button text={row.button1.text} />
                                        <Button dark={row.button2.dark} text={row.button2.text} />
                                    </div>
                                </div>
                                <div className="second-container">
                                    <img src={row.img} alt="banner-image" />
                                </div>
                            </RowComponent>
                        );
                    })}
                </FeatureSecond>
            </FeatureWrapper>
        </>
    )
}

export default Feature
import React from 'react'
import StandardLayout from '../../layout/StandardLayout'
import ProductBanner from '../../components/ProductBanner'
import { TimeTrackingWrapper } from '../../wrappers/sectionWrappers/timetrackingWrapper'
import { SectionTitle } from '../../wrappers/sectionWrappers/remoteteam'
import { timeTrackingData } from '../../utils/timetrackingFeaturesData'
import VerticalCard from '../../components/VerticalCard'
import { time_tracking_data } from '../../utils/productCardData'
import RemoteCard from '../../components/RemoteCard'
import Subscribe from '../../sections/Subscribe'
import Faq from '../../components/Faq'
import { timeTrackingFAQ } from '../../utils/FaqData'
import { Paragraph, VerticalCardWrapper } from '../../wrappers/sectionWrappers/util'


const TimeTracking = () => {



    return (
        <StandardLayout>
            <TimeTrackingWrapper>
                <ProductBanner title={'Employee Time Tracking Solution'} url={'https://www.tmsuit.com/assets/img/bg/employee-time-tracking-solution.webp'} description={'Enhance Employee Performance - Identify Underperformers Book a Free Demo'} />
                <Paragraph>
                    Tmsuit offers Employee Time Tracking Solutions that are essential for any organization looking to effectively manage their workforce and optimize productivity. These solutions provide a streamlined and efficient way to monitor and record employee attendance, hours worked, productivity and tasks completed. By automating the time tracking process, businesses can eliminate manual data entry and reduce errors, saving time and resources. These solutions also offer various features such as real-time tracking, reporting, and integration with payroll systems, making it easier for managers to track employee performance and make informed decisions. Overall, an Employee Time Tracking Solution enhances productivity, promotes transparency, and helps businesses effectively manage their workforce.
                </Paragraph>
                <SectionTitle>
                    Unveil the Exclusive Features of Tmsuit <br />
                    Time Tracking System
                </SectionTitle>

                <VerticalCardWrapper>
                    {
                        timeTrackingData.map((feature, ind) => {
                            return (
                                <VerticalCard data={feature} key={ind} />
                            )
                        })
                    }
                </VerticalCardWrapper>
                <SectionTitle>Productive Your Work Culture with Tmsuit Time Tracker App</SectionTitle>
                {
                    time_tracking_data.map((card, ind) => {
                        return <RemoteCard key={ind} data={card} />
                    })
                }
                <Subscribe title={'Optimize Your Business Productivity to with Time Tracking Now!'} buttonText={'request a demo'} />

                <Faq faqs={timeTrackingFAQ} />
            </TimeTrackingWrapper>
        </StandardLayout>
    )
}

export default TimeTracking


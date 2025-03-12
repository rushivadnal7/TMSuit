import React from 'react';
import styled from 'styled-components';
import StandardLayout from '../../layout/StandardLayout';
import ProductBanner from '../../components/ProductBanner';
import { ContentSection, FeatureCardWrapper1, FeatureCardWrapper2, FeatureDescription, FeatureIcon1, FeatureIcon2, FeaturesGrid1, FeaturesGrid2, FeatureTitle, GetStartedButton, PricingOverviewWrapper, RemoteWrapper, SectionText, SectionTitle } from '../../wrappers/sectionWrappers/remoteteam';
import icon1 from '../../assets/products/producticons/remotePageicon1.png'
import icon2 from '../../assets/products/producticons/remotePageicon2.png'
import icon3 from '../../assets/products/producticons/remotePageicon3.png'
import icon4 from '../../assets/products/producticons/remotePageicon4.png'
import icon5 from '../../assets/products/producticons/remotePageicon5.png'
import icon6 from '../../assets/products/producticons/remotePageicon6.png'
import icon7 from '../../assets/products/producticons/remotePageicon7.png'
import Button from '../../components/Button';
import { remote_team_management_data } from '../../utils/productCardData';
import RemoteCard from '../../components/RemoteCard';
import Subscribe from '../../sections/Subscribe';


export const features1 = [
    {
        icon: icon1,
        title: 'Set clear communication guidelines'
    },
    {
        icon: icon2,
        title: 'Define expectations for remote workers'
    },
    {
        icon: icon3,
        title: 'Train and connect remote employees'
    },
    {
        icon: icon4,
        title: 'Effectively manage projects productivity'
    }
];
export const FeatureCard1 = ({ icon, title }) => (
    <FeatureCardWrapper1>
        <FeatureIcon1 src={icon} alt={title} />
        <p>{title}</p>
    </FeatureCardWrapper1>
);

const features2 = [
    {
        icon: icon5,
        title: 'Time Tracking',
        description: 'Time Tracking is designed to help you identify trends and improve efficiency with custom workflows and rules. It helps ensure employees are only logging time they’re working, not wasting it on non-productive activities.'
    },
    {
        icon: icon6,
        title: 'Project Management',
        description: 'With Tmsuit’s intuitive dashboard and tools, it’s easy to keep project details in one place and stay on top of deadlines. It also provides powerful reporting capabilities to help managers make informed decisions.'
    },
    {
        icon: icon7,
        title: 'Employee Monitoring',
        description: 'Tmsuit provides an end-to-end employee monitoring solution that helps organizations get real-time visibility into employee activities, ensuring compliance and improving efficiency.'
    }
];

const FeatureCard2 = ({ icon, title, description }) => (
    <FeatureCardWrapper2>
        <FeatureIcon2 src={icon} alt={title} />
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
        <GetStartedButton>Get Started</GetStartedButton>
    </FeatureCardWrapper2>
);






const RemoteTeam = () => {
    return (
        <StandardLayout>
            <RemoteWrapper>
                <ProductBanner
                    title={'Remote Team Management'}
                    description={'Master Remote Team Management: Boost Productivity and Collaboration'}
                    url={'https://www.tmsuit.com/assets/img/bg/remote-team-management.webp'}
                />
                <ContentSection>
                    <SectionTitle>What is Remote Team Management?</SectionTitle>
                    <SectionText>
                        Remote Team Management is the process of managing a team located in different locations, usually remotely.
                        It involves the use of communication technologies, such as video conferencing, messaging, and document sharing
                        to coordinate tasks, keep teams on track, and ensure that projects are completed on time and within budget.
                        Remote Team Managers must have strong organizational skills and be able to effectively manage people from a distance.
                    </SectionText>
                </ContentSection>
                <ContentSection>
                    <SectionTitle>How remote team management can help you</SectionTitle>
                    <SectionText>
                        Remote team management can help organizations save time and money while increasing productivity.
                        By leveraging the power of technology, remote teams can be managed more effectively and efficiently.
                    </SectionText>

                    <FeaturesGrid1>
                        {features1.map((feature, index) => (
                            <FeatureCard1 key={index} {...feature} />
                        ))}
                    </FeaturesGrid1>
                </ContentSection>
                <Button dark={true} text={'request a demo'} />
                <SectionTitle>Improve Productivity and Time Management <br />
                    with Remote Team Management System
                </SectionTitle>
                <FeaturesGrid2>
                    {features2.map((feature, index) => (
                        <FeatureCard2 key={index} {...feature} />
                    ))}
                </FeaturesGrid2>
                <SectionTitle>Get the Most out of Your Remote Employees’ Time
                </SectionTitle>
                {
                    remote_team_management_data.map((card, index) => {
                        return (
                            <RemoteCard key={index} data={card} />
                        )
                    })
                }
                <SectionTitle>Pricing Overview
                </SectionTitle>
                <SectionTitle>Every Thing in Project Management+ Other Features
                </SectionTitle>
                <PricingOverviewWrapper>
                    <div className="container">
                        <h2>time tracking</h2>
                        <span>Starting from 249 /user/month</span>
                        <div className='bar'></div>
                        <span>Only Time Tracking Features</span>
                    </div>
                    <div className="container">
                        <h2>Time Tracking + Project</h2>
                        <span>Starting from 299 /user/month</span>
                        <div className='bar'></div>
                        <span>Every Thing in Time Tracking+ Other Features</span>
                    </div>
                    <div className="container">
                        <h2>Employee Monitoring</h2>
                        <span>Starting from 320 /user/month</span>
                        <div className='bar'></div>
                        <span>Every Thing in Project Management+ Other Features</span>
                    </div>
                </PricingOverviewWrapper>
                <Subscribe title={'Get Your Remote Team Management Today'} description={'Start Your Demo Now'} buttonText={'request a demo'} />
            </RemoteWrapper>

        </StandardLayout>
    );
};

export default RemoteTeam;

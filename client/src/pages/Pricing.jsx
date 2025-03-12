import React from 'react'
import StandardLayout from '../layout/StandardLayout'
import TitleBanner from '../components/TitleBanner'
import { PricingButton, PricingCard, PricingWrapper } from '../wrappers/sectionWrappers/Pricing'
import parse from 'html-react-parser';


const Pricing = () => {

    const plansData = [
        {
            id: 1,
            title: 'basic',
            price: '$2.99',
            description: `per user/month billed annually <br/> (or $2.99 if billed monthly)`,
            featuresTitle: 'Features',
            features: [
                'Unlimited users and groups',
                'Team & individual dashboards',
                'Unlimited projects and tasks',
                'Silent tracking',
                'Unlimited screenshots',
                'Activity tracking',
                'Work - life balance metrics',
                'Basic reporting'
            ]
        },
        {
            id: 2,
            title: 'standard',
            price: '$3.49',
            description: `per user/month billed annually <br/> (or $3.99 if billed monthly)`,
            featuresTitle: 'Everything in Basic, plus:',
            features: [
                'Productivity ratings',
                'Break tracking',
                'Inactivity alerts',
                '60+ integrations',
                'Payroll features',
                'Web & app usage report',
                'Daily email notifications',
                'Real-time email notifications'
            ]
        },
        {
            id: 3,
            title: 'Entereprise',
            price: '$7.49',
            description: `per user/month billed annually <br/> (or $8.99 if billed monthly)`,
            featuresTitle: 'Everything in Standard,plus:',
            features: [
                'Video screen recording',
                'Internet connectivity reporting',
                'Client login access',
                'Executive dashboard',
                'Automatic user provisioning',
                'Dedicated account manager'
            ]
        },
    ]

    return (
        <>
            <StandardLayout>
                <TitleBanner description={'Get started for 7 days free and upgrade to get more features!'} title={'Team Productivity Tracking Software Plan'} url={'https://www.tmsuit.com/assets/img/bg/project-management-software.webp'} />

                <PricingWrapper>
                    {plansData.map((plan, index) => (
                        <>
                            <PricingCard>
                                <h1>{plan.title}</h1>
                                <span>{plan.price}</span>
                                <p>{parse(plan.description)}</p>
                                <PricingButton> Buy now</PricingButton>
                                <span>{plan.featuresTitle}</span>
                                <ul>
                                    {plan.features.map((feature) => {
                                        return <li key={index}>{feature}</li>;
                                    })}
                                </ul>
                            </PricingCard>
                        </>
                    ))}
                </PricingWrapper>
            </StandardLayout>
        </>
    )
}

export default Pricing

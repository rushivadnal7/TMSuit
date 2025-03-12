import React from 'react'
import StandardLayout from '../../layout/StandardLayout'
import ProductBanner from '../../components/ProductBanner'
import styled from 'styled-components'
import { FeaturesGrid1, SectionTitle } from '../../wrappers/sectionWrappers/remoteteam'
import { Paragraph, VerticalCardWrapper } from '../../wrappers/sectionWrappers/util'
import { FeatureCard1, features1 } from './RemoteTeam'
import Button from '../../components/Button'
import { timeTrackingData } from '../../utils/timetrackingFeaturesData'
import VerticalCard from '../../components/VerticalCard'
import { payroll_management_data } from '../../utils/productCardData'
import RemoteCard from '../../components/RemoteCard'
import IconBoxes from '../../components/IconBoxes'
import Subscribe from '../../sections/Subscribe'
import Faq from '../../components/Faq'
import { payrollFAQ } from '../../utils/FaqData'
const Payroll = () => {
  return (

    <StandardLayout>
      <Wrapper>
        <ProductBanner description={'Master Remote Team Management: Boost Productivity and Collaboration'} title={'Remote Team Management'} url={'https://www.tmsuit.com/assets/img/bg/remote-team-management.webp'} />

        <Paragraph>
          Tmsuit Payroll Management System is a comprehensive and user-friendly software solution designed to streamline your payroll management processes. With its advanced features and intuitive interface, it is the ideal choice for businesses of all sizes looking to enhance their payroll management capabilities. The system offers customizable options to meet the unique requirements of each organization, ensuring that payroll calculations, tax deductions, and employee benefit management are carried out accurately and efficiently.
        </Paragraph>
        <Paragraph>
          Tmsuit Payroll Management System provides detailed and transparent reporting features, allowing HR managers and administrators to monitor payroll expenses and track employee records effortlessly. With its ability to integrate with other HR and accounting systems, Tmsuit simplifies the payroll process even further, saving valuable time and resources for businesses. By reducing manual tasks and automating repetitive payroll functions, Tmsuit Payroll Management System enables organizations to focus on more strategic initiatives, boosting productivity and employee satisfaction. Overall, Tmsuit is a reliable and innovative solution that empowers businesses to manage their payroll effortlessly, ensuring accurate and timely payments while adhering to legal requirements and industry standards.
        </Paragraph>
        <SectionTitle>
          Discover Features of Tmsuit Payroll Management System
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
        <SectionTitle>
          Modern Payroll Management to Reduce Workload & Enhance Accuracy
        </SectionTitle>
        {
          payroll_management_data.map((card, ind) => {
            return <RemoteCard key={ind} data={card} />
          })
        }
        <SectionTitle>
          How Tmsuit Payroll Manager Works?
        </SectionTitle>
        <VerticalCardWrapper>
          {
            timeTrackingData.map((feature, ind) => {
              return (
                <IconBoxes data={feature} key={ind} />
              )
            })
          }
        </VerticalCardWrapper>
        <Subscribe buttonText={'request a demo'} title={'Optimize Your Business Productivity to with Time Tracking Now!'} />
        <Faq faqs={payrollFAQ} />
      </Wrapper>
    </StandardLayout>
  )
}

export default Payroll


const Wrapper = styled.div`
      width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
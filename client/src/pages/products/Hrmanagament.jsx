import React from 'react'
import StandardLayout from '../../layout/StandardLayout'
import ProductBanner from '../../components/ProductBanner'
import styled from 'styled-components'
import { Paragraph, VerticalCardWrapper } from '../../wrappers/sectionWrappers/util'
import { SectionTitle } from '../../wrappers/sectionWrappers/remoteteam'
import IconBoxes from '../../components/IconBoxes'
import { timeTrackingData } from '../../utils/timetrackingFeaturesData'
import { hr_management_data } from '../../utils/productCardData'
import RemoteCard from '../../components/RemoteCard'
import Subscribe from '../../sections/Subscribe'
import Faq from '../../components/Faq'
import { hrFAQ } from '../../utils/FaqData'
const Hrmanagament = () => {
  return (
    <StandardLayout>
      <Wrapper>
        <ProductBanner title={'HR Management Solution'} description={'HR Management Solution'} url={'https://www.tmsuit.com/assets/img/bg/HR-Management-Solution.webp'} />
        <Paragraph>
          Tmsuit HR Management Solution is a comprehensive software designed to streamline and automate various functions within the Human Resources department. It offers organizations a simplified and efficient way to manage core HR processes, such as recruitment, employee onboarding, performance assessment, payroll administration, Attendance & Leave Management and talent management. With its user-friendly interface and powerful features, HR Management Solution allows HR professionals to save time and effort by centralizing all HR-related information, tracking employee data, generating reports, and ensuring compliance with HR policies and regulations. This solution not only enhances operational efficiency but also promotes employee engagement and satisfaction through self-service portals and seamless communication channels. By providing a holistic approach to HR management, organizations can better focus on their core operations while ensuring a productive and harmonious work environment.
        </Paragraph>
        <SectionTitle>
          Top Features Of Tmsuit HR Management Software
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
        <SectionTitle>
          Make Your Daily HR Operations Effective With Tmsuit Basic HR
        </SectionTitle>
        {
          hr_management_data.map((card, ind) => {
            return <RemoteCard key={ind} data={card} />
          })
        }
        <SectionTitle>
          How Basic HRM Works ?
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
        <Faq faqs={hrFAQ}/>
      </Wrapper>
    </StandardLayout>)
}

export default Hrmanagament

const Wrapper = styled.div`
      width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
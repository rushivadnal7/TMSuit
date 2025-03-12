import React from 'react'
import StandardLayout from '../../layout/StandardLayout'
import ProductBanner from '../../components/ProductBanner'
import { ProjectManagementWrapper } from '../../wrappers/sectionWrappers/projectManagement'
import { Paragraph, VerticalCardWrapper } from '../../wrappers/sectionWrappers/util'
import { SectionTitle } from '../../wrappers/sectionWrappers/remoteteam'
import VerticalCard from '../../components/VerticalCard'
import { timeTrackingData } from '../../utils/timetrackingFeaturesData'
import { project_management_data } from '../../utils/productCardData'
import RemoteCard from '../../components/RemoteCard'
import Subscribe from '../../sections/Subscribe'
import Faq from '../../components/Faq'
import { projectManagementFAQ } from '../../utils/FaqData'


const ProjectManagement = () => {
  return (
    <StandardLayout>
      <ProjectManagementWrapper>
        <ProductBanner title={'Project Management Software'} description={'Unlock the Power of Fully Featured Project Management Setup!'} url={'https://www.tmsuit.com/assets/img/bg/project-management-software.webp'} />
        <Paragraph>
          Tmsuit offers Project Management software that helps individuals and teams streamline and organize their projects from start to finish. This software provides a centralized platform where project managers can plan, execute, and manage tasks, resources, and budgets. It offers a range of features such as project planning, scheduling, task management, collaboration, document sharing, and reporting. With real-time updates and notifications, project management software allows for effective communication and coordination among team members, leading to increased productivity and timely project delivery. It enables managers to track progress, monitor milestones, and identify potential bottlenecks or risks. Ultimately, project management software serves as an essential asset to streamline workflows, optimize resource allocation, and achieve successful project outcomes.
        </Paragraph>
        <SectionTitle>
          Top Features Of Tmsuit Project Management Software
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
          Tmsuit Project Management Solution – Unleash the Speed of Success!
        </SectionTitle>
        {
          project_management_data.map((card, ind) => {
            return <RemoteCard key={ind} data={card} />
          })
        }
        <Subscribe title={'Embrace Our Project Management Solution Today for Timely Success!'} buttonText={'request a demo'} />
        <Faq faqs={projectManagementFAQ}/>
      </ProjectManagementWrapper>
    </StandardLayout>
  )
}

export default ProjectManagement
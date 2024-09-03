import React, { useEffect } from 'react'
import { Hero, SocialBar, PromoSection, FeatureBanner, InfoSection, ServicesComponent, Testimonial } from '../components/index'
import image1 from "../assets/pictures/Rectangle 6.png"
import image2 from "../assets/pictures/Rectangle 7.png"
import image3 from "../assets/pictures/img2.png"
import { useDataGlobal } from '../context'



function Home() {
  const {updateHomePage} = useDataGlobal()
  useEffect(() => updateHomePage(), [])
  return (
    <div className=''>
      <Hero/>
      <SocialBar/>
      <PromoSection/>
      <FeatureBanner visible={false}/>

      <h1 className="text-center text-3xl font-bold my-8">Everything You Need To Get Ahead</h1>
      <InfoSection
        image={image1}
        title="The Fastest Hiring And Payments"
        description="We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation."
        listItems={['Managed IT Services', 'Cloud Solution', 'Cybersecurity', 'IT Consulting']}
        linkText="Pay your external workforce in one click."
        linkUrl="#"
        reverse={false}
      />

      {/* Second InfoSection Instance */}
      <InfoSection
        image={image2}
        title="The Fastest Hiring And Payments"
        description="We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation."
        listItems={['Managed IT Services', 'Cloud Solution', 'Cybersecurity', 'IT Consulting']}
        linkText="Pay your external workforce in one click."
        linkUrl="#"
        reverse={true}
      />
      {/* Second InfoSection Instance */}
      <InfoSection
        image={image3}
        title="The Fastest Hiring And Payments"
        description="We specialize in delivering cutting-edge IT services tailored to meet the unique needs of businesses across industries. Our expert team is dedicated to providing comprehensive solutions that drive efficiency, enhance security, and foster innovation."
        listItems={['Managed IT Services', 'Cloud Solution', 'Cybersecurity', 'IT Consulting']}
        linkText="Pay your external workforce in one click."
        linkUrl="#"
        reverse={false}
      />

      <FeatureBanner visible={true}/>

      <ServicesComponent/>

      <Testimonial/>

      
      <FeatureBanner visible={true}/>
    </div>
  )
}

export default Home

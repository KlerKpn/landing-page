import React from 'react'
import Member from './Member'

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-2xl tracking-tight">
          <strong>Lorem ipsum dolor sit amet. </strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero et
          quidem. Nesciunt sed odit tenetur? Obcaecati sapiente facilis, minima
          debitis voluptate mollitia voluptatibus ad! Deserunt illo cupiditate
          minus facilis!
        </p>
      </div>
      <div className="container mx-auto text-center mt-28">
        <h2>Our team</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="klerkpn"
            name="KlerKpn"
            socialId="@klerkpn"
            link="https://github.com/KlerKpn"
          />
          <Member
            id="klerkpn"
            name="KlerKpn"
            socialId="@klerkpn"
            link="https://github.com/KlerKpn"
          />
          <Member
            id="klerkpn"
            name="KlerKpn"
            socialId="@klerkpn"
            link="https://github.com/KlerKpn"
          />
          <Member
            id="klerkpn"
            name="KlerKpn"
            socialId="@klerkpn"
            link="https://github.com/KlerKpn"
          />
          <Member
            id="klerkpn"
            name="KlerKpn"
            socialId="@klerkpn"
            link="https://github.com/KlerKpn"
          />
        </div>
      </div>
      About Us
    </section>
  )
}

export default AboutUs

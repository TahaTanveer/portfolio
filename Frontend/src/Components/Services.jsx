import React from 'react';
import './Services.css';

const Services = () => {
  const cards = [
    {
      p: "Web Design",
      d: "Stand out online with custom website design tailored to your unique needs! I create visually stunning, user-friendly websites that reflect your brand's identity and engage your audience",
    },
    {
      p: "SEO Marketing",
      d: "Boost your website’s visibility with expert SEO marketing! I specialize in optimizing your site to rank higher on search engines, attract targeted traffic, and drive measurable results",
    },
    {
      p: "Web Development",
      d: "Bring your vision to life with expert web development! I create responsive, high-performing websites tailored to your needs, ensuring seamless functionality and an exceptional user experience.",
    },
    {
      p: "E-commerce Store",
      d: "Launch a successful online store with expert e-commerce solutions! I design and develop user-friendly, visually appealing platforms tailored to your business needs. From secure payment gateways to seamless product management,",
    },
    {
      p: "Full-stack development",
      d: "Transform your ideas into reality with expert full-stack development services! As an independent full-stack developer, I specialize in building dynamic, scalable, and user-friendly applications from front-end design to back-end functionality",
    },
    {
      p: "Wordpress Website",
      d: "Create a stunning and functional website with expert WordPress services! I specialize in designing and customizing WordPress sites tailored to your brand and goals. Whether you need a blog, portfolio, or e-commerce store, I ensure a user-friendly",
    },
  ];

  return (
    <div>
      <h3 className='heading'>Services</h3>
      <h3 className='headingtwo'>My Services</h3>
      <div className="container">
        {cards.map((card, index) => (
          <div key={index} className="box">
            <h3 className="cardheading">{card.p}</h3>
            <p className="cardparagraph">{card.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
import React from 'react';

const DivisionCard = ({ imageUrl, title, link }) => {
  return (
    
    <div className="card">
      <div className="content">
        <div className="imgbx">
          <a href={link}><img src={imageUrl} className="img-fluid" alt="..." /></a>
        </div>
        <div className="contentbx">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

const DivisionCardContainer = () => {
  const divisionData = [
    {
      title: 'JEE (ADVANCED)',
      imageUrl: 'menu/img/divisions/jee-adv.png',
      link: 'courses/jee-advance.aspx'
    },
    {
      title: 'JEE (Main)',
      imageUrl: 'menu/img/divisions/jee-main.png',
      link: 'courses/jee-main.aspx'
    },
    {
      title: 'Medical',
      imageUrl: 'menu/img/divisions/medical.png',
      link: 'http://medical.resonance.ac.in'
    },
    {
      title: 'PCCP',
      imageUrl: 'menu/img/divisions/pccp.png',
      link: 'https://www.pccp.resonance.ac.in'
    },
    {
      title: 'Commerce',
      imageUrl: 'menu/img/divisions/commerce.png',
      link: 'http://www.clpd.resonance.ac.in'
    },
    {
      title: 'DLPD',
      imageUrl: 'menu/img/divisions/dlpd.png',
      link: 'http://www.dlpd.resonance.ac.in'
    },
    {
      title: 'PSPD',
      imageUrl: 'menu/img/divisions/pspd.png',
      link: 'http://pspd.resonance.ac.in'
    },
    {
      title: 'MEX',
      imageUrl: 'menu/img/divisions/mex.png',
      link: 'http://mex.resonance.ac.in'
    }
  ];

  return (
    <div className="division-card-container">
      {divisionData.map((division, index) => (
        <DivisionCard
          key={index}
          title={division.title}
          imageUrl={division.imageUrl}
          link={division.link}
        />
      ))}
    </div>
  );
};

export default DivisionCardContainer;

import React from 'react';
import iconspremiumquality from './icons/premium-quality.png';

const featureList = [
  { title: 'Premium Quality', desc: 'vibrant colors &\ndurable materials' },
  { title: 'Fast Shipping', desc: 'Safe & fast delivery\nacross india' },
  { title: 'Secure Payment', desc: 'Multiple payment\noptions' },
  { title: 'Easy Returns', desc: 'Hassle-free returns\nwithin 7 days' },
  { title: 'Perfect Gift', desc: 'Ideal for any occasion\n& special moments' },
];

function Features() {
  return (
    <div className="features-container">
      {featureList.map((item, idx) => (
        <div className="feature-item" key={idx}>
          <div className="feature-icon-wrapper">
            <img src={iconspremiumquality} alt={item.title} className="feature-icon" />
          </div>
          <div className="text">
            <h4 className="feature-title">{item.title}</h4>
            <p className="feature-description">
              {item.desc.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
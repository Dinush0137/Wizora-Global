import React from 'react';
import { Code2, Cpu, Layers, CloudCog, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/site';
import { useReveal } from '../hooks/useReveal';
import SectionHeading from './common/SectionHeading';
import './Services.css';

const iconMap = {
  Code2,
  Cpu,
  Layers,
  CloudCog,
};

export default function Services() {
  const revealRef = useReveal();
  const { services } = siteConfig;

  return (
    <section className="section section-tint" id="services">
      <div className="container" ref={revealRef}>
        <SectionHeading
          eyebrow="SERVICES &amp; EXPERTISE"
          title="End-to-End"
          titleAccent="Tech Solutions"
          description="From idea to implementation, we provide comprehensive software, hardware and consulting services to turn your vision into reality."
          className="reveal"
        />

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code2;
            const delayClass = `reveal-delay-${index + 1}`;

            return (
              <article
                key={service.id}
                className={`service-card reveal ${delayClass}`}
              >
                <div className="service-icon-wrapper" aria-hidden="true">
                  <IconComponent size={26} />
                </div>

                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>

                {service.tags && (
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag} className="service-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <a href={service.ctaHref} className="service-card-link">
                  <span>{service.ctaText}</span>
                  <ArrowRight size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { siteConfig } from '../../data/site';
import { useReveal } from '../../hooks/useReveal';
import SectionHeading from '../common/SectionHeading';
import WorldMap from './WorldMap';
import ClientLogos from './ClientLogos';
import './Clients.css';

export default function Clients() {
  const revealRef = useReveal();
  const { clientsNetwork } = siteConfig;

  return (
    <section className="section" id="clients">
      <div className="container" ref={revealRef}>
        <SectionHeading
          eyebrow={clientsNetwork.eyebrow}
          title={clientsNetwork.title}
          titleAccent={clientsNetwork.titleAccent}
          description={clientsNetwork.subtext}
          className="reveal"
        />

        <div className="clients-container reveal reveal-delay-2">
          <WorldMap />
          <ClientLogos />
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { siteConfig } from '../../data/site';
import clientLogosCardImg from '../../assets/client-logos-card.png';

export default function ClientLogos() {
  const { clients } = siteConfig.clientsNetwork;
  const [activeTab, setActiveTab] = useState('grid'); // 'grid' or 'official'

  return (
    <div className="logo-panel-card">
      <div className="logo-panel-header">
        <div className="logo-header-title">
          <strong>Our Valued Clients</strong>
          <span className="logo-panel-badge">CLIENT NETWORK</span>
        </div>
        <div className="logo-view-toggle">
          <button
            type="button"
            className={`toggle-pill ${activeTab === 'grid' ? 'active' : ''}`}
            onClick={() => setActiveTab('grid')}
          >
            Interactive Grid
          </button>
          <button
            type="button"
            className={`toggle-pill ${activeTab === 'official' ? 'active' : ''}`}
            onClick={() => setActiveTab('official')}
          >
            Official Emblems
          </button>
        </div>
      </div>

      {activeTab === 'official' ? (
        <div className="official-logos-container">
          <img
            src={clientLogosCardImg}
            alt="Official client logos of Wizora Global including Ronan Group, Fontex, UJPS, Cargills, CEB, Jayasoma, Lova, Stassen, SLT Mobitel and more"
            className="official-logos-img"
          />
        </div>
      ) : (
        <div className="client-logo-grid" role="list" aria-label="15 Valued Clients">
          {clients.map((client) => {
            return (
              <div
                key={client.id}
                className={`client-logo-item type-${client.type}`}
                role="listitem"
                style={{ '--client-accent': client.accentColor }}
              >
                <span className="client-logo-name">
                  {client.name}
                </span>
                {client.subtext && (
                  <span className="client-logo-sub">{client.subtext}</span>
                )}
              </div>
            );
          })}
        </div>
      )}

      <p className="logo-panel-note">
        Wizora Global proudly delivers hardware and software engineering solutions to industry leaders across logistics, retail, telecom, and manufacturing.
      </p>
    </div>
  );
}

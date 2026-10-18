import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/site';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  const { contact } = siteConfig;

  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Direct Chat with Wizora Global on WhatsApp"
    >
      <div className="whatsapp-pulse-ring" aria-hidden="true"></div>
      <MessageCircle size={28} />
    </a>
  );
}

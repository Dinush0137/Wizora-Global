import React from 'react';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { useReveal } from '../../hooks/useReveal';
import ContactForm from './ContactForm';
import './Contact.css';

export default function Contact() {
  const revealRef = useReveal();
  const { contactSection, contact } = siteConfig;

  return (
    <section className="section" id="contact">
      <div className="container contact-grid" ref={revealRef}>
        {/* Contact Info & Methods Column */}
        <div className="contact-info reveal">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span>{contactSection.eyebrow}</span>
          </p>

          <h2>
            {contactSection.title} <br />
            <em>{contactSection.titleAccent}</em>
          </h2>

          <p>{contactSection.subtext}</p>

          <div className="contact-methods">
            {/* Direct Email Card */}
            <a
              href={`mailto:${contact.email}`}
              className="contact-method-card"
              aria-label={`Email Wizora Global at ${contact.email}`}
            >
              <div className="method-icon-box" aria-hidden="true">
                <Mail size={22} />
              </div>
              <div className="method-details">
                <span className="method-label">Email Us</span>
                <span className="method-value">{contact.email}</span>
                <span className="method-subtext">We'll get back to you as soon as possible.</span>
              </div>
              <ArrowUpRight size={20} className="method-arrow" aria-hidden="true" />
            </a>

            {/* Direct WhatsApp Card */}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-card whatsapp"
              aria-label={`Chat with Wizora Global on WhatsApp at ${contact.phoneDisplay}`}
            >
              <div className="method-icon-box" aria-hidden="true">
                <MessageCircle size={22} />
              </div>
              <div className="method-details">
                <span className="method-label">Chat on WhatsApp</span>
                <span className="method-value">{contact.phoneDisplay}</span>
                <span className="method-subtext">Instant messaging support, anytime.</span>
              </div>
              <ArrowUpRight size={20} className="method-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Quick Message Form Column */}
        <div className="reveal reveal-delay-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

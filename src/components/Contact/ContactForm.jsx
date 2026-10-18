import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import { siteConfig } from '../../data/site';
import Button from '../common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: '' }

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!data.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!data.message.trim()) {
      errs.message = 'Please provide a message or project outline';
    } else if (data.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const currentValidation = validate({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: currentValidation[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const currentValidation = validate(formData);
    setErrors(currentValidation);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const currentValidation = validate(formData);
    setErrors(currentValidation);

    if (Object.keys(currentValidation).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      const recipientEmail = siteConfig.contact.formRecipientEmail || siteConfig.contact.email;

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            _subject: `New Project Inquiry from ${formData.name.trim()} - Wizora Global`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // If FormSubmit requests first-time activation, explain clearly
          if (data && data.message && data.message.toLowerCase().includes('activation')) {
            setSubmitStatus({
              type: 'success',
              message: `Message sent! FormSubmit has sent a one-time activation link to ${recipientEmail}. Once confirmed, future messages will go straight to the inbox!`,
            });
          } else {
            setSubmitStatus({
              type: 'success',
              message: `Thank you, ${formData.name.trim()}! Your message has been sent directly to ${recipientEmail}. Our team will get back to you shortly.`,
            });
          }

          // Reset form on successful transmission
          setFormData({ name: '', email: '', message: '' });
          setTouched({});
          setErrors({});
        } else {
          throw new Error(data?.message || 'Server returned an error');
        }
      } catch (err) {
        console.error('Direct email submission failed:', err);
        setSubmitStatus({
          type: 'error',
          message: `Could not send automatically over the network. You can dispatch directly via your email client to ${recipientEmail}.`,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleManualEmailFallback = () => {
    const mailtoUrl = siteConfig.contact.mailtoUrl(
      formData.name.trim(),
      formData.email.trim(),
      formData.message.trim()
    );
    window.location.href = mailtoUrl;
  };

  return (
    <div className="contact-form-panel">
      <h3>{siteConfig.contactSection.formTitle}</h3>

      {submitStatus && submitStatus.type === 'success' && (
        <div className="form-success-banner" role="status">
          <CheckCircle2 size={20} className="status-icon success" />
          <div className="status-copy">
            <strong>Message Dispatched</strong>
            <p>{submitStatus.message}</p>
          </div>
        </div>
      )}

      {submitStatus && submitStatus.type === 'error' && (
        <div className="form-error-banner" role="alert">
          <AlertCircle size={20} className="status-icon error" />
          <div className="status-copy">
            <strong>Submission Notice</strong>
            <p>{submitStatus.message}</p>
            <button
              type="button"
              className="fallback-mailto-btn"
              onClick={handleManualEmailFallback}
            >
              <Mail size={14} /> Open in Email App Instead
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid-row">
          {/* Name Field */}
          <div className="form-field">
            <label htmlFor="contact-name" className="form-label">
              Name <span className="required" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your Name or Company"
              className={`form-input ${touched.name && errors.name ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={Boolean(touched.name && errors.name)}
              aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
            />
            {touched.name && errors.name && (
              <span id="name-error" className="form-error">
                <AlertCircle size={12} /> {errors.name}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-field">
            <label htmlFor="contact-email" className="form-label">
              Email <span className="required" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className={`form-input ${touched.email && errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              required
              aria-required="true"
              aria-invalid={Boolean(touched.email && errors.email)}
              aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
            />
            {touched.email && errors.email && (
              <span id="email-error" className="form-error">
                <AlertCircle size={12} /> {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div className="form-field">
          <label htmlFor="contact-message" className="form-label">
            Message <span className="required" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell us about your project or inquiry..."
            className={`form-textarea ${touched.message && errors.message ? 'is-invalid' : ''}`}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            required
            aria-required="true"
            aria-invalid={Boolean(touched.message && errors.message)}
            aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
          />
          {touched.message && errors.message && (
            <span id="message-error" className="form-error">
              <AlertCircle size={12} /> {errors.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          className="form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="btn-spinner" /> Sending Message...
            </>
          ) : (
            <>
              <Send size={16} /> Send Message
            </>
          )}
        </Button>

        <p className="form-disclaimer">
          {siteConfig.contactSection.disclaimer}
        </p>
      </form>
    </div>
  );
}

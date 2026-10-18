import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  centered = false,
  className = '',
}) {
  return (
    <div className={`section-heading ${centered ? 'centered' : ''} ${className}`}>
      {eyebrow && (
        <p className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true"></span>
          <span>{eyebrow}</span>
        </p>
      )}
      <h2>
        {title} {titleAccent && <em>{titleAccent}</em>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}

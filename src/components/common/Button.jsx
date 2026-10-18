import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
  type = 'button',
  target,
  rel,
  ariaLabel,
  ...rest
}) {
  const classes = [
    'button',
    `button-${variant}`,
    size === 'small' ? 'button-small' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        aria-label={ariaLabel}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
}

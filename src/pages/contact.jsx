import '../styles/pages/contact.css';

const CONTACTS = [
  {
    variant: 'email',
    title:   'Email',
    handle:  'sloaneholtby@gmail.com',
    action:  'Send a message',
    href:    'mailto:sloaneholtby@gmail.com',
    icon:    '/icons/mail.svg',
    arrow:   '/icons/arrow-up-right-green.svg',
  },
  {
    variant: 'github',
    title:   'GitHub',
    handle:  'github.com/sloholt',
    action:  'View my code',
    href:    'https://github.com/sloholt',
    icon:    '/icons/github.svg',
    arrow:   '/icons/arrow-up-right-dark.svg',
  },
  {
    variant: 'linkedin',
    title:   'LinkedIn',
    handle:  'linkedin.com/in/sloaneholtby',
    action:  'Connect with me',
    href:    'https://www.linkedin.com/in/sloane-holtby-58b76422a',
    icon:    '/icons/linkedin.svg',
    arrow:   '/icons/arrow-up-right-blue.svg',
  },
];

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__inner">
        <h1 className="contact__heading">Let&apos;s Connect</h1>
        <p className="contact__lead text-body text-secondary">
          Let’s talk projects, possibilities, or my next role. Open to internship and full-time
          opportunities starting Summer 2027.
        </p>

        <div className="contact__grid">
          {CONTACTS.map(contact => (
            <div key={contact.variant} className={`contact__card contact__card--${contact.variant}`}>
              <div className="contact__icon">
                <img src={contact.icon} alt="" />
              </div>
              <h2 className="contact__title text-heading">{contact.title}</h2>
              <p className="contact__handle text-body-small text-secondary">{contact.handle}</p>
              <hr className="contact__divider" />
              <a href={contact.href} className="contact__action" target="_blank" rel="noreferrer">
                {contact.action}
                <img src={contact.arrow} alt="" className="contact__arrow" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

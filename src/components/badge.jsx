import '../styles/components/badge.css';

export default function Badge({ children, dot = true }) {
  return (
    <span className="badge">
      {dot && <span className="badge__dot" />}
      {children}
    </span>
  );
}
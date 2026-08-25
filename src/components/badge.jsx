export default function Badge({ children }) {
  return (
    <span className="badge">
      <span className="badge__dot" />
      {children}
    </span>
  );
}
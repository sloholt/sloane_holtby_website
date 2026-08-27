export default function Button({ children, variant = "primary", href, onClick }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </Tag>
  );
}
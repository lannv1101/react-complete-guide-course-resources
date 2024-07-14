export default function TabButton({ children, isSelected, ...props }) {
  return (
    <ul>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </ul>
  );
}

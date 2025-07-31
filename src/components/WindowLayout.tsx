export default function WindowLayout({
  children,
}: {
  children: React.ReactNode[];
}) {
  const left = children[0];
  const right = children.slice(1);

  return (
    <div className="flex flex-grow gap-2 p-2 pointer-events-none">
      {/* Left Side */}
      <div className="flex-1 min-h-0">{left}</div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col gap-2">
        {right.map((child, i) => (
          <div key={i} className="flex-1 min-h-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

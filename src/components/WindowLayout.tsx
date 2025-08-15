export default function WindowLayout({
  children,
}: {
  children: React.ReactNode[];
}) {
  const windows = children.slice(0, 3);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  if (isMobile) {
    return (
      <div className="w-full h-full flex-1 flex flex-col min-h-0 gap-2 p-2 pointer-events-none">
        {windows.map((child, i) => (
          <div key={i} className="flex-1 min-h-0 overflow-hidden">
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex-1 min-h-0 flex flex-row  gap-2 p-2 pointer-events-none">
      {/* Left pane */}
      <div className="flex-1 min-h-0 min-w-0 overflow-hidden">{windows[0]}</div>

      {/* Right stack */}
      <div className="flex-1 flex flex-col min-h-0 min-w-0 gap-2 overflow-hidden">
        {windows.slice(1).map((child, i) => (
          <div key={i} className="flex-1 min-h-0 min-w-0 overflow-hidden">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

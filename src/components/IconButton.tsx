export interface IconButtonProps {
  label: string;
  icon: string;
  onClick: () => void;
  className?: string;
}

export default function IconButton({
  label,
  icon,
  onClick,
  className,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`pointer-events-auto group bg-transparent border-none outline-none focus:outline-none active:outline-none p-0 m-0 appearance-none ${className}`}
      style={{
        all: "unset", // removes inherited button styles from browser
        margin: "4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.25rem",
        cursor: 'url("./static/pointer.png"), pointer',
      }}
    >
      <img src={icon} alt={label} className="w-12 h-12 object-contain" />
      {label && (
        <span className="text-[10px] leading-none text-white font-pixel">
          {label}
        </span>
      )}
    </button>
  );
}

// src/components/Button.tsx
export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className="px-1 m-1 bg-gray-500 outline-4 outline-double text-white font-google-sans-code shadow-outset transition"
  >
    {label}
  </div>
);

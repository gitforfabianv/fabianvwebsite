// src/pages/Files.tsx
import IconButton from "../components/IconButton";
import { WindowFrame } from "../components/WindowFrame";

export default function Files({
  onClose,
  onLaunch,
}: {
  onClose: () => void;
  onLaunch: (id: string) => void;
}) {
  return (
    <WindowFrame title="Files" onClose={onClose}>
      <IconButton
        icon="./static/icons/97Doc.png"
        label="Resume"
        onClick={() => onLaunch("resume")}
      />
    </WindowFrame>
  );
}

import { WindowFrame } from "../components/WindowFrame";
import ResumeContent from "../components/ResumeContent";

export default function Resume({ onClose }: { onClose: () => void }) {
  return (
    <WindowFrame title="Resume" onClose={onClose}>
      <ResumeContent />
    </WindowFrame>
  );
}

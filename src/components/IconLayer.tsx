// components/IconLayer.tsx
import IconButton from "./IconButton";

interface IconLayerProps {
  onLaunch: (id: string) => void;
}

export default function IconLayer({ onLaunch }: IconLayerProps) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
      <div className="flex gap-4">
        <IconButton
          icon="./static/icons/31files.png"
          label="Files"
          onClick={() => onLaunch("files")}
        />
        <IconButton
          icon="./static/icons/31clock.png"
          label="Clock"
          onClick={() => onLaunch("clock")}
        />
        <IconButton
          icon="./static/icons/31Wolfenstein3d.png"
          label="Wolf3D"
          onClick={() => onLaunch("wolfenstein")}
        />
      </div>
    </div>
  );
}

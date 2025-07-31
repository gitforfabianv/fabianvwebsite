import useWindowManager from "../hooks/useWindowManager";
import MenuBar from "./MenuBar";
import DesktopGrid from "./DesktopGrid";
import IconLayer from "./IconLayer";

interface DesktopProps {
  mousePos: { x: number; y: number };
}

export default function Desktop({ mousePos }: DesktopProps) {
  const { openWindows, open, close } = useWindowManager();

  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      <IconLayer onLaunch={open} />

      <div className="absolute inset-0 z-30 flex flex-col pointer-events-none">
        <MenuBar onLaunch={open} />
        <DesktopGrid
          className="flex flex-grow"
          openWindows={openWindows}
          onCloseWindow={close}
          onLaunchWindow={open}
        />
      </div>
    </div>
  );
}

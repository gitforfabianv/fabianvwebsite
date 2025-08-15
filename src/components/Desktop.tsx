import useWindowManager from "../hooks/useWindowManager";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import DesktopGrid from "./DesktopGrid";
import IconLayer from "./IconLayer";

interface DesktopProps {
  className?: string;
}

export default function Desktop({}: DesktopProps) {
  const { openWindows, open, close } = useWindowManager();

  return (
    <>
      <div className="h-svh max-h-svh w-screen flex flex-col flex-grow overflow-hidden">
        <IconLayer onLaunch={open} />

        <MenuBar onLaunch={open} />

        <div className="w-full h-full min-h-0 flex flex-col flex-grow z-30 pointer-events-none">
          <DesktopGrid
            openWindows={openWindows}
            onCloseWindow={close}
            onLaunchWindow={open}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

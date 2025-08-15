import WindowLayout from "./WindowLayout";
import Clock from "../pages/Clock";
import Files from "../pages/Files";
import Notes from "../pages/Notes";
import Wolfenstein from "../pages/Wolfenstein";
import Resume from "../pages/Resume";
import SimpleCalendar from "../pages/Calendar";

type DesktopGridProps = {
  openWindows: string[];
  onCloseWindow: (id: string) => void;
  onLaunchWindow: (id: string) => void;
  className?: string;
};

const renderWindow = (
  id: string,
  onCloseWindow: (id: string) => void,
  onLaunchWindow: (id: string) => void
) => {
  switch (id) {
    case "clock":
      return <Clock onClose={() => onCloseWindow("clock")} />;
    case "files":
      return (
        <Files
          onClose={() => onCloseWindow("files")}
          onLaunch={onLaunchWindow}
        />
      );

    case "notes":
      return <Notes onClose={() => onCloseWindow("notes")} />;
    case "calendar":
      return <SimpleCalendar onClose={() => onCloseWindow("calendar")} />;
    case "wolfenstein":
      return <Wolfenstein onClose={() => onCloseWindow("wolfenstein")} />;
    case "resume":
      return <Resume onClose={() => onCloseWindow("resume")} />;

    default:
      return null;
  }
};

export default function DesktopGrid({
  openWindows,
  onCloseWindow,
  onLaunchWindow,
}: DesktopGridProps) {
  const leftWindow = openWindows[0]
    ? renderWindow(openWindows[0], onCloseWindow, onLaunchWindow)
    : null;

  const rightWindows = openWindows
    .slice(1)
    .map((id) => renderWindow(id, onCloseWindow, onLaunchWindow));

  return (
    <div className="w-full h-full min-h-0 min-w-0 flex-grow flex flex-col overflow-hidden pointer-events-none">
      <WindowLayout>{[leftWindow, ...rightWindows]}</WindowLayout>
    </div>
  );
}

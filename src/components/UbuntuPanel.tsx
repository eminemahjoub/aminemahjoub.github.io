import { Window, AppType } from "./Desktop";
import { Globe, Terminal, Folder, Briefcase, GraduationCap, Award, Mail, Bell } from "lucide-react";

interface UbuntuPanelProps {
  currentTime: Date;
  windows: Window[];
  onFocusWindow: (id: string) => void;
  onMinimizeWindow: (id: string) => void;
  notificationCount?: number;
  onNotificationClick?: () => void;
}

export const UbuntuPanel = ({ 
  currentTime, 
  windows, 
  onFocusWindow, 
  onMinimizeWindow,
  notificationCount = 0,
  onNotificationClick
}: UbuntuPanelProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const getWindowIcon = (type: AppType) => {
    switch (type) {
      case "portfolio":
        return Globe;
      case "terminal":
        return Terminal;
      case "projects":
        return Folder;
      case "experience":
        return Briefcase;
      case "education":
        return GraduationCap;
      case "skills":
        return Award;
      case "contact":
        return Mail;
      default:
        return Folder;
    }
  };

  const openWindows = windows.filter((w) => !w.minimized);

  return (
    <div className="absolute top-0 left-0 right-0 h-8 bg-[#2d1b1e]/95 backdrop-blur-sm border-b border-orange-500/30 flex items-center justify-between px-4 z-50 shadow-lg">
      {/* Left: Activities Button */}
      <button className="px-3 py-1 text-white hover:bg-white/10 rounded transition-colors flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-white rounded"></div>
        <span className="text-xs font-medium">Activities</span>
      </button>

      {/* Center: Window List with Icons */}
      <div className="flex-1 flex items-center justify-center gap-2 px-4 min-w-0">
        {openWindows.length > 0 ? (
          openWindows.map((window) => {
            const IconComponent = getWindowIcon(window.type);
            const maxZIndex = Math.max(...windows.map((w) => w.zIndex));
            const isActive = window.zIndex === maxZIndex && maxZIndex > 0;
            
            return (
              <button
                key={window.id}
                onClick={() => onFocusWindow(window.id)}
                onDoubleClick={() => onMinimizeWindow(window.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded transition-all min-w-0 ${
                  isActive
                    ? "bg-white/20 text-white shadow-sm"
                    : "bg-white/5 hover:bg-white/10 text-gray-300"
                }`}
                title={window.title}
              >
                <IconComponent className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs font-medium truncate max-w-[120px]">{window.title}</span>
              </button>
            );
          })
        ) : (
          <div className="text-gray-400 text-xs">No open windows</div>
        )}
      </div>

            {/* Right: System Tray */}
            <div className="flex items-center gap-4 text-white text-xs">
              {/* Notification Indicator */}
              {notificationCount > 0 && (
                <button
                  onClick={onNotificationClick}
                  className="relative px-2 py-1 hover:bg-white/10 rounded transition-colors"
                  title={`${notificationCount} notification${notificationCount > 1 ? 's' : ''}`}
                >
                  <Bell className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                </button>
              )}
              
              <div className="px-2 py-1 bg-black/40 rounded">
                <span>{formatTime(currentTime)}</span>
              </div>
              <div className="px-2 py-1 bg-black/40 rounded">
                <span>{formatDate(currentTime)}</span>
              </div>
            </div>
    </div>
  );
};


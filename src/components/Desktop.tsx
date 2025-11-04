import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { UbuntuPanel } from "./UbuntuPanel";
import { UbuntuDock } from "./UbuntuDock";
import { UbuntuWindow } from "./UbuntuWindow";
import { AboutApp } from "./apps/AboutApp";
import { ProjectsApp } from "./apps/ProjectsApp";
import { SkillsApp } from "./apps/SkillsApp";
import { ExperienceApp } from "./apps/ExperienceApp";
import { EducationApp } from "./apps/EducationApp";
import { ContactApp } from "./apps/ContactApp";
import { PortfolioBrowser } from "./apps/PortfolioBrowser";
import { TerminalApp } from "./apps/TerminalApp";
import { FolderIcon } from "./FolderIcon";

export type AppType = "portfolio" | "terminal" | "linkedin" | "github" | "facebook" | "blog" | "resume" | "about" | "projects" | "skills" | "experience" | "education" | "contact" | null;

interface Window {
  id: string;
  type: AppType;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  minimized: boolean;
}

export const Desktop = () => {
  const [windows, setWindows] = useState<Window[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const openApp = (type: AppType, title: string) => {
    const existingWindow = windows.find((w) => w.type === type && !w.minimized);
    if (existingWindow) {
      // Focus existing window
      setWindows((prev) =>
        prev.map((w) =>
          w.id === existingWindow.id ? { ...w, zIndex: nextZIndex, minimized: false } : w
        )
      );
      setNextZIndex((prev) => prev + 1);
      return;
    }

    let windowConfig = {
      x: 150 + (windows.length * 30),
      y: 50 + (windows.length * 30),
      width: 900,
      height: 600,
    };

    let windowTitle = title;
    if (type === "portfolio") {
      windowConfig = {
        x: 200,
        y: 80,
        width: 1000,
        height: 700,
      };
      windowTitle = "Browser";
    }

    const newWindow: Window = {
      id: `${type}-${Date.now()}`,
      type,
      title: windowTitle,
      ...windowConfig,
      zIndex: nextZIndex,
      minimized: false,
    };

    setWindows([...windows, newWindow]);
    setNextZIndex((prev) => prev + 1);
  };

  // Auto-open portfolio window on mount
  useEffect(() => {
    if (windows.length === 0) {
      const newWindow: Window = {
        id: `portfolio-${Date.now()}`,
        type: "portfolio",
        title: "Browser",
        x: 200,
        y: 80,
        width: 1000,
        height: 700,
        zIndex: 1,
        minimized: false,
      };
      setWindows([newWindow]);
      setNextZIndex(2);
    }
  }, []);

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w))
    );
  };

  const maximizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              x: 0,
              y: 30,
              width: window.innerWidth,
              height: window.innerHeight - 30,
              zIndex: nextZIndex,
            }
          : w
      )
    );
    setNextZIndex((prev) => prev + 1);
  };

  const focusWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex, minimized: false } : w
      )
    );
    setNextZIndex((prev) => prev + 1);
  };

  const updateWindowPosition = (id: string, x: number, y: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, x, y } : w))
    );
  };

  const updateWindowSize = (id: string, width: number, height: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, width, height } : w))
    );
  };

  const renderAppContent = (type: AppType) => {
    switch (type) {
      case "portfolio":
        return <PortfolioBrowser />;
      case "terminal":
        return <TerminalApp />;
      case "about":
        return <AboutApp />;
      case "projects":
        return <ProjectsApp />;
      case "skills":
        return <SkillsApp />;
      case "experience":
        return <ExperienceApp />;
      case "education":
        return <EducationApp />;
      case "contact":
        return <ContactApp />;
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen fixed inset-0 bg-black overflow-hidden">
      {/* Ubuntu Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/ubuntu.jpg')`,
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Top Panel */}
      <UbuntuPanel 
        currentTime={currentTime}
        windows={windows}
        onFocusWindow={focusWindow}
        onMinimizeWindow={minimizeWindow}
      />

      {/* Desktop Folders - Organized in Groups */}
      <div className="absolute top-40 left-20 flex flex-col gap-8 z-10">
        {/* Group 1: Portfolio Sections */}
        <div className="flex flex-col gap-1">
          <div className="text-white text-xs font-semibold mb-2 px-2 bg-black/40 rounded">Portfolio</div>
          <button
            onClick={() => openApp("portfolio", "Portfolio")}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#F6B73C" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              Browser
            </span>
          </button>
          <button
            onClick={() => openApp("projects", "Projects")}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#4A90E2" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              Projects
            </span>
          </button>
          <button
            onClick={() => openApp("experience", "Experience")}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#9B59B6" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              Experience
            </span>
          </button>
          <button
            onClick={() => openApp("education", "Education")}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#2ECC71" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              Education
            </span>
          </button>
          <button
            onClick={() => openApp("skills", "Skills")}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#E74C3C" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              Skills
            </span>
          </button>
          <button
            onClick={() => openApp("contact", "Contact")}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#3498DB" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              Contact
            </span>
          </button>
        </div>

        {/* Group 2: Social Media */}
        <div className="flex flex-col gap-1">
          <div className="text-white text-xs font-semibold mb-2 px-2 bg-black/40 rounded">Social</div>
          <button
            onClick={() => window.open(personalInfo.social.github, '_blank')}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#24292e" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              GitHub
            </span>
          </button>
          <button
            onClick={() => window.open(personalInfo.social.linkedin, '_blank')}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#0077b5" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              LinkedIn
            </span>
          </button>
          <button
            onClick={() => window.open(personalInfo.social.twitter, '_blank')}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#1DA1F2" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              Twitter
            </span>
          </button>
          <button
            onClick={() => window.open(personalInfo.social.credly, '_blank')}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#FF6B35" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              Credly
            </span>
          </button>
        </div>

        {/* Group 3: Tools */}
        <div className="flex flex-col gap-1">
          <div className="text-white text-xs font-semibold mb-2 px-2 bg-black/40 rounded">Tools</div>
          <button
            onClick={() => openApp("terminal", "Terminal")}
            className="flex flex-col items-start gap-2 group hover:bg-white/10 p-2 rounded transition-all cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <FolderIcon color="#000000" size={64} />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-lg text-center bg-black/40 px-2 py-0.5 rounded">
              Terminal
            </span>
          </button>
        </div>
      </div>

      {/* Windows */}
      {windows.map((window) => (
        !window.minimized && (
          <UbuntuWindow
            key={window.id}
            window={window}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onMaximize={() => maximizeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            onMove={updateWindowPosition}
            onResize={updateWindowSize}
          >
            {renderAppContent(window.type)}
          </UbuntuWindow>
        )
      ))}

      {/* Dock/Launcher */}
      <UbuntuDock
        windows={windows}
        onOpenApp={openApp}
        onFocusWindow={focusWindow}
      />
    </div>
  );
};


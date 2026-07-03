import React from 'react';

interface MobileFrameProps {
  children: React.ReactNode;
  showStatusBar?: boolean;
}

export function MobileFrame({ children, showStatusBar = true }: MobileFrameProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-[430px] h-[932px] bg-white rounded-[3rem] shadow-2xl overflow-hidden relative">
        {/* Phone Notch */}
        {showStatusBar && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />
        )}
        
        {/* Status Bar */}
        {showStatusBar && (
          <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 text-xs z-40">
            <span className="text-foreground">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-3" viewBox="0 0 16 12" fill="currentColor">
                <path d="M0 4h2v4H0V4zm3 1h2v2H3V5zm3-1h2v4H6V4zm3 1h2v2H9V5zm3-1h2v4h-2V4z" />
              </svg>
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12 4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h8zm0 1H4a1 1 0 00-1 1v4a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1zm2-1h.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3z" />
              </svg>
            </div>
          </div>
        )}
        
        {/* App Content */}
        <div className="w-full h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

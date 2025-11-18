export default function Header() {
    return (
      <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          {/* LOGO */}
          <img
            src="/carepilot_logo.png"
            alt="CarePilot Logo"
            className="h-10 w-auto"
          />
  
          {/* TITLE */}
          <div>
            <h1 className="text-xl font-semibold text-gray-900 leading-tight">
              CarePilot Assessment
            </h1>
            <p className="text-sm text-gray-500 -mt-1">
              Guidance for senior living decisions.
            </p>
          </div>
        </div>
      </header>
    );
  }
  
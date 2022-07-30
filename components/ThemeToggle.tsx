export default function ThemeToggle(props: {
  config: {
    theme: string;
    setTheme: (e: string) => void;
  };
}) {
  const { theme, setTheme } = props.config;
  return (
    <div className="form-check form-switch float-right">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            onChange={() => {
              if (theme === "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          />
          <div
            className={`w-14 h-8 rounded-full ${
              theme === "dark" ? "bg-gray-600 " : "bg-gray-400 "
            }`}
          ></div>
          <div className="dot absolute left-1 top-0 w-6 h-6 rounded-full transition text-2xl">
            {theme === "dark" ? "🌞" : "🌝"}
          </div>
        </div>
      </label>
    </div>
  );
}

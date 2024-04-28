import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div className="bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300 font-baskervville min-h-screen">
        {children}
      </div>
    </div>
  );
}

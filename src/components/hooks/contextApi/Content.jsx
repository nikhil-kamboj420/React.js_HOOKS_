import { useTheme } from "./ContextApi";
export const Content = () => {
  const { theme } = useTheme();

  const themeCondition = `p-8 ${
    theme === "light"
      ? "bg-white text-black h-[60vh]"
      : "bg-gray-900 text-white h-[60vh]"
  }`;

  return (
    <div className={themeCondition}>
      <h1 className="text-2xl">This is {theme} mode</h1>
    </div>
  );
};

const PrimaryButton = ({ btntext, theme = "default", onClick }) => {
  const themes = theme === "red" ? "bg-accent " : theme === "white" ? "bg-[--background] text-[--foreground] outline outline-2 hover:outline-none" : theme === "black" ? "bg-[--foreground] text-[--background]" : theme === "soldOut" ? "bg-[--foreground] text-[--background] hover:bg-[--foreground] cursor-default" : "bg-dark dark:text-[--background]"; // default
  return <button onClick={onClick}>{btntext}</button>;
};

export default PrimaryButton;

export const Button = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`py-3 bg-[#525252]  mt-4 sm:py-4 px-7 rounded-lg justify-center border border-gray-300 flex items-center gap-2 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${otherClasses}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};
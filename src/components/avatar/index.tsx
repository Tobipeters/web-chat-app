import { randomNumber } from "../../utils";

interface IAvatarIProps {
  name: string;
  imgSrc?: string;
  width: string;
  height: string;
  bgNumber: number
}

const bgColors = [
  "#FF5733",
  "#3498DB",
  "#27AE60",
  "#F39C12",
  "#8E44AD",
  "#E74C3C",
  "#2C3E50",
  "#1ABC9C",
  "#D35400",
  "#C0392B",
  "#0F0F0F"
];

export const Avatar: React.FC<IAvatarIProps> = ({
  name,
  imgSrc,
  width,
  height,
  bgNumber = randomNumber
}) => {

  const getInitials = (_name: string) => {
    return _name.substring(0, 2);
  };

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minWidth: `${width}px`,
        backgroundColor: bgColors[bgNumber],
      }}
      className="relative rounded-full"
    >
      {imgSrc ? (
        <img src={imgSrc} alt={name} className="w-full h-auto" />
      ) : (
        <div className="w-full h-full inline-flex items-center justify-center uppercase text-sm font-semibold text-white">
          {getInitials(name)}
        </div>
      )}
    </div>
  );
};

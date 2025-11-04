interface FolderIconProps {
  color?: string;
  size?: number;
}

export const FolderIcon = ({ color = "#F6B73C", size = 64 }: FolderIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Folder base */}
      <path
        d="M8 16C8 12.6863 10.6863 10 14 10H24L28 14H50C53.3137 14 56 16.6863 56 20V48C56 51.3137 53.3137 54 50 54H14C10.6863 54 8 51.3137 8 48V16Z"
        fill={color}
        fillOpacity="0.9"
      />
      {/* Folder highlight */}
      <path
        d="M8 16C8 12.6863 10.6863 10 14 10H24L28 14H50C53.3137 14 56 16.6863 56 20V48C56 51.3137 53.3137 54 50 54H14C10.6863 54 8 51.3137 8 48V16Z"
        fill="url(#gradient)"
        fillOpacity="0.3"
      />
      {/* Folder tab */}
      <path
        d="M24 10H18C15.7909 10 14 11.7909 14 14V18C14 20.2091 15.7909 22 18 22H24C26.2091 22 28 20.2091 28 18V14C28 11.7909 26.2091 10 24 10Z"
        fill={color}
        fillOpacity="1"
      />
      <defs>
        <linearGradient id="gradient" x1="8" y1="10" x2="56" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
};


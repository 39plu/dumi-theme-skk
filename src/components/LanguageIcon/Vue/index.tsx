import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const VueIcon: React.FC<IconProps> = (props) => {
  const { className, style } = props;
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
    >
      <path
        d="M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"
        fill="#41B883"
      ></path>
      <path d="M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z" fill="#34495E"></path>
    </svg>
  );
};

import React from "react";

const frRightIcon = (
  <svg
    width="17"
    height="12"
    fill="none"
    viewBox="0 0 17 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="fill-white group-hover:fill-red-600"
      d="M10.9084 0.758337C10.5834 1.08334 10.5834 1.60834 10.9084 1.93334L14.1417 5.16667H1.50008C1.04175 5.16667 0.666748 5.54167 0.666748 6C0.666748 6.45834 1.04175 6.83334 1.50008 6.83334H14.1501L10.9167 10.0667C10.5917 10.3917 10.5917 10.9167 10.9167 11.2417C11.2417 11.5667 11.7667 11.5667 12.0917 11.2417L16.7501 6.58334C17.0751 6.25834 17.0751 5.73334 16.7501 5.40834L12.0834 0.758337C11.7667 0.433337 11.2334 0.433337 10.9084 0.758337Z"
      fill="white"
    />
  </svg>
);
const frSouthIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_8_127)">
      <path className=" fill-white group-hover:fill-red-600"
        d="M18 9C17.44 9 17 9.45 17 10V15.59L6.11998 4.7C5.72998 4.31 5.09998 4.31 4.70998 4.7C4.31998 5.09 4.31998 5.72 4.70998 6.11L15.59 17H9.99998C9.44998 17 8.99998 17.45 8.99998 18C8.99998 18.55 9.44998 19 9.99998 19H18C18.55 19 19 18.55 19 18V10C19 9.45 18.55 9 18 9Z"
        fill="#121720"
      />
    </g>
    <defs>
      <clipPath id="clip0_8_127">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const frUpIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_8_82)">
      <path className=" fill-white group-hover:fill-red-600"
        d="M5.70998 9.7C6.09998 10.09 6.72998 10.09 7.11998 9.7L11 5.83V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V5.83L16.88 9.71C17.27 10.1 17.9 10.1 18.29 9.71C18.68 9.32 18.68 8.69 18.29 8.3L12.7 2.7C12.31 2.31 11.68 2.31 11.29 2.7L5.70998 8.29C5.31998 8.68 5.31998 9.32 5.70998 9.7Z"
        fill="#121720"
      />
    </g>
    <defs>
      <clipPath id="clip0_8_82">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const BaseButton = ({ name, withIcon, iconType }) => {
  return (
    <div>
      <button className="flex text-center items-center group px-6 py-2 rounded-full border-2 bg-purple-800 hover:bg-white hover:border-purple-800">
        <span className="text-white group-hover:text-purple-800 text-base font-medium">
          {name}
        </span>
        {withIcon && iconType && (
          <div className="flex items-center ml-2">
            {iconType === "right" && frRightIcon}
            {iconType === "south_east" && frSouthIcon}
            {iconType === "norht" && frUpIcon}
          </div>
        )}
      </button>
    </div>
  );
};

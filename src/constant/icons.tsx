import React from "react";
import colors from "./colors";

export const Facebook = ({ height = "20px", width = "20px", color = "#000000" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      height={height}
      width={width}
      fill={color}
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
};

export const Linkedin = ({ height = "20px", width = "20px", color = "#000000" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height={height}
      width={width}
      fill={color}
    >
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
};

export const Twitter = ({ height = "20px", width = "20px", color = "#000000" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      fill={color}
    >
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    </svg>
  );
};

export const Tiktok = ({ height = "18px", width = "18px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={height} width={width}>
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
    </svg>
  );
};

export const Pinterest = ({ height = "20", width = "20" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" height={height} width={width}>
      <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
    </svg>
  );
};

export const Youtube = ({ height = "22px", width = "22px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" height={height} width={width}>
      <path d="M 6.3125 0.03125 L 8.09375 5.875 L 8.09375 9.6875 L 9.59375 9.6875 L 9.59375 5.6875 L 11.3125 0.03125 L 9.8125 0.03125 L 8.875 3.875 L 8.78125 3.875 L 7.8125 0.03125 Z M 13.21875 2.375 C 12.617188 2.375 12.136719 2.546875 11.78125 2.875 C 11.425781 3.199219 11.25 3.636719 11.25 4.1875 L 11.25 7.875 C 11.25 8.480469 11.433594 8.988281 11.78125 9.34375 C 12.132813 9.703125 12.574219 9.875 13.15625 9.875 C 13.757813 9.875 14.25 9.691406 14.59375 9.34375 C 14.9375 8.996094 15.09375 8.515625 15.09375 7.90625 L 15.09375 4.21875 C 15.09375 3.675781 14.914063 3.25 14.5625 2.90625 C 14.214844 2.558594 13.769531 2.375 13.21875 2.375 Z M 16.21875 2.5625 L 16.21875 8.53125 C 16.21875 8.957031 16.3125 9.257813 16.46875 9.46875 C 16.625 9.679688 16.851563 9.78125 17.15625 9.78125 C 17.402344 9.78125 17.644531 9.710938 17.90625 9.5625 C 18.171875 9.410156 18.445313 9.195313 18.6875 8.90625 L 18.6875 9.6875 L 20 9.6875 L 20 2.5625 L 18.6875 2.5625 L 18.6875 7.96875 C 18.5625 8.121094 18.429688 8.246094 18.28125 8.34375 C 18.132813 8.445313 18.003906 8.5 17.90625 8.5 C 17.785156 8.5 17.679688 8.480469 17.625 8.40625 C 17.566406 8.332031 17.5625 8.195313 17.5625 8.03125 L 17.5625 2.5625 Z M 13.15625 3.625 C 13.332031 3.625 13.488281 3.65625 13.59375 3.75 C 13.703125 3.847656 13.75 3.972656 13.75 4.125 L 13.75 8.03125 C 13.75 8.222656 13.699219 8.363281 13.59375 8.46875 C 13.488281 8.578125 13.335938 8.625 13.15625 8.625 C 12.980469 8.625 12.84375 8.574219 12.75 8.46875 C 12.652344 8.363281 12.625 8.226563 12.625 8.03125 L 12.625 4.125 C 12.625 3.972656 12.679688 3.847656 12.78125 3.75 C 12.882813 3.65625 12.996094 3.625 13.15625 3.625 Z M 13 11.15625 C 10.40625 11.152344 7.863281 11.175781 5.375 11.28125 C 3.636719 11.28125 2.21875 12.683594 2.21875 14.40625 C 2.113281 15.769531 2.058594 17.136719 2.0625 18.5 C 2.058594 19.863281 2.113281 21.230469 2.21875 22.59375 C 2.21875 24.316406 3.636719 25.71875 5.375 25.71875 C 7.863281 25.820313 10.40625 25.847656 13 25.84375 C 15.597656 25.851563 18.140625 25.820313 20.625 25.71875 C 22.363281 25.71875 23.78125 24.316406 23.78125 22.59375 C 23.886719 21.230469 23.941406 19.863281 23.9375 18.5 C 23.945313 17.136719 23.886719 15.769531 23.78125 14.40625 C 23.78125 12.683594 22.363281 11.28125 20.625 11.28125 C 18.140625 11.175781 15.597656 11.152344 13 11.15625 Z M 3.75 13.375 L 8.34375 13.375 C 8.425781 13.375 8.5 13.449219 8.5 13.53125 L 8.5 14.9375 C 8.5 15.019531 8.425781 15.09375 8.34375 15.09375 L 6.9375 15.09375 L 6.9375 23.1875 C 6.9375 23.269531 6.894531 23.34375 6.8125 23.34375 L 5.3125 23.34375 C 5.230469 23.34375 5.15625 23.269531 5.15625 23.1875 L 5.15625 15.09375 L 3.75 15.09375 C 3.667969 15.09375 3.625 15.019531 3.625 14.9375 L 3.625 13.53125 C 3.625 13.449219 3.667969 13.375 3.75 13.375 Z M 13.40625 13.375 L 14.75 13.375 C 14.832031 13.375 14.90625 13.449219 14.90625 13.53125 L 14.90625 16.25 C 15.015625 16.148438 15.132813 16.066406 15.25 16 C 15.476563 15.875 15.707031 15.8125 15.9375 15.8125 C 16.40625 15.8125 16.75 16 17 16.34375 C 17.238281 16.675781 17.375 17.140625 17.375 17.75 L 17.375 21.71875 C 17.375 22.257813 17.261719 22.675781 17.03125 22.96875 C 16.792969 23.273438 16.4375 23.4375 16 23.4375 C 15.722656 23.4375 15.476563 23.363281 15.25 23.25 C 15.128906 23.1875 15.015625 23.128906 14.90625 23.03125 L 14.90625 23.1875 C 14.90625 23.269531 14.832031 23.34375 14.75 23.34375 L 13.40625 23.34375 C 13.324219 23.34375 13.25 23.269531 13.25 23.1875 L 13.25 13.53125 C 13.25 13.449219 13.324219 13.375 13.40625 13.375 Z M 20.21875 15.71875 C 20.867188 15.71875 21.398438 15.921875 21.75 16.3125 C 22.101563 16.703125 22.28125 17.257813 22.28125 17.96875 L 22.28125 19.8125 C 22.28125 19.894531 22.207031 19.9375 22.125 19.9375 L 19.75 19.9375 L 19.75 21.15625 C 19.75 21.59375 19.796875 21.765625 19.84375 21.84375 C 19.882813 21.90625 19.949219 22 20.15625 22 C 20.324219 22 20.441406 21.953125 20.5 21.875 C 20.527344 21.832031 20.59375 21.675781 20.59375 21.15625 L 20.59375 20.65625 C 20.59375 20.574219 20.667969 20.5 20.75 20.5 L 22.125 20.5 C 22.207031 20.5 22.28125 20.574219 22.28125 20.65625 L 22.28125 21.1875 C 22.28125 21.957031 22.074219 22.542969 21.71875 22.9375 C 21.363281 23.335938 20.828125 23.53125 20.125 23.53125 C 19.488281 23.53125 18.992188 23.332031 18.625 22.90625 C 18.261719 22.488281 18.0625 21.910156 18.0625 21.1875 L 18.0625 17.96875 C 18.0625 17.3125 18.253906 16.792969 18.65625 16.375 C 19.058594 15.957031 19.585938 15.71875 20.21875 15.71875 Z M 8.34375 15.90625 L 9.65625 15.90625 C 9.738281 15.90625 9.8125 15.980469 9.8125 16.0625 L 9.8125 21.53125 C 9.8125 21.710938 9.824219 21.785156 9.84375 21.8125 C 9.851563 21.824219 9.886719 21.875 10 21.875 C 10.039063 21.875 10.125 21.859375 10.28125 21.75 C 10.410156 21.664063 10.523438 21.558594 10.625 21.4375 L 10.625 16.0625 C 10.625 15.980469 10.699219 15.90625 10.78125 15.90625 L 12.125 15.90625 C 12.207031 15.90625 12.25 15.980469 12.25 16.0625 L 12.25 23.1875 C 12.25 23.269531 12.207031 23.34375 12.125 23.34375 L 10.78125 23.34375 C 10.699219 23.34375 10.625 23.269531 10.625 23.1875 L 10.625 22.78125 C 10.449219 22.953125 10.277344 23.082031 10.09375 23.1875 C 9.804688 23.351563 9.53125 23.4375 9.25 23.4375 C 8.894531 23.4375 8.621094 23.316406 8.4375 23.0625 C 8.261719 22.824219 8.1875 22.484375 8.1875 22.03125 L 8.1875 16.0625 C 8.1875 15.980469 8.261719 15.90625 8.34375 15.90625 Z M 15.25 17.25 C 15.199219 17.257813 15.148438 17.285156 15.09375 17.3125 C 15.03125 17.34375 14.96875 17.402344 14.90625 17.46875 L 14.90625 21.78125 C 14.984375 21.863281 15.050781 21.933594 15.125 21.96875 C 15.207031 22.007813 15.285156 22.03125 15.375 22.03125 C 15.542969 22.03125 15.609375 21.960938 15.625 21.9375 C 15.664063 21.886719 15.6875 21.769531 15.6875 21.53125 L 15.6875 17.84375 C 15.6875 17.640625 15.667969 17.472656 15.59375 17.375 C 15.519531 17.277344 15.402344 17.222656 15.25 17.25 Z M 20.1875 17.28125 C 20.027344 17.28125 19.910156 17.316406 19.84375 17.40625 C 19.796875 17.472656 19.75 17.636719 19.75 17.96875 L 19.75 18.53125 L 20.59375 18.53125 L 20.59375 17.96875 C 20.59375 17.640625 20.550781 17.480469 20.5 17.40625 C 20.4375 17.320313 20.339844 17.28125 20.1875 17.28125 Z" />
    </svg>
  );
};

export const Whatsapp = ({
  height = "18px",
  width = "18px",
  color = "rgb(37, 174, 136)",
}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={height} width={width}>
      <path
        fill={color}
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      />
    </svg>
  );
};

export const FB = ({ height = "16px", width = "16px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={height} width={width}>
      <path
        fill={colors.active}
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  );
};

export const DoubleArrow = ({ height = "20px", width = "20px" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height={height}
      width={width}
      fill="rgb(255, 255, 255)"
    >
      <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
    </svg>
  );
};

export const Person = ({ height = "20px", width = "20px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960">
      <path
        fill={colors.active}
        d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"
      />
    </svg>
  );
};

export const Payments = ({ height = "20px", width = "20px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960">
      <path
        fill={colors.active}
        d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"
      />
    </svg>
  );
};
export const Calendar = ({ height = "20px", width = "20px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960">
      <path
        fill={colors.active}
        d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"
      />
    </svg>
  );
};
export const EventBusy = ({ height = "20px", width = "20px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960">
      <path
        fill={colors.active}
        d="m388-212-56-56 92-92-92-92 56-56 92 92 92-92 56 56-92 92 92 92-56 56-92-92-92 92ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"
      />
    </svg>
  );
};
export const KingBed = ({ height = "20px", width = "20px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960">
      <path
        fill={colors.active}
        d="M200-200h-40l-26-80H80v-201q0-33 23.5-56t56.5-23v-120q0-33 23.5-56.5T240-760h480q33 0 56.5 23.5T800-680v120q33 0 56.5 23.5T880-480v200h-54l-26 80h-40l-26-80H226l-26 80Zm320-360h200v-120H520v120Zm-280 0h200v-120H240v120Z"
      />
    </svg>
  );
};
export const Location = ({ height = "20px", width = "20px" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={colors.active}
      version="1.1"
      id="Capa_1"
      width={width}
      height={height}
      viewBox="0 0 425.963 425.963"
    >
      <g>
        <path d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081   c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002   c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482   C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884   c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z" />
      </g>
    </svg>
  );
};

export const Menu = ({ height = "20px", width = "20px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={height} width={width}>
      <path
        fill="#054184"
        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
      />
    </svg>
  );
};

export const Certificate = ({ height = "20px", width = "20px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 512 512">
      <path
        fill={colors.active}
        d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"
      />
    </svg>
  );
};

export const Document = ({ height = "18px", width = "18px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 384 512">
      <path
        fill={colors.active}
        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
      />
    </svg>
  );
};

export const CopyRight = ({ height = "18px", width = "18px", color = "#ffffff" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill={color}
      viewBox="0 0 512 512"
    >
      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
    </svg>
  );
};

export const UserIcon = ({ height = "18px", width = "18px", color = "#777" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      height={height}
      width={width}
      fill={color}
    >
      <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
    </svg>
  );
};

export const FilterIcon = ({
  height = "18px",
  width = "18px",
  color = colors.white,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      fill={color}
    >
      <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
    </svg>
  );
};

export const CircleIcon = ({ height = "15px", width = "15px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 512 512">
      <path fill={colors.active} d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

export const AngleLeft = ({
  height = "14px",
  width = "14px",
  color = colors.primary,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill={color}
      viewBox="0 0 512 512"
    >
      <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
    </svg>
  );
};

export const AngleRight = ({
  height = "14px",
  width = "14px",
  color = colors.primary,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill={color}
      viewBox="0 0 512 512"
    >
      <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
    </svg>
  );
};

export const AngleDown = ({ height = "12px", width = "12px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 448 512">
      <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </svg>
  );
};

export const ClockIcon = ({ height = "12px", width = "12px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 512 512">
      <path
        opacity="1"
        fill={colors.active}
        d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
      />
    </svg>
  );
};

export const DriverIcon = ({ width = "12px", height = "12px" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="20 2 60 95"
      width={width}
      height={height}
      fill={colors.active}
    >
      <g>
        <g>
          <path d="M75.993,21.109c0,8.267-11.638,6.206-25.993,6.206c-14.355,0-25.993,2.061-25.993-6.206S35.645,2.072,50,2.072    C64.355,2.072,75.993,12.843,75.993,21.109z" />
          <g>
            <path d="M23.167,96.566c0-14.818,12.015-26.833,26.833-26.833c14.818,0,26.833,12.015,26.833,26.833     c0,0.457-0.02,0.91-0.043,1.362h15.726c-0.104-17.161-9.532-32.009-23.262-39.302c-5.115,4.583-11.863,7.376-19.26,7.376     c-7.391,0-14.139-2.793-19.248-7.376C17.018,65.922,7.59,80.767,7.484,97.928H23.21C23.187,97.476,23.167,97.023,23.167,96.566z" />
            <path d="M42.508,95.625l-12.592-6.68c-0.9,2.372-1.416,4.933-1.416,7.62c0,0.46,0.032,0.911,0.065,1.362h13.564     C42.15,97.127,42.274,96.352,42.508,95.625z" />
            <path d="M71.5,96.566c0-2.688-0.516-5.248-1.416-7.62l-11.986,6.358c0.302,0.822,0.478,1.704,0.504,2.624h12.834     C71.468,97.477,71.5,97.025,71.5,96.566z" />
            <path d="M50.361,89.898c1.507,0,2.914,0.41,4.129,1.115l13.013-6.902C63.604,78.643,57.225,75.066,50,75.066     c-7.226,0-13.604,3.577-17.503,9.045l13.398,7.107C47.183,90.386,48.714,89.898,50.361,89.898z" />
          </g>
        </g>
        <path d="M50,60.752c12.979,0,23.5-10.521,23.5-23.5c0-2.927-0.539-5.728-1.518-8.312c-2.983,0.869-6.426,0.871-8.886,0.871   c-1.849,0-3.818-0.052-5.903-0.105c-2.313-0.061-4.706-0.123-7.193-0.123c-2.487,0-4.88,0.062-7.194,0.123   c-2.085,0.054-4.054,0.105-5.902,0.105c-2.94,0-6.214-0.119-8.884-0.876c-0.979,2.586-1.52,5.388-1.52,8.316   C26.5,50.23,37.021,60.752,50,60.752z" />
      </g>
    </svg>
  );
};

export const HomeUserIcon = ({ width = "12px", height = "12px" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 576 512">
      <path
        opacity="1"
        fill={colors.active}
        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"
      />
    </svg>
  );
};

export const NewsPeparIcon = ({
  width = "12px",
  height = "12px",
  color = colors.black,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill={color}
      viewBox="0 0 512 512"
    >
      <path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </svg>
  );
};
export const TipsIcon = ({ width = "12px", height = "12px", color = colors.black }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      fill={color}
      viewBox="0 0 384 512"
    >
      <path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z" />
    </svg>
  );
};

interface IconProps {
  height?: number | string;
  width?: number | string;
  color?: string;
}

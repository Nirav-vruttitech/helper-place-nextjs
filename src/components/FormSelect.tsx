"use client";
import React, { useState } from "react";
import Select, { components } from "react-select";

const FormSelect = () => {
  const InputOption = ({
    getStyles,
    Icon,
    isDisabled,
    isFocused,
    isSelected,
    children,
    innerProps,
    ...rest
  }: any) => {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    // styles
    let bg = "transparent";
    if (isFocused) bg = "#eee";
    if (isActive) bg = "#B2D4FF";

    const style = {
      alignItems: "center",
      backgroundColor: bg,
      color: "inherit",
      display: "flex",
      rowGap: "3",
      fontSize: "0.85rem",
    };

    // prop assignment
    const props = {
      ...innerProps,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      style,
    };

    return (
      <components.Option
        {...rest}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isSelected={isSelected}
        getStyles={getStyles}
        innerProps={props}
      >
        <input className="mr-2" type="checkbox" checked={isSelected} />
        {children}
      </components.Option>
    );
  };
  return <div></div>;
};

export default FormSelect;

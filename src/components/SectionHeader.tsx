import colors from "@/constant/colors";
import React from "react";

function SectionHeader(props: { title: string }) {
  const { title } = props;
  return (
    <div
      style={{
        width: "100%",
        marginTop: "10px",
        marginBottom: "10px",
        padding: "10px",
        paddingLeft: "12px",
        paddingRight: "20px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
        backgroundColor: colors.sectionBg,
        color: colors.jobBadge,
        fontWeight: "bold",
        fontSize: "15px",
        borderBottom: `2px solid ${colors.jobBadge}`,
      }}
      aria-label="section-header"
    >
      <h2
        style={{
          fontSize: 15,
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;

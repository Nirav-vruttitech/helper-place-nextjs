"use client";
import colors from "@/constant/colors";
import React from "react";

interface Props {
  type: "resume" | "job";
  title: string;
  very_active: number;
  familyDescription: string;
  image: string;
  age?: number;
  post_manager?: string;
  publish_date?: string;
  locationId?: number;
  backgroundImage?: string;
}

function Profile(props: Props) {
  const {
    type,
    post_manager,
    very_active,
    title,
    familyDescription,
    publish_date,
    image,
    locationId,
    age,
  } = props;

  const imgUrl = type === "job" ? image?.replace(".jpg", "-sm.webp") : image;

  // const langData = getLanguageData(language);

  const isLangArabic = false;

  const pointerStyle: React.CSSProperties = {
    height: "25px",
    position: "relative",
    borderBottom: "3px solid #ebba16",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    direction: isLangArabic ? "rtl" : "ltr",
  };

  const PointerAfter = () => (
    <div
      style={{
        content: '""',
        position: "absolute",
        // Adjust positioning based on language direction
        left: isLangArabic ? 0 : "auto",
        right: isLangArabic ? "auto" : 0,
        bottom: 0,
        width: 0,
        height: 0,
        // Adjust borders for the pointer direction
        borderLeft: isLangArabic ? "15px solid white" : "none",
        borderRight: isLangArabic ? "none" : "15px solid white",
        borderTop: "15px solid transparent",
        borderBottom: "11.5px solid transparent",
      }}
    />
  );
  let bgImage = `https://www.helperplace.com/assets/images/misc/${
    locationId ? locationId : "resume"
  }-sm.webp`;
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        marginTop: "20px",
        borderRadius: "6px",
        flexDirection: "column",
        position: "relative",
        direction: isLangArabic ? "rtl" : "ltr",
      }}
      aria-label="profile-section"
    >
      {/* Top Half */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
        aria-label="job-profile-top-half"
      >
        <div
          style={{
            height: "100px",
            width: "100%",
            backgroundImage: `url(https://www.helperplace.com/assets/images/misc/${
              locationId ? locationId : "resume"
            }-sm.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "6px 6px 0px 0px",
            opacity: 0.6,
          }}
          aria-label="profile-background-image"
        />

        <div style={{ width: "100%", display: "flex", columnGap: 2 }}>
          <div
            id="pointer"
            style={{
              ...pointerStyle,
              background: post_manager === "Direct" ? colors.primary : colors.active,
              minWidth: "90px",
              // alignSelf: "center",
              marginTop: "47px",
            }}
          >
            <PointerAfter />
            <span style={{ fontSize: "14px" }}>
              {/* {post_manager === "Direct" ? langData.filter.direct : langData.filter.agency} */}
            </span>
          </div>

          <div style={{ padding: "10px", lineHeight: "1.4" }}>
            <h1
              style={{
                letterSpacing: "1px",
                fontSize: "18px",
                margin: 0,
                color: colors.primary,
              }}
              aria-label="job-title"
            >
              {title}{" "}
              {age && (
                <span style={{ fontSize: "12px", fontWeight: "600" }}>
                  {/* ({age} {langData.resume_view.years}) */}
                </span>
              )}
            </h1>

            <p
              style={{
                fontSize: "14px",
                margin: 0,
                marginTop: "5px",
              }}
              aria-label="job-description"
            >
              {familyDescription}
            </p>
            {publish_date && (
              <div
                style={{
                  fontSize: "14px",
                  margin: 0,
                  marginTop: "5px",
                  display: "flex",
                  gap: 5,
                }}
                aria-label="job-post-date"
              >
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  {/* {langData.job_view.posted}: */}
                </p>
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  {publish_date}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Very Active */}
        {very_active ? (
          <div
            style={{
              zIndex: 100,
              position: "absolute",
              right: isLangArabic ? "auto" : 0,
              left: isLangArabic ? 0 : "auto",
              top: 0,
              background: colors.active,
              borderRadius: isLangArabic ? "6px 0px 6px 0px" : "0px 6px 0px 6px",
              padding: 7,
              color: colors.white,
              fontSize: 13,
            }}
            aria-label="profile-activity-badge"
          >
            {/* {langData.shared.very_active} */}
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* family image */}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "55px",
          flexDirection: "column",
          gap: 10,
        }}
        aria-label="job-profile-center"
      >
        <div
          style={{
            height: "80px",
            width: "80px",
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "100%",
            zIndex: 100,
            border: `0.5px solid ${colors.avatarBorder}`,
            marginLeft: "5px",
            marginRight: isLangArabic ? "5px" : "none",
          }}
          aria-label="profile-avatar-image"
        />
      </div>
    </div>
  );
}

export default Profile;

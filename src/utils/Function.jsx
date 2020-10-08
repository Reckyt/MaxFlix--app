import { useEffect } from "react";
import noAvatar from "../assets/pictures/no-avatar.png";
import placeholder from "../assets/pictures/Placeholder.png";

export const noImage = (urlImage) => {
  if (urlImage && urlImage.endsWith("jpg")) {
    return urlImage;
  } else {
    return noAvatar;
  }
};

export const noPoster = (urlImage) => {
  if ((urlImage && urlImage === null) || urlImage === "") {
    return placeholder;
  } else {
    return urlImage;
  }
};

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

function pad(n) {
  return n < 10 ? "0" + n : n;
}

export const convertDateToInput = (date) => {
  if (date) {
    var convertDate = new Date(date);
    var day = convertDate.getDate();
    var month = convertDate.getMonth();
    var year = convertDate.getFullYear();
    var mmddyyyy = year + "-" + pad(month + 1) + "-" + pad(day);
    return mmddyyyy;
  } else {
    return "";
  }
};

export const convertDateToPrint = (date) => {
  if (date) {
    var convertDate = new Date(date);
    var day = convertDate.getDate();
    var month = convertDate.getMonth();
    var year = convertDate.getFullYear();
    var mmddyyyy = pad(day) + "/" + pad(month + 1) + "/" + year;
    return mmddyyyy;
  } else {
    return "";
  }
};

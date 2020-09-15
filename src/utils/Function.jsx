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

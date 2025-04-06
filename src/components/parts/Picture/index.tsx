import { PictureType } from "./index.types";
import { PicturePresentator } from "./presentator";

export const Picture = (props: PictureType) => {
  return (
    <PicturePresentator {...props} />
  )
}
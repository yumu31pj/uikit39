
import { TitleWithSubtextType } from "./index.types";
import { TitleWithSubtitlePresentator } from "./presentator";


// Practical container layer
export const TitleWithSubtitle = (props : TitleWithSubtextType) => {
  return (
    <TitleWithSubtitlePresentator{...props} />
  )
}
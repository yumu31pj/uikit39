import { ArticleLinkWithLabelType } from "./index.types";
import { ArticleLinkWithLabelPresentator } from "./presentator";

export const ArticleLinkWithLabel = (props: ArticleLinkWithLabelType) => {
  return (
    <ArticleLinkWithLabelPresentator {...props} />
  )
} 
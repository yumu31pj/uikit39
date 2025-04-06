import { MarkPrefixTitleType } from "./index.types";
import { MarkPrefixTitlePresentator } from "./presentator";

export const MarkPrefixTitle = (props: MarkPrefixTitleType) => {
  return (
    <MarkPrefixTitlePresentator {...props} />
  )
}
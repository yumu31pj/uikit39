import { MarkPrefixTitleType } from "./index.types";
import styles from "./style.module.scss";

export const MarkPrefixTitlePresentator = ({ title, tagType, markType } : MarkPrefixTitleType) => {
  const Tag = tagType
  const baseClass = "c-marked-title"
  const modifierClass = baseClass + "--" + markType

  return (
    <Tag className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      {title}
    </Tag>
  )
}
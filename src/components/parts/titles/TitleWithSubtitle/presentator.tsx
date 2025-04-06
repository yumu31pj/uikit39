import { TitleWithSubtextType } from "./index.types";
import styles from "./style.module.scss";

export const TitleWithSubtitlePresentator = ({ title, subtitle, hasUnderline }: TitleWithSubtextType) => {
  return (
    <div className={`${styles["c-title-with-subtitle"]} ${hasUnderline ? styles["c-title-with-subtitle--underline"] : ""}`}>
      <span className={styles["c-title-with-subtitle__subtitle"]}>{subtitle}</span>
      <h2 className={styles["c-title-with-subtitle__title"]}>{title}</h2>
    </div>
  )
}
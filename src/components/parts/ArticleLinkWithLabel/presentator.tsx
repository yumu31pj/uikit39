import { ArticleLinkWithLabelType } from "./index.types";
import styles from "./style.module.scss";

export const ArticleLinkWithLabelPresentator = ({
  title, date, categoryItem, linkTo
} : ArticleLinkWithLabelType) => {
  return (
    <a href={linkTo} className={styles["c-article-link-with-label"]}>
      <div>
        <time dateTime={date}>{date}</time>
        {categoryItem.slug ? (
          <a href={categoryItem.slug}>{categoryItem.title}</a>
        ) : (
          <span>{categoryItem.title}{categoryItem.title}</span>
        )}
      </div>
      <p>{title}</p>
    </a>
  )
}
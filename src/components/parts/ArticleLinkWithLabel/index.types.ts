export type ArticleLinkWithLabelType = {
  title: string;
  date: string;
  categoryItem: {
    title: string;
    slug?: string;
  };
  linkTo: string;
}
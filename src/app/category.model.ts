export class Category {
  static categories: Category[] = [
    new Category('Toys'),
    new Category('Sean Connery Related Items'),
    new Category('Fidget Spinners'),
    new Category('Books by Kevin Ahn'),
    new Category('More Interesting Books by Thad'),
    new Category('Questionable Novels by Elly Maimon'),
  ];

  constructor(public title: string) {}

}

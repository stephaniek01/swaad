class Category {
  constructor(id, title, color, imageUrl) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.imageUrl = imageUrl ? imageUrl : "";
  }
}

export default Category;

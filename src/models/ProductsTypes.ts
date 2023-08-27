class Menu {
  id: number
  title: string
  description: string
  image: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
  }
}

export default Menu

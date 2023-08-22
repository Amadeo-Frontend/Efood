class Foods {
    id: number
    title: string
    category: string
    system: string
    description: string
    infos: string[]
    image: string
    star: string

    constructor(
      id: number,
      title: string,
      category: string,
      system: string,
      description: string,
      infos: string[],
      image: string,
      star: string
    ) {
      this.id = id
      this.title = title
      this.category = category
      this.system = system
      this.description = description
      this.infos = infos
      this.image = image
      this.star = star
    }
  }

  export default Foods

export interface Props {
  title: string
}

export interface Book {
  title: string
  author: string
  thumbnail: string
  description: string
  price: number
  rating: number
  stock: number
  category: string
}

export type bookList = Book[]


export type TitleProp = Pick<Props, 'title'>


interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
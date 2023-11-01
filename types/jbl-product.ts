interface ProductVariant {
  name: string,
  asset: string
  color_image: string,
}

interface JBLProduct {
  id: number,
  name: string,
  price: number,
  selected: boolean,
  variants: ProductVariant[]
}

export type { JBLProduct, ProductVariant }

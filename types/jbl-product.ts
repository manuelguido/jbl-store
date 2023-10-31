interface ProductVariant {
  name: string,
  asset: string
  color_image: string,
}

interface JBLProduct {
  id: number,
  name: string,
  price: number,
  selected: false,
  variants: ProductVariant[]
}

export type { JBLProduct, ProductVariant }

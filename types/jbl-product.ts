interface ProductVariant {
  name: string,
  asset: string
  asset_ios: string
  color_image: string,
  selected: boolean,
}

interface JBLProduct {
  id: number,
  name: string,
  price: number,
  thumbnail: string
  selected: boolean,
  variants: ProductVariant[]
}

export type { JBLProduct, ProductVariant }

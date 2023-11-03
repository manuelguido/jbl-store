import { defineStore } from 'pinia'
import type { JBLProduct, ProductVariant } from '~/types/jbl-product';

export const useProductsStore = defineStore('products', {
  state: () => (
    {
      products: [
        {
          id: 1,
          name: "Flip 6",
          price: 129.95,
          thumbnail: "flip-6.png",
          selected: true,
          variants: [
            {
              name: "Black",
              asset: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-black.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-black.usdz",
              color_image: "flip-6-black.png",
              selected: true,
            },
            {
              name: "Blue",
              asset: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-blue.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-blue.usdz",
              color_image: "flip-6-blue.png",
              selected: false,
            },
            {
              name: "Teal",
              asset: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-teal.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-teal.usdz",
              color_image: "flip-6-teal.png",
              selected: false,
            },
            {
              name: "Red",
              asset: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-red.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-red.usdz",
              color_image: "flip-6-red.png",
              selected: false,
            },
            {
              name: "Grey",
              asset: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-grey.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-grey.usdz",
              color_image: "flip-6-grey.png",
              selected: false,
            },
            {
              name: "Camo",
              asset: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-camo.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/flip-6/flip-6-camo.usdz",
              color_image: "flip-6-camo.png",
              selected: false,
            },
          ],
        },
        {
          id: 2,
          name: "Clip 4",
          price: 79.95,
          thumbnail: "clip-4.png",
          selected: false,
          variants: [
            {
              name: "Black",
              asset: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-black.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-black.usdz",
              color_image: "clip-4-black.png",
              selected: true,
            },
            {
              name: "Blue",
              asset: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-blue.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-blue.usdz",
              color_image: "clip-4-blue.png",
              selected: false,
            },
            {
              name: "Pink",
              asset: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-pink.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-pink.usdz",
              color_image: "clip-4-pink.png",
              selected: false,
            },
            {
              name: "Grey Pink",
              asset: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-grey-pink.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-grey-pink.usdz",
              color_image: "clip-4-grey-pink.png",
              selected: false,
            },
            {
              name: "Red",
              asset: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-red.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-red.usdz",
              color_image: "clip-4-red.png",
              selected: false,
            },
            {
              name: "Camo",
              asset: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-camo.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/clip-4/clip-4-camo.usdz",
              color_image: "clip-4-camo.png",
              selected: false,
            },
          ],
        },
        {
          id: 3,
          name: "Go 3",
          price: 49.95,
          thumbnail: "go-3.png",
          selected: false,
          variants: [
            {
              name: "Black",
              asset: "https://jblstore.manuelguido.dev/_models/go-3/go-3-black.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/go-3/go-3-black.usdz",
              color_image: "go-3-black.png",
              selected: true,
            },
            {
              name: "Blue",
              asset: "https://jblstore.manuelguido.dev/_models/go-3/go-3-blue.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/go-3/go-3-blue.usdz",
              color_image: "go-3-blue.png",
              selected: false,
            },
            {
              name: "Teal",
              asset: "https://jblstore.manuelguido.dev/_models/go-3/go-3-teal.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/go-3/go-3-teal.usdz",
              color_image: "go-3-teal.png",
              selected: false,
            },
            {
              name: "Dark Grey",
              asset: "https://jblstore.manuelguido.dev/_models/go-3/go-3-dark-grey.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/go-3/go-3-dark-grey.usdz",
              color_image: "go-3-dark-grey.png",
              selected: false,
            },
            {
              name: "Red",
              asset: "https://jblstore.manuelguido.dev/_models/go-3/go-3-red.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/go-3/go-3-red.usdz",
              color_image: "go-3-red.png",
              selected: false,
            },
            {
              name: "Pink",
              asset: "https://jblstore.manuelguido.dev/_models/go-3/go-3-pink.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/go-3/go-3-pink.usdz",
              color_image: "go-3-pink.png",
              selected: false,
            },
            {
              name: "Green",
              asset: "https://jblstore.manuelguido.dev/_models/go-3/go-3-green.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/go-3/go-3-green.usdz",
              color_image: "go-3-green.png",
              selected: false,
            },
            {
              name: "Camo",
              asset: "https://jblstore.manuelguido.dev/_models/go-3/go-3-camo.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/go-3/go-3-camo.usdz",
              color_image: "go-3-camo.png",
              selected: false,
            },
          ],
        },
        {
          id: 4,
          name: "Xtreme 3",
          price: 279.95,
          thumbnail: "xtreme-3.png",
          selected: false,
          variants: [
            {
              name: "Black",
              asset: "https://jblstore.manuelguido.dev/_models/xtreme-3/xtreme-3-black.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/xtreme-3/xtreme-3-black.usdz",
              color_image: "jbl_xtreme_3/xtreme-3-black.png",
              selected: true,
            },
            {
              name: "Blue",
              asset: "https://jblstore.manuelguido.dev/_models/xtreme-3/xtreme-3-blue.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/xtreme-3/xtreme-3-blue.usdz",
              color_image: "jbl_xtreme_3/xtreme-3-blue.png",
              selected: false,
            },
            {
              name: "Camo",
              asset: "https://jblstore.manuelguido.dev/_models/xtreme-3/xtreme-3-camo.glb",
              asset_ios: "https://jblstore.manuelguido.dev/_models/xtreme-3/xtreme-3-camo.usdz",
              color_image: "jbl_xtreme_3/xtreme-3-camo.png",
              selected: false,
            },
          ],
        },
      ] as JBLProduct[],
    }
  ),

  getters: {
    // Get all products
    getProducts: (state) => state.products,

    // Get current selected product
    selectedProduct: (state) => state.products.filter(element => { return element.selected })[0],

    // Get current selected variant of the selected product 
    selectedProductVariant: (state) => (state.products.filter(element => {
      return element.selected
    })[0]).variants.filter(element => { return element.selected })[0],
  },

  actions: {
    setSelectedProduct(selected: JBLProduct) {
      this.getProducts.forEach(product => {
        product.selected = selected.name === product.name
      });
    },

    setSelectedVariant(selected: ProductVariant) {
      this.selectedProduct.variants.forEach(variant => {
        variant.selected = selected.name === variant.name
      });
    },
  },
});

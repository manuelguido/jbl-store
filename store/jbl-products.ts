import { defineStore } from 'pinia'
import { JBLProduct } from '~/types/jbl-product'

export const useProductsStore = defineStore('products', {
  state: () => (
    {
      products: [
        {
          id: 1,
          name: "Flip 6",
          price: 129.95,
          selected: true,
          variants: [
            {
              name: "Teal",
              asset: "flip-6-teal.glb",
              color_image: "flip-6-teal.png",
            },
            {
              name: "Red",
              asset: "flip-6-red.glb",
              color_image: "flip-6-red.png",
            },
            {
              name: "Camo",
              asset: "flip-6-camo.glb",
              color_image: "flip-6-camo.png",
            },
          ],
        },
        {
          id: 2,
          name: "Clip 4",
          price: 79.95,
          selected: false,
          variants: [
            {
              name: "Blue",
              asset: "clip-4-blue.glb",
              color_image: "clip-4-blue.png",
            },
            {
              name: "Grey Pink",
              asset: "clip-4-grey-pink.glb",
              color_image: "clip-4-grey-pink.png",
            },
            {
              name: "Camo",
              asset: "clip-4-camo.glb",
              color_image: "clip-4-camo.png",
            },
          ],
        },
        {
          id: 3,
          name: "Xtreme 3",
          price: 279.95,
          selected: false,
          variants: [
            {
              name: "Black",
              asset: "jbl_xtreme_3/xtreme-3-black.glb",
              color_image: "jbl_xtreme_3/xtreme-3-black.png",
            },
            {
              name: "Blue",
              asset: "jbl_xtreme_3/xtreme-3-blue.glb",
              color_image: "jbl_xtreme_3/xtreme-3-blue.png",
            },
            {
              name: "Camo",
              asset: "jbl_xtreme_3/xtreme-3-camo.glb",
              color_image: "jbl_xtreme_3/xtreme-3-camo.png",
            },
          ],
        },
      ] as JBLProduct[],
    }
  ),

  getters: {
    getProducts: (state) => state.products,
    selectedProduct: (state) => state.products.filter(element => { return element.selected })[0],
  },
});

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  //tambahan script untuk menggunakan komponen dari productdisplay
      <div id="app">
          <ProductDisplay />
          <div> 
            <h2>Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</h2> 
            <p>women's clothing</p> <p>Rating: 2.9/5</p> 
            <p>Composition: 100 % POLYURETHANE (shell), 100 % POLYESTER (lining), 
              75 % POLYESTER 25 % COTTON (sweater), faux leather material for style and comfort</p> 
            <p>Features: 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, 
              Button detail on waist, Detail stitching at sides</p> 
            <p>Care instructions: HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON</p> 
            <p>Price: $29.95</p> 
            <button>Buy now</button> 
          </div>

        </div>

        <div id="app">
      <div class="product-card">
        <h2>Women section</h2>
        <ProductCard :product="product" />
        <ProductCard :product="product" />
        <!-- Tambahkan lebih banyak ProductCard sesuai kebutuhan -->
      </div>
    </div>
</template>

<script>
//tambahan untuk import dari komponen productdisplay
import ProductDisplay from './components/ProductDisplay.vue'

export default {
  name: 'App',
  components: {
    ProductDisplay
  },
  data() {
    return {
      products: [],
      currentIndex: 0,
      category: 'women clothing',
    };
  },
  computed: {
    pageClass() {
      return {
        'page-women': this.category === 'women clothing',
        'page-men': this.category === 'men clothing',
        'page-unavailable': this.category !== 'women clothing' && this.category !== 'men clothing',
      };
    },
    filteredProducts() {
      return this.products.filter((product, index) => index === this.currentIndex);
    },
    next() {
      return this.currentIndex + 1 < this.products.length ? this.currentIndex + 1 : 0;
    },
    previous() {
      return this.currentIndex - 1 >= 0 ? this.currentIndex - 1 : this.products.length - 1;
    },
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        this.products = await response.json();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

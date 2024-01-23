<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{ product.price }}
            </li>
        </ul>
    </div>

     <div>
        <button v-if="currentIndex > 0" @click="showPrevious">Previous Product</button>
        <button v-if="currentIndex < products.length - 1 && products.length > 20" @click="showNext">Next Product</button>
        <button v-if="products.length === 0 || products.length > 20" @click="goToUnavailableProductsPage">Go to Unavailable Products Page</button>
        <div v-if="products.length > 0 && currentIndex >= 0 && currentIndex < 20">
          <h2>{{ products[currentIndex].title }}</h2>
          <p>{{ products[currentIndex].description }}</p>
          <img :src="products[currentIndex].image" :alt="products[currentIndex].title" />
        </div>
        <div v-else>
          <h2>No products available</h2>
        </div>
      </div>

</template>

<script>
import axios from 'axios';

export default {
    props: {
        category: String,
    },
    data() {
        return {
            products: [],
            currentIndex: 0,
        };
    },
    async created() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            this.products = response.data;
            if (this.category === 'men clothing') {
                this.products = this.products.filter(product => product.category === 'men clothing');
      }else if (this.category === 'women clothing') {
                this.products = this.products.filter(product => product.category === 'women clothing');
      }
            if (this.products.length > 20) {
                this.products = this.products.slice(0, 20);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
    methods: {
        showNext() {
            this.currentIndex++;
        },
        showPrevious() {
            this.currentIndex--;
        },
        goToUnavailableProductsPage() {
            this.$router.push('/unavailable-products');
        },
    },
};
</script>
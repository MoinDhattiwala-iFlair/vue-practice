app.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    template:
        /* html */
        `<div>
            <h1>{{ title }}</h1>
            <h2>Shipping : {{ shipping }}</h2>
			<p v-if="inventory > 3">In Stock</p>
			<p v-else-if="inventory <= 3 && inventory >= 1 ">Almost Sold</p>
			<p v-else>Out of Stock</p>
            <p v-show="onSale">On Sale</p>
			<img :src="image" height="200" />
            <a :href="link" target="_blank">Link</a>
            <product-details :details="details"></product-details>			
			<div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)">
				{{ variant.color }}
			</div>
			<ul>
				<li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
			</ul>
            <button @click="addToCart" :disabled="inventory < 1">Add to Cart</button>
            <button @click="removeFromCart" :disabled="inventory < 1">Remove From Cart</button>
            <br>
            <review-list :reviews=reviews v-if="reviews.length"></review-list>
            <br>
            <contact-from @add-review="addReview"></contact-from>
        </div>`,
    data() {
        return {
            brand: 'Puma',
            product: 'Socks',
            description: 'This is a description.',
            link: 'https://v3.vuejs.org/',
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 1001, color: 'blue', image: './images/socks_blue.jpeg', qty: 5 },
                { id: 1002, color: 'green', image: './images/socks_green.jpeg', qty: 0 },
            ],
            selectedVariant: 0,
            sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
            reviews: [],
        };
    },
    methods: {
        addToCart() {
            this.variants[this.selectedVariant].qty--;
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        removeFromCart() {
            this.variants[this.selectedVariant].qty++;
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addReview(review) {
            console.log(review);
            this.reviews.push(review);
        }
    },
    computed: {
        title() {
            let title = this.brand + ' ' + this.product;
            title += this.onSale ? ' is on sale' : '';
            return title;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inventory() {
            return this.variants[this.selectedVariant].qty;
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            }
            return 5.96;
        },
    },
});

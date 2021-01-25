app.component('contact-from', {
    template:
        /* html */
        `<form @submit.prevent="reviewSubmited">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">
            <br>
            <label for="review">Review:</label>      
            <textarea id="review" v-model="review"></textarea>
            <br>
            <label for="rating">Rating:</label>
            <select id="rating" v-model="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
            </select>
            <br>
            <label for="recommend">Would you recommend this product?</label>
            <select id="recommend" v-model="recommend">
            <option>Yes</option>            
            <option>No</option>
            </select>
            <br>
            <input class="button" type="submit" value="Submit">
        </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null
        }
    },
    methods: {
        reviewSubmited() {
            if (this.name === "" || this.review === "" || this.rating === null || this.recommend === null) {
                alert("Please enter all the fields");
                return
            }
            let review = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            };
            this.$emit('add-review', review)
            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = null
        }
    },
})
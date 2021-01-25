app.component('review-list', {
    props: {
        reviews: {
            type: Object,
            required: true,
        },
    },
    template: /* html */
        `<div>
            <h3>Reviews</h3>
            <ul>
                <li v-for="(review,index) in reviews" :key="index">
                    {{ review.name }} has given {{ review.rating }} ratings.
                    <br>
                    "{{ review.review  }}"
                    <br>
                    Recommended : {{ review.recommend  }}
                </li>
            </ul>
        </div>`
})
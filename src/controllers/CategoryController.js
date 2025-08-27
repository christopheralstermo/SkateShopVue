import Header from "../components/Header.vue";

export default {
    name: 'CategoryPage',
    components: {Header},
    props: {
        category: {
            type: String,
            required: true
        }
    }
};
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import axios from 'axios';

export default {
    name: 'DeckPage',
    components: { Header, Footer },
    data() {
        return {
            decks: []
        };
    },
    mounted() {
        this.fetchDecks();
    },
    methods: {
        async fetchDecks() {
            try {
                const response = await axios.get('http://localhost:5022/api/products/decks');
                this.decks = response.data;
            } catch (error) {
                console.error('Feil ved henting av decks:', error);
            }
        }
    }
};
import '../style/FrontPage.css';
import Header from "../components/Header.vue";

export default {
    name: 'FrontPage',
    components: {Header},
    data() {
        return {
            categories: ['Caps', 'Briller', 'Genser/Jakke', 'T-skjorte', 'Bukse', 'Sko', 'Skateboard'],
            activeCategory: null,
            gender: 'male'
        };
    },
    computed: {
        currentImage() {
            if (!this.gender) return null;
            if (!this.activeCategory) {
                return this.gender === 'female'
                    ? new URL('../images/femaleskate/femaleskate.jpg', import.meta.url).href
                    : new URL('../images/maleskate/maleskate.jpg', import.meta.url).href;
            }
            const images = {
                female: {
                    Caps: new URL('../images/femaleskate/femaleskate.jpg', import.meta.url).href,
                    Briller: new URL('../images/femaleskate/femaleskate.jpg', import.meta.url).href,
                    'Genser/Jakke': new URL('../images/femaleskate/femaleskate.jpg', import.meta.url).href,
                    'T-skjorte': new URL('../images/femaleskate/femaleskate.jpg', import.meta.url).href,
                    Bukse: new URL('../images/femaleskate/femaleskate.jpg', import.meta.url).href,
                    Sko: new URL('../images/femaleskate/femaleskate.jpg', import.meta.url).href,
                    Skateboard: new URL('../images/femaleskate/femaleskate.jpg', import.meta.url).href
                },
                male: {
                    Caps: new URL('../images/maleskate/maleskatehat.jpg', import.meta.url).href,
                    Briller: new URL('../images/maleskate/maleskateglasses.jpg', import.meta.url).href,
                    'Genser/Jakke': new URL('../images/maleskate/maleskatejacket.jpg', import.meta.url).href,
                    'T-skjorte': new URL('../images/maleskate/maleskatetee.jpg', import.meta.url).href,
                    Bukse: new URL('../images/maleskate/maleskatepants.jpg', import.meta.url).href,
                    Sko: new URL('../images/maleskate/maleskateshoes.jpg', import.meta.url).href,
                    Skateboard: new URL('../images/maleskate/maleskateboard.jpg', import.meta.url).href
                }
            };
            return images[this.gender][this.activeCategory] || images[this.gender]['Skateboard'];
        }
    },
    methods: {
        setActiveCategory(category) {
            this.activeCategory = category;
        },
        navigateToCategory(category) {
            const route = category.toLowerCase().replace('/', '-');
            this.$router.push(`/${route}`);
        }
    }
};
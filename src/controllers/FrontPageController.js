import '../style/FrontPage.css';

export default {
    name: 'FrontPage',
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
                    ? new URL('../images/female_skateboard.png', import.meta.url).href
                    : new URL('../images/maleskate.jpg', import.meta.url).href;
            }
            const images = {
                female: {
                    Caps: new URL('../images/female_caps.png', import.meta.url).href,
                    Briller: new URL('../images/female_briller.png', import.meta.url).href,
                    'Genser/Jakke': new URL('../images/female_genserjakke.png', import.meta.url).href,
                    'T-skjorte': new URL('../images/female_tskjorte.png', import.meta.url).href,
                    Bukse: new URL('../images/female_bukse.png', import.meta.url).href,
                    Sko: new URL('../images/female_sko.png', import.meta.url).href,
                    Skateboard: new URL('../images/female_skateboard.png', import.meta.url).href
                },
                male: {
                    Caps: new URL('../images/maleskatehat.jpg', import.meta.url).href,
                    Briller: new URL('../images/maleskateglasses.jpg', import.meta.url).href,
                    'Genser/Jakke': new URL('../images/maleskatejacket.jpg', import.meta.url).href,
                    'T-skjorte': new URL('../images/maleskatetee.jpg', import.meta.url).href,
                    Bukse: new URL('../images/maleskatepants.jpg', import.meta.url).href,
                    Sko: new URL('../images/maleskateshoes.jpg', import.meta.url).href,
                    Skateboard: new URL('../images/maleskateboard.jpg', import.meta.url).href
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
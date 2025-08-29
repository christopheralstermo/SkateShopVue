import '../style/FrontPage.css';
import '../style/SkateboardPage.css';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    name: 'SkateboardPage',
    components: {Header, Footer},
    data() {
        return {
            components: ['Bearings', 'Wheels', 'Trucks', 'Decks', 'Nuts', 'Griptape'],
            activeComponent: null,
            currentFrame: -1,
            totalFrames: 92,
            animationInterval: null,
            targetFrames: {
                Bearings: 0,
                Wheels: 9,
                Trucks: 24,
                Decks: 23,
                Nuts: 69,
                Griptape: 70
            },
            lastFrame: 0
        };
    },
    computed: {
        currentImage() {
            if (this.currentFrame === -1) {
                return new URL('../images/skateboard/start.png', import.meta.url).href;
            }
            const frame = this.currentFrame.toString().padStart(2, '0');
            console.log(`Loading: ../images/skateboard/frame_${frame}_delay-0.03s.png`);
            return new URL(`../images/skateboard/frame_${frame}_delay-0.03s.png`, import.meta.url).href;
        }
    },
    methods: {
        navigate(component) {
            if (component == 'Decks'){
                this.$router.push('/decks');
            }
        },
        startAnimation(component) {
            this.activeComponent = component;
            const targetFrame = this.targetFrames[component];
            let direction = 1;

            if (this.lastFrame > 0) {
                this.currentFrame = this.lastFrame;
                if (this.lastFrame > targetFrame) {
                    direction = -1;
                }
            } else if (this.currentFrame === -1) {
                this.currentFrame = 0; // Hopper til 0 etter bearings.png
            }

            this.stopAnimation();
            this.animationInterval = setInterval(() => {
                console.log(`Current frame: ${this.currentFrame}, Component: ${component}, Direction: ${direction}`);
                if (direction === 1 && this.currentFrame >= targetFrame) {
                    this.currentFrame = targetFrame;
                    this.stopAnimation();
                } else if (direction === -1 && this.currentFrame <= targetFrame) {
                    this.currentFrame = targetFrame;
                    this.stopAnimation();
                } else {
                    this.currentFrame += direction;
                }
            }, 5);
        },
        stopAnimation() {
            if (this.animationInterval) {
                clearInterval(this.animationInterval);
                this.animationInterval = null;
            }
            this.lastFrame = this.currentFrame;
            this.activeComponent = null;
        }
    },
    beforeUnmount() {
        this.stopAnimation();
    }
};
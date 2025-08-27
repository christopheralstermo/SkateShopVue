import '../style/FrontPage.css';
import '../style/SkateboardPage.css';

export default {
    name: 'SkateboardPage',
    data() {
        return {
            components: ['Bearings', 'Wheels', 'Trucks', 'Deck', 'Nuts', 'Griptape'],
            activeComponent: null,
            currentFrame: -1, // Starter på -1 for å vise bearings.png først
            totalFrames: 92,
            animationInterval: null,
            targetFrames: {
                Bearings: 0,
                Wheels: 9,
                Trucks: 24,
                Deck: 23,
                Nuts: 69,
                Griptape: 70
            },
            lastFrame: 0
        };
    },
    computed: {
        currentImage() {
            if (this.currentFrame === -1) {
                console.log('Loading initial: ../images/skateboard/bearings.png');
                return new URL('../images/skateboard/start.png', import.meta.url).href;
            }
            const frame = this.currentFrame.toString().padStart(2, '0');
            console.log(`Loading: ../images/skateboard/frame_${frame}_delay-0.03s.png`);
            return new URL(`../images/skateboard/frame_${frame}_delay-0.03s.png`, import.meta.url).href;
        }
    },
    methods: {
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
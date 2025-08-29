tsParticles.load("tsparticles", {
    fullScreen: false,
    background: {
        color: "#0d0d0d" // 背景色，可与main.css一致
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 80, // 粒子数量
            density: {
                enable: true,
                area: 800
            }
        },
        color: {
            value: "#ffffff" // 粒子颜色
        },
        shape: {
            type: "circle" // 粒子形状
        },
        opacity: {
            value: 0.8
        },
        size: {
            value: { min: 2, max: 5 }
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
        },
        links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                quantity: 4
            }
        }
    },
    detectRetina: true
});

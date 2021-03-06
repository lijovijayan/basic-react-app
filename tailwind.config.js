module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                card: {
                    shadow: '#020c1bb3'
                }
            }
        }
    },
    content: ['./public/index.html', './src/*.tsx', './src/*.scss'],
    variants: {
        extend: {}
    },
    plugins: []
}

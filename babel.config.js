// babel.config.js
module.exports = {
    presets: [
        '@babel/preset-env',   // For modern JavaScript features
        '@babel/preset-react', // For React (JSX) support
    ],
    plugins: [
        '@babel/plugin-proposal-optional-chaining', // If using optional chaining
        '@babel/plugin-transform-runtime', // If using async/await or other features
    ],
};

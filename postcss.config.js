import tailwindcss from 'tailwindcss';
import tailwindcssPostcss from '@tailwindcss/postcss';

export default {
    plugins: [
        tailwindcssPostcss(tailwindcss),
        require('autoprefixer'),
    ],
};
// extends the default theme with custom colors, and includes the autoprefixer plugin.
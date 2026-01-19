
/**
 * Generates a smart placeholder image URL or returns the provided URL.
 * 
 * @param {string} url - The user-provided URL (optional).
 * @param {string} prompt - Text to display on the placeholder (optional).
 * @param {object} theme - The current theme object used for colors.
 * @param {object} dimensions - { w: number, h: number } dimensions for the placeholder.
 * @returns {string} - The effective image URL.
 */
export const getEffectiveImage = (url, prompt, theme, dimensions = { w: 600, h: 400 }) => {
    if (url && url.length > 5) { // Basic check for potentially valid URL
        return url;
    }

    const { w, h } = dimensions;
    const text = prompt || 'Image';

    // Use theme primary color if available, strip hash
    const bg = theme && theme.primaryColor ? theme.primaryColor.replace('#', '') : 'cccccc';
    const fg = 'ffffff'; // White text usually works well on brand colors

    return `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(text)}`;
};

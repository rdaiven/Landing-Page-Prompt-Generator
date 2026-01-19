/**
 * Calculate the relative luminance of a RGB color
 */
const getLuminance = (r, g, b) => {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/**
 * Convert hex to RGB
 */
const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 }; // default to black if invalid
}

/**
 * Get the best contrast color (black or white) for a given hex background color.
 * @param {string} hexColor - The background color in hex format (e.g., #ffffff)
 * @returns {string} - '#000000' or '#ffffff'
 */
export const getContrastColor = (hexColor) => {
    if (!hexColor) return '#ffffff';

    const rgb = hexToRgb(hexColor);
    const luminance = getLuminance(rgb.r, rgb.g, rgb.b);

    // Threshold can be adjusted (standard is 0.179 for AA text, but 0.5 is a common simple split)
    // Darker backgrounds have lower luminance.
    return luminance > 0.5 ? '#0f172a' : '#ffffff';
}

/**
 * Lighten or darken a color
 * @param {string} col - Hex color
 * @param {number} amt - Amount to change (-100 to 100)
 */
export const adjustColor = (col, amt) => {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

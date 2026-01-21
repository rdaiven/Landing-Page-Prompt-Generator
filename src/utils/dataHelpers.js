import { sectionConfigs } from './sectionConfig'

/**
 * Merges user's field data with default values from the config
 * Returns data with defaults filled in for any empty fields
 */
export const getDataWithDefaults = (sectionKey, layout, userData) => {
    const config = sectionConfigs[sectionKey]
    if (!config || !config.layouts[layout]) {
        return userData
    }

    const layoutConfig = config.layouts[layout]
    const mergedData = { ...userData }

    // Fill in defaults for any empty fields
    if (layoutConfig.fields) {
        layoutConfig.fields.forEach(field => {
            if (!mergedData[field.name] && field.default) {
                mergedData[field.name] = field.default
            }
        })
    }

    // Also check for defaultData in the layout
    if (layoutConfig.defaultData) {
        Object.keys(layoutConfig.defaultData).forEach(key => {
            if (!mergedData[key]) {
                mergedData[key] = layoutConfig.defaultData[key]
            }
        })
    }

    return mergedData
}

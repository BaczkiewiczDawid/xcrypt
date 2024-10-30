export const getData = async (url: string, options?: { [key: string]: any }) => {
    try {
        const URL = `${url}${options ? "?" : ""}${options ? Object.entries(options).map(([key, value]) => `${key}=${value}`).join("&") : ""}`

        const response = await fetch(URL)

        return response.json()
    } catch (error) {
        console.error(error)
    }
}
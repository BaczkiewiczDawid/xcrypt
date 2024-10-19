export const getData = async (url: string, options) => {
  console.log(`${url}?${Object.entries(options).map(([key, value]) => `${key}=${value}`).join("&")}`);

  try {

    const response = await fetch(`${url}?${Object.entries(options).map(([key, value]) => `${key}=${value}`).join("&")}`)

    return response.json()
  } catch (error) {
    console.error(error)
  }
}
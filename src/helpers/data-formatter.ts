type Format = "money" | "percent"

export const dataFormatter = (value: string | number, format: Format) => {
  switch (format) {
    case "money":
      return `$${value}`
    case "percent":
      return `${value}%`
    default:
      return `${value}`
  }
}
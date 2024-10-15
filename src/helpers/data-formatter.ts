type Format = "money" | "percent"

export const dataFormatter = (value: string | number, format: Format) => {
  switch (format) {
    case "money":
      return `$${Number(value).toFixed(2)}`
    case "percent":
      return `${Number(value).toFixed(2)}%`
    default:
      return `${value}`
  }
}
import Papa from "https://cdn.skypack.dev/papaparse@5.3.0";

//Llamar datos desde Fetch: Retorna csv
// de https://docs.google.com/spreadsheets/d/e/2PACX-1vRNLMXZylwjMEHQQFY4-C6ue1nlwXZ5-7ny5M3nKpFOx_M72tFUaZ2yl86JqmD43PNvk1X1xGM7pxKK/pub

const API = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRNLMXZylwjMEHQQFY4-C6ue1nlwXZ5-7ny5M3nKpFOx_M72tFUaZ2yl86JqmD43PNvk1X1xGM7pxKK/pub?gid=0&single=true&output=csv"


export const myData = async () => {
  try {
    const csv = await (await fetch(API)).text()
    const json = Papa.parse(csv, { header: true })
    //console.log(json.data)
    return json.data
  } catch (error) {
    console.log(error.message)
  }

}

export default myData
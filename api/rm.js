module.exports = async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`)

    const path = url.pathname.replace("/api/rm", "")
    const search = url.search

    const finalUrl = `https://rickandmortyapi.com/api${path}${search}`

    console.log("Fetching:", finalUrl)

    const response = await fetch(finalUrl)
    const data = await response.json()

    res.status(200).json(data)

  } catch (error) {
    console.error("ERROR BACKEND:", error)
    res.status(500).json({ error: "Error fetching data" })
  }
}

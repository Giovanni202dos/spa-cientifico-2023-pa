module.exports = async (req, res) => {
  try {
    const originalUrl = req.url

    // quitar /api/rm del inicio
    const endpoint = originalUrl.replace(/^\/api\/rm/, "")

    const finalUrl = `https://rickandmortyapi.com/api${endpoint}`

    console.log("Fetching:", finalUrl)

    const response = await fetch(finalUrl)
    const data = await response.json()

    res.status(200).json(data)

  } catch (error) {
    console.error("ERROR BACKEND:", error)
    res.status(500).json({ error: "Error fetching data" })
  }
}

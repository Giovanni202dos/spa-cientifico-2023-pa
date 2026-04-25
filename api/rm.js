module.exports = async (req, res) => {
  const query = req.url.replace("/api/rm", "")
  const url = `https://rickandmortyapi.com/api${query}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" })
  }
}

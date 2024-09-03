exports.read = (req, res) => {
  const sensorId = req.params.id
  const measurement = req.params.measurement

  console.log('sensor-->', { sensorId, measurement })

  if (!sensorId || !measurement) {
    return res.status(400).send({
      error: 'Sensor ID y Measurement son requeridos.',
    })
  }

  res.send({
    message: `Lectura del dispositivo con ID ${sensorId} y medición ${measurement}.`,
  })
}

const apiAdapter = require('../../apiAdapter');
const { URL_SERVICE_MEDIAS } = process.env;

const api = apiAdapter(URL_SERVICE_MEDIAS);

module.exports = async (req, res) => {
  try {
    const medias = await api.post('/medias', req.body);
    return res.json(medias.data);
  } catch (error) {

    if (error.code === 'ECONNREFUSED'){
        return res.status(500).json({
            status: 'error',
            message: 'service unavailable'
        })
    }
      const { status, data } = error.response;
      return res.status(status).json(data);
  }
};

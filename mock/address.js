const uuid = require("uuid");

const addressList = [];

function getAddressList(req, res) {
  return res.json(addressList);
}

function addAddress(req, res) {
  let address = req.body;
  address._id = uuid.v4();
  addressList.push(address);
  return res.json(address);
}

export default {
  'GET /api/address': getAddressList,
  'POST /api/address': addAddress,
};

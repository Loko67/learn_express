function prepareUser(rawUser) {

  return {
    "firstName": rawUser.firstName,
    "lastName": rawUser.lastName,
    "id": rawUser.id
  }

}

module.exports = prepareUser
const JolocomLib = require('jolocom-lib')
const crypto = require('crypto')

const seed = crypto.randomBytes(32)
const password = 'secret'

const vaultedKeyProvider = JolocomLib.KeyProvider.fromSeed(seed, password)
const encryptedSeed = vaultedKeyProvider.encryptedSeed
console.log(encryptedSeed)
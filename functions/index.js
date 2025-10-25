// functions/index.js
const {setGlobalOptions} = require("firebase-functions/v2");          // v2 options
const {onRequest} = require("firebase-functions/v2/https");           // v2 https
const logger = require("firebase-functions/logger");                   // use or remove
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});                          // no spaces per eslint

admin.initializeApp();
setGlobalOptions({maxInstances: 10});

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;
      res.status(200).send({count});                                   // no spaces per eslint
    } catch (error) {
      logger.error("Error counting books:", {message: error.message});  // satisfies 'logger' usage
      res.status(500).send("Error counting books");
    }
  });
});

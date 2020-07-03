
const { Transaction } = require('../models')

class ChartController {
  static getChart(req, res) {
    let session = req.session.userId
    res.render('chart', { session })
  }
  /**
   * CREATE VIEW best_seller AS
      SELECT Name ,
        count(*) AS "Total"
      FROM NAMES
      GROUP BY Name;

      SELECT
        	*
        FROM
	    best_seller
      ORDEr BY Total DESC
      LIMIT 5;
   */
}

module.exports = ChartController
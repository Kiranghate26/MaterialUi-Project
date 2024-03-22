// app.js
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./dbConn');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// invoice_amount_total_usd

app.get('/api/total_ar_to_customer', async (req, res) => {
    // SELECT customer_name, SUM(invoice_amount_total_usd) AS total_invoice_amount_total_usd FROM mvue_beta.ar_data GROUP BY customer_name;
  try {
    const { rows } = await pool.query('SELECT customer_name,SUM(invoice_amount_total_usd) AS total_invoice_amount_total_usd FROM mvue_beta.ar_data WHERE invoice_amount_total_usd IS NOT NULL GROUP BY customer_name ORDER BY total_invoice_amount_total_usd DESC LIMIT 15;');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.get('/api/total_invoice_amount', async (req, res) => {
  // SELECT customer_name, SUM(invoice_amount_total_usd) AS total_invoice_amount_total_usd FROM mvue_beta.ar_data GROUP BY customer_name;
try {
  const { rows } = await pool.query('SELECT SUM(invoice_amount_total) AS total_invoice_amount FROM mvue_beta.ap_invoices WHERE payment_due_date IS NOT null AND TO_DATE(payment_due_date, \'YYYY-MM-DD\') IS NOT null AND DATE_PART(\'year\', TO_DATE(payment_due_date, \'YYYY-MM-DD\')) = 2023;');
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).send('Server Error');
}
});

app.get('/api/total_balance_amount', async (req, res) => {
  // SELECT customer_name, SUM(invoice_amount_total_usd) AS total_invoice_amount_total_usd FROM mvue_beta.ar_data GROUP BY customer_name;
try {
  const { rows } = await pool.query("SELECT SUM(invoice_balance_total) FROM mvue_beta.ar_invoices  WHERE payment_due_date >= '2023-01-01' AND payment_due_date < '2024-01-01' AND invoice_balance_total IS NOT NULL AND invoice_balance_total != 0.0; ");
  res.json(rows);
} catch (error) {

   
  console.error(error);
  res.status(500).send('Server Error');
}
});


app.get('/api/projected_receivables', async (req, res) => {
  // SELECT customer_name, SUM(invoice_amount_total_usd) AS total_invoice_amount_total_usd FROM mvue_beta.ar_data GROUP BY customer_name;
try {
  const { rows } = await pool.query("select TO_CHAR(CAST(payment_due_date AS DATE ),'YYYY-MM') AS MonthYear,SUM(payment_amount_due) AS MonthlySum from  mvue_beta.ap_data where payment_due_date IS NOT null AND payment_amount_due IS NOT null AND CAST (payment_due_date AS DATE) >= current_date AND CAST (payment_due_date AS DATE) <current_date + INTERVAL '3 months' GROUP by TO_CHAR(CAST(payment_due_date AS DATE), 'YYYY-MM') ORDER by MonthYear;");
  res.json(rows);
} catch (error) {
  console.error(error);
  res.status(500).send('Server Error');
}
});

app.post('/api/items', async (req, res) => {
  const { name } = req.body;

  try {
    const { rows } = await pool.query('INSERT INTO items(name) VALUES($1) RETURNING *', [name]);
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

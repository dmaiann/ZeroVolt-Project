import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const [rows] = await db.query(`
    SELECT products.id, products.name, products.price, products.tag,
           categories.name AS category
    FROM products
    JOIN categories ON products.category_id = categories.id
  `);
  res.json(rows);
});

export default router;

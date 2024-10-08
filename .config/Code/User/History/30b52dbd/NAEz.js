const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {const allCategories = await Category.findAll({
    include: [{ model: Product }],
  });
  res.status(200).json(allCategories);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
try { const allCategories = await Category.findByPk(req.params.id, {
  include: [{ model: Product }],
  });
  if (!allCategories) {
    res.status(404).json({ message: 'That id is not associated with a category'});
    return;
  }
  res.status(200).json(allCategories); 
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Shirt', 'pants'];
  res.send(categories);
});

export default handler;
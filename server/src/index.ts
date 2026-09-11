import app from './app';

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

app.listen(PORT, () => {
  console.log(`[server]: TeamFlow backend running on port ${PORT}`);
});

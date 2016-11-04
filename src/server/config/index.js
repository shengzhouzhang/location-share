import env from 'dotenv';

env.load();

const CONFIG = {
  PORT: parseInt(process.env.PORT, 10),
};

export default CONFIG;

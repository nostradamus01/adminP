import * as dotenv from 'dotenv'
dotenv.config()
import { MongoClient, ServerApiVersion } from "mongodb";
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://pkukcwunhienbdkwdtiw.supabase.co", process.env.SUPABASE_KEY);

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const defaultPort = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

const connect = async (callback) => {
  try {
    await client.connect();
    await callback();
  } catch (e) {
    // handle error
  } finally {
    await client.close();
  }
}

const login = async (body) => {
  let data = {};
  await connect(async () => {
    try {
      const { username, password } = body;
      const user = await client.db('MainDB').collection('Users').find().toArray();
      if (user[0].username === username && user[0].password === password) {
        data = {
          success: true
        }
      } else {
        data = {
          success: false
        }
      }
    } catch (e) {
      // handle error
    }
  });
  return data;
}
const addPlatform = async (body) => {
  let result = {};
  const { data } = body;
  const { error } = await supabase
        .from('platforms')
        .insert({ cpu: data.cpu, gpu: data.gpu, chipset: data.chipset });
        console.log(error);
  // await connect(async () => {
  //   try {
  //     
      
  //     // const {chipset, gpu, cpu} = data;
  //     // await client.db('MainDB').collection('Platforms').insertOne(data);
  //     result.message = 'Hajoxutyamb avelacrecinq'
  //   } catch (e) {
  //     // handle error
  //   }
  // });
  return result;
}
const getPlatforms = async (body) => {
  let data = {};
  await connect(async () => {
    try {
      // const {chipset, gpu, cpu} = data;
      const platforms = await client.db('MainDB').collection('Platforms').find().toArray();
      // console.log(platforms);
      data.platforms = platforms;
    } catch (e) {
      // handle error
    }
  });
  return data;
}



const emptyFn = async () => ({
  message: 'Action not found'
})

const doAction = async (action, body) => {
  let fn = emptyFn;
  switch (action) {
    case 'login':
      fn = login;
      break;
    case 'getPhones':
      fn = getPhones;
      break;
    case 'getColors':
      fn = getColors;
      break;
    case 'addPlatform':
      fn = addPlatform;
      break;
    case 'getPlatforms':
      fn = getPlatforms;
      break;
  }

  return await fn(body);
}

app.post('/api', async (req, res) => {
  let data = {},
    statusCode = 200;

  const { action } = req.body;

  if (typeof action === 'string' && action !== '') {
    data = await doAction(action, req.body);
    if (!data || typeof data !== 'object') {
      data = {
        message: 'Something wrong',
      }
      statusCode = 500;
    } else if (data.statusCode) {
      statusCode = data.statusCode;
    }
  } else {
    data.message = 'Action is missing';
    statusCode = 200;
  }

  res.status(statusCode).send(data);
});

app.listen(defaultPort, () => {
  console.log('Server is live...');
});
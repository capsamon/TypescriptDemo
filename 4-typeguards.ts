import { Router } from 'express';

Router().use('/test', (req, res) => {
  const body = req.body;

  if (!isValidBody(body)) {
    return res.sendStatus(400);
  }

  // body is now typed!
  body.property1;

  return res.sendStatus(200);
});

function isValidBody(body: any): body is TestBody {
  //valideer of body aanwezig is en of juiste properties aanwezig zijn
  return true;
}

interface TestBody {
  property1: string;
  property2: number;
}

//You can ignore this error
import { Router } from 'express';

Router().use('/test', (req, res) => {
  const body = req.body;
  body.property1;
  body.property1.additional;

  if (!isValidBody(body)) {
    return res.sendStatus(400);
  }

  //Body is now typed!
  body.property1;
  body.property1.additional;

  return res.sendStatus(200);
});

function isValidBody(body: any): body is TestBody {
  //Validate here if the body is in the correct format
  return true;
}

interface TestBody {
  property1: string;
  property2: number;
}

let callReceived;


const logging = (req, res, next) => {
  callReceived = new Date();
  const today = new Date();
  console.log('----------------')

  console.log('Date: ', today.toUTCString());
  console.log('Method: ', req.method)
  console.log('Original URL: ', req.originalUrl);
  console.log('Params: ', req.params);
  console.log('Query: ', req.query)
  next()
}

const loggingTwo = (req, res, next) => {
  console.log('Called TailLog')
  const tailDate = new Date();
  const timeElapsed = tailDate - callReceived;
  console.log('Time Elapsed: ', timeElapsed)
  next()
}

export { logging, loggingTwo };
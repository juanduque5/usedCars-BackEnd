const handleSignin = (req, res, db, bcrypt) => {
    const { email, password } = req.body;
    // const hash = bcrypt.hashSync(password);
  
    if (!email || !password) {
      return res.status(400).json('incorrect');
    }
  
    db.select('hash', 'email')
      .from('login')
      .where('email', '=', email)
      .then(data => {
        const isValid = bcrypt.compareSync(password, data[0].hash);
  
        if (isValid) {
          return db
            .select('*')
            .from('users')
            .where('email', '=', email)
            .then(user => {
              console.log('User found:', user[0]);
              res.json(user[0]);
            })
            .catch(err => {
              console.log('Error retrieving user:', err);
              res.status(400).json('unable to get user');
            });
        } else {
          res.status(400).json('Wrong Credentials');
        }
      })
      .catch(err => {
        console.log('Error retrieving credentials:', err);
        res.status(400).json('unable to get credentials');
      });
  };
  
  module.exports = {
    handleSignin: handleSignin
  };
  
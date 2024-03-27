
const handleRegister = (req, res, db, bcrypt) => {
    const { email, name, password } = req.body;
    const hash = bcrypt.hashSync(password);

    if(!email || !name || !password){
        return res.status(400).json('incorrect');
    }
  
    db.transaction(function (trx) {
      db('login')
        .transacting(trx)
        .insert({
          hash: hash,
          email: email,
        })
        .returning('email')
        .then(loginEmail => {
          console.log('Inserted into "login" table:', loginEmail);
  
          db('users')
            .transacting(trx)
            .insert({
              email: loginEmail[0].email,
              name: name,
              joined: new Date(),
            })
            .returning('*')
            .then(user => {
              console.log('Inserted into "users" table:', user);
              res.json(user[0]);
            })
            .catch(error => {
              console.log('Error inserting into "users" table:', error);
              throw error;
            });
        })
        .catch(error => {
          console.log('Error inserting into "login" table:', error);
          throw error;
        })
        .then(trx.commit)  
        .catch(trx.rollback);
    })
      .then(() => {
        console.log('Transaction committed successfully');
      })
      .catch(error => {
        console.log('Transaction rollback:', error);
        res.status(400).json('User already exists');
      });
  }

  module.exports = {
    handleRegister: handleRegister
  }
   
const supabase = require('../config/supabase');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const { error } = await supabase
    .from('users')
    .insert([{ name, email, password: hashedPassword }]);

  if (error)
    return res.status(400).json({ message: error.message });

  res.status(201).json({ message: 'User registered successfully' });
};


 const User = require("../model/user");

const postUser = async (req, res) => {
  const {
    employId,
    name,
    email,
    phone,
    password,
    gender,
    projectName,
    currentJob,
    experience,
    address1,
    city,
    state,
  } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({
      employId,
      name,
      email,
      phone,
      password,
      gender,
      projectName,
      currentJob,
      experience,
      address1,
      city,
      state,
    });

    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { postUser };

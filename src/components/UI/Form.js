import React, { Component } from 'react';
// import express from 'express';
import NodeMailer from 'nodemailer';

// const app = express();
// const router = express.Router();
const transporter = NodeMailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'watchamacollin@gmail.com',
    pass: 'Whadew102',
  },
});
// app.use('/about', router);
// router.post('/', transporter);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    transporter.sendMail({
      from: `${this.state.email}`,
      to: 'watchamacollin@gmail.com',
      subject: `${this.state.name} is contacting me from colinrjohnson.com`,
      text: `${this.state.message}`,
    }, (error, info) => {
      (error) ? console.log(error) : console.log(`message sent: ${info.response}`);
      // transporter.close();
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="form-name">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            id="form-name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-email">Email</label>
          <input
            type="email"
            className="form-control"
            id="form-email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-message">Whats on your mind?</label>
          <textarea
            className="form-control"
            type="text"
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
            id="form-message"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => this.handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;

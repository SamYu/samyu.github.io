import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { appStyles } from '../utils/appStyles';
import { Typography } from '@material-ui/core';



const styles = theme => ({
    contact: {
        ...appStyles.section,
        width: '60vw',
        paddingTop: 100,
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            width: '80vw',
            textAlign: 'center',
        },
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
    },
    button: {
        width: '200px',
        marginTop: '10px',
        alignSelf: 'center',
    },
    subheader: {
        marginTop: '20px',
    }
})

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        }
    }

    submitForm(ev) {
        console.log('breakpoint')
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }

    render() {
        const classes = this.props.classes;
        return (
            <div id="Contact" className={classes.contact}>
                <Typography variant="h1">
                    CONTACT
                </Typography>
                <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/xnqqyybr"
                    method="POST"
                >
                    <div className={classes.formWrapper}>
                        <Typography className={classes.subheader} variant="h3">
                            I'd love to connect with you! Send me a message below!
                        </Typography>
                        {this.state.status === "ERROR" && (
                            <Typography
                                className={classes.subheader}
                                style={{
                                    color: 'red',
                                }}
                                variant="h3"
                            >
                                Something went wrong while submitting your form. Please try again.
                            </Typography>
                        )}
                        <TextField
                            error={this.state.status === "ERROR"}
                            required
                            label="Your Name"
                            className={classes.textField}
                            name="name"
                            margin="normal"
                        />
                        <TextField
                            required
                            error={this.state.status === "ERROR"}
                            type="email"
                            label="Email Address"
                            name="email"
                            className={classes.textField}
                            margin="normal"
                        />
                        <TextField
                            type="tel"
                            error={this.state.status === "ERROR"}
                            label="Phone Number"
                            className={classes.textField}
                            name="phone"
                            margin="normal"
                        />
                        <TextField
                            required
                            error={this.state.status === "ERROR"}
                            multiline
                            label="Message"
                            rows="4"
                            className={classes.textField}
                            name="message"
                            margin="normal"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<Icon className="far fa-paper-plane"/>}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);

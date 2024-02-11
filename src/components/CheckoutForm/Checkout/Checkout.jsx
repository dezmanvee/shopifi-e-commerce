import { useState } from "react";
import { Paper, Stepper, Step, StepLabel, Typography, Divider, Button, CircularProgress } from "@mui/material"
import { green } from "@mui/material/colors"
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles"

const steps = ['Shipping Address', 'Payment Details']

const Checkout = () => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0)

    const Form = () => {
        return activeStep === 0 ? <AddressForm /> : <PaymentForm />
    }

    const Confirmation = () => {
        return (<div>
                Confirmation
              </div>
            )
    }

  return (
    <>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center" color={green[800]}>Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
            </Paper>
        </main>
    </>
  )
}
export default Checkout
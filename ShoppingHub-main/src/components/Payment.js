import {useForm} from 'react-hook-form'
import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Payment() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
    });

    const loadScript = (src) => {
        return new Promise((resovle) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resovle(true);
            };

            script.onerror = () => {
                resovle(false);
            };

            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async (paymentObj) => {
        console.log(paymentObj)
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        let amount=paymentObj.amount
        if (!res) {
            alert("You are offline... Failed to load Razorpay SDK");
            return;
        }

        const options = {
            key: "rzp_test_MChgICeTf23XHC",
            currency: "INR",
            amount: amount * 100,
            name: "MARPU",
            description: "Thanks for purchasing",
            image:
                "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

            handler: function (response) {
                alert("Payment Successfully",response.razorpay_payment_id);
            
            },
            prefill: {
                name: "MARPU",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    return (
        <div className="App">
           
           <Form onSubmit={handleSubmit(displayRazorpay)}>
                        
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Donor"
                            className="mb-3 formlabel"
                        >
                            <Form.Control type="text" placeholder="Donor" {...register("donor", { required: true })} />
                            {errors.donor && <p className='text-danger'>*required</p>}
                        </FloatingLabel>


                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Intern"
                            className="mb-3 formlabel"
                        >
                            <Form.Control type="text" placeholder="Intern" {...register("intern", { required: true })} />
                            {errors.intern && <p className='text-danger'>*required</p>}
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Amount"
                            className="mb-3 formlabel"
                        >
                            <Form.Control type="number" placeholder="Amount" {...register("amount", { required: true })} />
                            {errors.amount && <p className='text-danger'>*required</p>}
                        </FloatingLabel>

                        <Button className="button" type="submit">
                            Donate Now
                        </Button>  
                    </Form>
        </div>
    );
}

export default Payment;
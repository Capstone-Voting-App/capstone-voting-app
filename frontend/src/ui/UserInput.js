import React from "react";
import {Form} from "react-bootstrap";


export const UserInput = () => {
    return (
        <>
         <Form>
            <Form.Label htmlFor="Ideas"><strong>Input Your Idea</strong></Form.Label>
            <Form.Control
                type="ideas"
                id="ideas"/>
         </Form>
        </>
    )
}
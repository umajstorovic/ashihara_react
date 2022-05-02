import React, {useContext} from "react";
import classes from './AuthForm.module.css';
import {useForm} from "react-hook-form";

import * as endpoints from '../const/Endpoints.js';
import AuthContext from "../store/auth-context";

const AuthForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
            defaultValues: {
                username: "",
                password: "",
            }
        }
    );

    const authCtx = useContext(AuthContext);

    return (
        <section className={classes.auth}>
            <form onSubmit={handleSubmit((data) => {
                console.log(data.username);
                fetch(endpoints.authenticate, {
                    method: 'POST',
                    body: JSON.stringify({
                        username: data.username,
                        password: data.password,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => {
                    if (res.ok) {
                        // console.log(res);
                        // console.log(res.json().token);
                        // authCtx.login(res.token);
                        res.json()
                            .then(response => {
                                console.log(response);
                                authCtx.login(response.token);
                                console.log(response.token);

                                console.log(authCtx.isLoggedIn);
                            });
                    } else {
                        console.log("error");
                    }
                })
            })}>
                <div className={classes.control}>
                    <input {...register("username", {required: "This is required"})} placeholder="Username"/>
                    <p>{errors.username?.message}</p>
                </div>
                <div className={classes.control}>
                    <input {...register("password", {required: "This is required"})} placeholder="Password"/>
                    <p>{errors.password?.message}</p>
                </div>
                <div className={classes.actions}>
                    <input type="submit" className={classes.actions}/>
                </div>
            </form>
        </section>
    );
}

export default AuthForm;
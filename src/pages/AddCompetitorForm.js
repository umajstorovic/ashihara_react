import React, {useContext} from "react";
import classes from "./AuthForm.module.css";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import MainNavigation from "../components/layout/MainNavigation";
import AuthContext from "../store/auth-context";
import * as endpoints from '../const/Endpoints.js';

const AddCompetitorPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
            defaultValues: {
                competitorName: "",
                gender: "",
                age: "",
                fightClass: "",
                weight: "",
                competitorClub: "",
                country: "",
            }
        }
    );

    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <section>
            <MainNavigation/>
            <form onSubmit={handleSubmit((data) => {
                {
                    console.log(authCtx.token);
                    fetch(endpoints.competitors, {
                        method: 'POST',
                        body: JSON.stringify({
                            nameSurname: data.competitorName,
                            gender: data.gender,
                            age: data.age,
                            fightClass: data.fightClass,
                            weight: data.weight,
                            country: data.country,
                            club: data.club,
                            actualWeight: data.competitorWeight,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": 'Bearer ' + authCtx.token
                        },
                    }).then((res) => {
                        if (res.ok) {
                            res.json()
                                .then(response => {
                                    navigate('/home');
                                });
                        }
                    })
                }
            })}>
                <div className={classes.control}>
                    <input {...register("competitorName", {required: "Enter competitor name"})}
                           placeholder="Competitor name"/>
                    <p>{errors.competitorName?.message}</p>
                </div>
                <div className={classes.control}>
                    <select className={`w-96 rounded-lg text-3xl ${errors.gender &&
                    " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                            {...register("fightClass", {required: "Select Fight Class"})} placeholder="Fight Class">
                        <option value=''>--Select Fight Class--</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>
                <div>
                    {errors.fightClass && <span>{errors.fightClass?.message}</span>}
                </div>
                <div className={classes.control}>
                    <select {...register("age", {required: "Select age"})} placeholder="Age">
                        <option value=''>--Select Age--</option>
                        <option value="Junior">junior</option>
                        <option value="Cadet">cadet</option>
                        <option value="Senior">senior</option>
                    </select>
                </div>
                <div>
                    {errors.age && <span>{errors.age?.message}</span>}
                </div>
                <div className={classes.control}>
                    <select {...register("gender", {required: "Select gender"})} placeholder="Gender">
                        <option value=''>--Select gender--</option>
                        <option value="Male">female</option>
                        <option value="Female">male</option>
                    </select>
                </div>
                <div>
                    {errors.gender && <span>{errors.gender?.message}</span>}
                </div>
                <div className={classes.control}>
                    <select {...register("weight", {required: "Select weight"})} placeholder="Weight">
                        <option value=''>--Select weight--</option>
                        <option value="60-65">60-65</option>
                        <option value="65-70">65-70</option>
                        <option value="70-75">70-75</option>
                    </select>
                </div>
                <div>
                    {errors.weight && <span>{errors.weight?.message}</span>}
                </div>
                <div className={classes.control}>
                    <div className={classes.control}>
                        <input {...register("competitorClub", {required: "Enter club name"})}
                               placeholder="Competitor club"/>
                        <p>{errors.competitorClub?.message}</p>
                    </div>
                </div>
                <div className={classes.control}>
                    <select {...register("country", {required: "Select country"})} placeholder="Fight Class">
                        <option value=''>--Select country--</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                    </select>
                </div>
                <div>
                    {errors.country && <span>{errors.country?.message}</span>}
                </div>
                <div className={classes.control}>
                    <div className={classes.control}>
                        <input {...register("competitorWeight", {required: "Enter weight"})}
                               placeholder="Competitor weight"/>
                        <p>{errors.competitorWeight?.message}</p>
                    </div>
                </div>
                <div className={classes.actions}>
                    {/*<input type="submit" className='w-2/5 h-10 rounded-lg bg-blue-700'/>*/}
                    <input type="submit" className={classes.actions}/>
                </div>
            </form>
        </section>
    )
}

export default AddCompetitorPage;
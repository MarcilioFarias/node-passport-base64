import { Request, Response } from "express";
import {sequelize} from "../instances/connection";
import { modelData } from "../models/mariadbModel";

export const ping = (req: Request, res: Response) => {

    res.json({pong: true});
}

export const list = async (req: Request, res: Response) => {
    const listData = await modelData.findAll();

    res.json({listData});
}

export const mainR = async (req:Request, res:Response) => {
    

    res.send({status: true});
};

export const login = async (req: Request, res: Response) => {

    res.json({status: true});
}


import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';

export const getDepartment = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM department ORDER BY id ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getDepartmentById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM department WHERE id = $1', [id]);
    return res.json(response.rows);
};

export const addDepartment = async (req: Request, res: Response) => {
    const { name, employees } = req.body;
    if (name && employees) {
        const response = await pool.query('INSERT INTO department (name, employees) VALUES ($1, $2)', [name, employees]);
        return res.json({
            message: 'Department Added successfully',
            body: {
                Department: { name, employees }
            }
        })

    } else {
        res.json({
            error: "Error in adding Department"
        });
    }

};

export const updateDepartment = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, employees } = req.body;

    if (name && employees) {
        
        const response = await pool.query('UPDATE department SET name = $1, employees = $2 WHERE id = $3', [
            name,
            employees,
            id
        ]);
        return res.json('Department Updated Successfully');
    } else {
        res.json({
            "error": "Error in Updating"
        });
    }

};

export const removeDepartment = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM department where id = $1', [
        id
    ]);
    res.json(`Department ${id} deleted Successfully`);
};
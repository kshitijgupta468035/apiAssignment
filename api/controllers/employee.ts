import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';

export const getEmployee = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM employee ORDER BY id ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getEmployeeById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM employee WHERE id = $1', [id]);
    return res.json(response.rows);
};

export const addEmployee = async (req: Request, res: Response) => {
    const { name, email, age, salary, department } = req.body;
    if (name && email && age && salary && department) {
        const response = await pool.query('INSERT INTO employee (name, email, age, salary, department) VALUES ($1, $2, $3, $4, $5)', [name, email, age, salary, department]);
        return res.json({
            message: 'Employee Added successfully',
            body: {
                Employee: { name, email, age, salary, department }
            }
        });

    } else {
        res.json({
            error: "Error in adding Employee."
        });
    }

};

export const updateEmployee = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, email, age } = req.body;
    if (name && email && age) {
        const response = await pool.query('UPDATE employee SET name = $1, email = $2, age = $3 WHERE id = $4', [
            name,
            email,
            age,
            id
        ]);
        return res.json('Employee Updated Successfully');

    } else {
        return res.json({
            error: "Error in Updating."
        })
    }

};

export const removeEmployee = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM employee where id = $1', [
        id
    ]);
    res.json(`Employee ${id} deleted Successfully`);
};
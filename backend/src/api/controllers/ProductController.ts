// src/api/controllers/ProductController.ts
import { Request, Response } from "express";
import { ProductService } from "../../services/ProductService";

const productService = new ProductService();


export const getAllProducts = async(req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
    } catch(error) {
        res.status(500).json()
    }
}



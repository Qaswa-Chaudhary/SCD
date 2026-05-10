import { BlogService } from "./blog.service";
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getAllBlogs(): string;
    getSingleBlog(id: string): string;
    saveBlog(email: string, password: string): string;
    updateBlog(id: string): string;
    deleteBlog(id: string): string;
}

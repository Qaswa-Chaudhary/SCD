import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {

  getAllBlogs() {
    return "Get all from service";
  }

  getSingleBlog(id: string) {
    return "Get single from service id = " + id;
  }

  createBlog() {
    return "Post from service";
  }

  updateBlog(id: string) {
    return "Put from service id = " + id;
  }

  deleteBlog(id: string) {
    return "Delete from service id = " + id;
  }

  save(email:string, password:string) {
      return "hello from service" + email + password;
      }
}
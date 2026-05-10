import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BlogService } from 'src/blog/blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  getAllBlogs() {
    return this.blogService.getAllBlogs();
  }

  @Get(':id')
  getSingleBlog(@Param('id') id: string) {
    return this.blogService.getSingleBlog(id);
  }

  @Post()
  saveBlog(
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    console.log(email + password);   // pehle log
    return this.blogService.save(email, password); // phir return
  }

  @Put(':id')
  updateBlog(@Param('id') id: string) {
    return this.blogService.updateBlog(id);
  }

  @Delete(':id')
  deleteBlog(@Param('id') id: string) {
    return this.blogService.deleteBlog(id);
  }
}
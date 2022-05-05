using Microsoft.AspNetCore.Mvc;

namespace dotnet_react_basic_template.Controllers;

[ApiController]
[Route("[controller]")]
public class BlogsController : ControllerBase {

    [HttpGet]
    public IEnumerable<Blog> Get()
    {
        using (var db = new BloggingContext())
        {
            var blogs = db.Blogs
                .OrderBy(b => b.BlogId);
            return blogs.ToList<Blog>();
        }
    }

    [HttpGet]
    [Route("{id}")]
    public Blog Get(int id)
    {
        Console.WriteLine($"getting blog id = {id}");
        using (var db = new BloggingContext())
        {
            var blog = db.Blogs
                .Where(b => b.BlogId == id)
                .FirstOrDefault<Blog>();
            if (blog == null)
            {
                throw new NotImplementedException("not implemented");
            }
            return blog;
        }

    }

    [HttpGet]
    [Route("{bid}/posts")]
    public IEnumerable<Post> GetBlogPosts(int bid)
    {
        using (var db = new BloggingContext())
        {
            var posts = db.Posts
                .Where(p => p.BlogId == bid)
                .ToList();
            if (posts.Count == 0)
            {
                throw new NotImplementedException("not implemented");
            }
            return posts;
        }
    }

    [HttpPost]
    [Route("{bid}/posts")]
    public Post CreatePost(int bid, Post post)
    {
        Console.WriteLine("TODO: POST blog/post");
        throw new NotImplementedException("Not implemented");
    }

    [HttpDelete]
    [Route("{bid}/posts/{pid}")]
    public Post DeletePost(int bid, int pid)
    {
        Console.WriteLine("TODO: DELETE blog/post");
        throw new NotImplementedException("Not implemented");
    }
}
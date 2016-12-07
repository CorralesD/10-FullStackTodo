using System;
using System.Collections.Generic;
using System.Data.Entity;
using VSTDA.Api.Models;
using System.Linq;
using System.Web;

namespace VSTDA.Api.Infrastructure
{
    public class PostDataContext : DbContext
    {
        public PostDataContext() : base("Post")
        {

        }

        public IDbSet<Post> Posts { get; set; }
    }

}
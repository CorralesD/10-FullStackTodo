using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VSTDA.Api.Models
{
    public class Post
    {
        public int PostId { get; set; }
        public string Text { get; set; }
        public int Priority { get; set; }
    }
}
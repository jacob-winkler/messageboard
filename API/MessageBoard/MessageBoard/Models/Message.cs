using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MessageBoard.Models
{
    public class Message
    {
        public Guid Id { get; set; }

        public Guid AuthorId { get; set; }

        public Guid GroupId { get; set; }

        public DateTimeOffset DateCreated { get; set; }

        public string Value { get; set; }
    }
}

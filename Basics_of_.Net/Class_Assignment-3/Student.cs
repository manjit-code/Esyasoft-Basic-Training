using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataStructure
{
    internal class Student    {
        public string name;
        public int id, marks;
        public Student(int id, string name,int marks)
        {
            this.id = id;
            this.name = name;
            this.marks = marks;
        }
    }
}

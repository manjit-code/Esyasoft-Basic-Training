using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Banking_Application
{
    internal class User
    {
        public string name, mobileNumber, panCard, accountType, aadharNumber, accountNumber;
        public int currentAmount, currPIN;

        public User(string name, string mobileNumber, string panCard, string accountType, string aadharNumber, string accountNumber, int currPIN)
        {
            this.name = name;
            this.mobileNumber = mobileNumber;
            this.panCard = panCard;
            this.accountType = accountType;
            this.aadharNumber = aadharNumber;
            this.accountNumber = accountNumber;
            this.currPIN = currPIN;
            this.currentAmount = 0;
        }
    }
}

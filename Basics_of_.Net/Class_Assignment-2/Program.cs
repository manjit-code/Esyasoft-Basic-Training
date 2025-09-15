using System.Xml.Linq;

namespace Banking_Application
{
    internal class Program
    {
        public static User currentUser;
        static void Main(string[] args)
        {
            homePage();
        }

        static void homePage()
        {
            while (true)
            {
                Console.WriteLine("Welcome to our Banking System.");
                Console.WriteLine("Select Transaction Option You want to do: ");
                Console.WriteLine("1. Create a new bank account");
                Console.WriteLine("2. Deposit Money");
                Console.WriteLine("3. Withdraw Money");
                Console.WriteLine("4. Display");
                Console.WriteLine("5. Exit \n");

                Console.Write("Choose Option: ");
                int inputOption = Convert.ToInt32(Console.ReadLine());
                if (inputOption == 1) createAccount();
                else if (inputOption == 2) deposit();
                else if (inputOption == 3) withdraw();
                else if (inputOption == 4) displayAccount();
                else if (inputOption == 5)
                {
                    exit();
                    return;
                }
                else
                {
                    Console.WriteLine("Invalid option. Please try again.");
                }
            }
        }
        static void createAccount()
        {
            string name, mobileNumber, panCard, accountType, aadharNumber, accountNumber;
            int currPIN;
            Console.WriteLine("Enter Name: ");
            name = Console.ReadLine();
            Console.WriteLine("Enter Aadhar Number: ");
            aadharNumber = Console.ReadLine();
            Console.WriteLine("Enter PAN Number: ");
            panCard = Console.ReadLine();
            Console.WriteLine("Enter Mobile Number: ");
            mobileNumber = Console.ReadLine();
            Console.WriteLine("Choose Account Type: \n" +
                "1. Saving Account \n" +
                "2. Salary Account \n" +
                "3. Business Account\n");
            int inpType = Convert.ToInt32(Console.ReadLine());
            if (inpType == 3) accountType = "Business Account";
            else if (inpType == 2) accountType = "Salary Account";
            else accountType = "Saving Account";
            Console.Write("Set A PIN: ");
            currPIN = Convert.ToInt32(Console.ReadLine());
            accountNumber = "12345678910";

            currentUser = new User(name, mobileNumber, panCard, accountType, aadharNumber, accountNumber, currPIN);
            Console.WriteLine(
                "Congaratulation !! \n" +
                "You created a new Bank Account at SBI\n" +
                "Your Account Number is:" + currentUser.accountNumber +
                "\nYour Account Type: " + currentUser.accountType +
                "\nYour Current Balance is:" + currentUser.currentAmount + 
                "\n"
            );


            Console.WriteLine("Would You like to Deposite Money: \n" +
                "1. YES\n" +
                "2. EXIT\n"
                );

            int optionX = Convert.ToInt32(Console.ReadLine());
            if (optionX == 1) deposit();
            else exit();
        }

        static void deposit()
        {
            int tempPIN;
            string tempAccountNumber;
            (tempAccountNumber, tempPIN) = displayAccount();

            if (tempAccountNumber == currentUser.accountNumber && tempPIN == currentUser.currPIN)
            {
                

                Console.WriteLine("Enter Ammount You want to Insert: ");
                int moneyAdd = Convert.ToInt32(Console.ReadLine());

                currentUser.currentAmount += moneyAdd;

                Console.WriteLine("Transaction Completed !");
            }
            else
            {
                Console.WriteLine("Your Account Number or Your Password is Wrong !!.");
            }
        }

        static void withdraw()
        {
            int tempPIN;
            string tempAccountNumber;

            (tempAccountNumber, tempPIN) = displayAccount();

            if (tempAccountNumber == currentUser.accountNumber && tempPIN == currentUser.currPIN)
            {
                Console.WriteLine("Your Account Number:" + currentUser.accountNumber);
                Console.WriteLine("Your Account Type: " + currentUser.accountType);
                Console.WriteLine("Your Current Balance: " + currentUser.currentAmount);
                Console.WriteLine();

                Console.WriteLine("Enter Ammount You want to Withdraw: ");
                int moneyDebit = Convert.ToInt32(Console.ReadLine());

                if(moneyDebit > currentUser.currentAmount)
                {
                    Console.WriteLine("Insufficient Balance !");
                    return;
                }

                currentUser.currentAmount -= moneyDebit;
                Console.WriteLine("Transaction Completed !");
            }
            else
            {
                Console.WriteLine("Your Account Number or Your Password is Wrong !!.");
            }
        }

        static (string tempAccountNumner, int tempPIN) displayAccount()
        {
            if (currentUser == null)
            {
                Console.WriteLine("Please create an account first.");
                return ("", 0);
            }

            int tempPIN;
            string tempAccountNumber;
            Console.WriteLine("Enter Your Account Number: ");
            tempAccountNumber = Console.ReadLine();

            Console.WriteLine("Enter Your Account PIN: ");
            tempPIN = Convert.ToInt32(Console.ReadLine());

            if (tempAccountNumber == currentUser.accountNumber && tempPIN == currentUser.currPIN)
            {
                Console.WriteLine("Your Account Number:" + currentUser.accountNumber);
                Console.WriteLine("Your Account Type: " + currentUser.accountType);
                Console.WriteLine("Your Current Balance: " + currentUser.currentAmount);
                Console.WriteLine();
                return (tempAccountNumber, tempPIN);
            }
            else Console.WriteLine("Incorrect Credentials");
            return ("",0);
        }

        static void exit()
        {
            Console.WriteLine("Thank You for doing transaction with us.");
        }


    }
}

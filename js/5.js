
function ftn() {

    var emp = [];

    for(var i=0; i<3; i++)
    {
        emp[i] = {
            name: prompt("Enter the Name of Employee " + (i+1)),
            age: prompt("Enter the Age of Employee " + (i+1)),
            salary: prompt("Enter the Salary of Employee " + (i+1)),
            dob: prompt("Enter the DOB of Employee " + (i+1))
        }
    }




    document.getElementById("t1").innerHTML = emp[0].name;
    document.getElementById("t2").innerHTML = emp[0].age;
    document.getElementById("t3").innerHTML = emp[0].salary;
    document.getElementById("t4").innerHTML = emp[0].dob;
    document.getElementById("t5").innerHTML = emp[1].name;
    document.getElementById("t6").innerHTML = emp[1].age;
    document.getElementById("t7").innerHTML = emp[1].salary;
    document.getElementById("t8").innerHTML = emp[1].dob;
    document.getElementById("t9").innerHTML = emp[2].name;
    document.getElementById("t10").innerHTML = emp[2].age;
    document.getElementById("t11").innerHTML = emp[2].salary;
    document.getElementById("t12").innerHTML = emp[2].dob;

    for(var j=0; j<3; j++)
    {
        if(emp[j].salary > 5000)
        {
            document.getElementById("part2").innerHTML = emp[j].name + ", " + (document.getElementById("part2").innerHTML);
        }
        
        if(emp[j].age < 31)
        {
            document.getElementById("ta").innerHTML = emp[j].name + ", " + (document.getElementById("ta").innerHTML);
        }
        else if(emp[j].age > 30 && emp[j].age < 61)
        {
            document.getElementById("tb").innerHTML = emp[j].name + ", " + (document.getElementById("tb").innerHTML);
        }
        else
        {
            document.getElementById("tc").innerHTML = emp[j].name + ", " + (document.getElementById("tc").innerHTML);
        }
        
        if(emp[j].salary < 1000 && emp[j].age > 20)
        {
            document.getElementById("part41").innerHTML = "Name: " + emp[j].name + " " + "Salary: " + emp[j].salary + ", " + (document.getElementById("part41").innerHTML);
        }

        if(emp[j].salary < 1000 && emp[j].age > 20)
        {
            document.getElementById("part42").innerHTML = "Name: " + emp[j].name + " " + "Salary: " + (emp[j].salary*5) + ", " + (document.getElementById("part42").innerHTML);
        }
    }
}
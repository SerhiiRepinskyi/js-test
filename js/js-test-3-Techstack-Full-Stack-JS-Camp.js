function calculateTeamFinanceReport(salaries, team) {
  const report = {
    totalBudgetTeam: 0,
  };

  // Функція розрахунку зарплати з податком
  function calculateTotalSalaryWithTax(salary, taxPercent) {
    const tax = parseFloat(taxPercent);
    const grossSalary = (salary * 100) / (100 - tax);
    return grossSalary;
  }

  // Ітерація команди
  team.forEach((member) => {
    const { specialization } = member;

    // Якщо спеціалізація існує в об'єкті зарплати
    if (salaries[specialization]) {
      const { salary, tax } = salaries[specialization];
      const totalSalaryWithTax = calculateTotalSalaryWithTax(salary, tax);

      // Додати до конкретного бюджету спеціалізації
      const specializationKey = `totalBudget${specialization}`;
      if (!report[specializationKey]) {
        report[specializationKey] = 0;
      }
      report[specializationKey] += totalSalaryWithTax;

      // Додати до загального бюджету команди
      report.totalBudgetTeam += totalSalaryWithTax;
    }
  });

  // Усічення дробових частин для всіх сум у звіті
  Object.keys(report).forEach((key) => {
    report[key] = Math.trunc(report[key]);
  });

  return report;
}

const salaries1 = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};
const team1 = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];
const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
console.log(JSON.stringify(financeReport1));
/* see in console
{
   "totalBudgetTeam":4590, // total budget does not match the sum of specializations due to truncation of the fractional part
   "totalBudgetManager":1111,
   "totalBudgetDesigner":1714,
   "totalBudgetArtist":1764,
}
*/

const salaries2 = {
  TeamLead: { salary: 1000, tax: "99%" },
  Architect: { salary: 9000, tax: "34%" },
};
const team2 = [
  { name: "Alexander", specialization: "TeamLead" },
  { name: "Gaudi", specialization: "Architect" },
  { name: "Koolhas", specialization: "Architect" },
  { name: "Foster", specialization: "Architect" },
  { name: "Napoleon", specialization: "General" },
];
const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
console.log(JSON.stringify(financeReport2));
/* see in console
{"totalBudgetTeam":140909,"totalBudgetTeamLead":100000,"totalBudgetArchitect":40909}
*/

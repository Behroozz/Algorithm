// Replace an Exception with a test

let array = [1,2,3]

function getValueFromArray(index) {
  try {
    return arr[index]
  } catch(ex) {
   throw new Error('Array out of bound exception') 
  }
}

// ==>

const getValueFromArray = (index) => index > arr.length ? -1 : arr[index]


// Decompose Conditional

if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
  charge = quantity * plan.summerRate;
else
  charge = quantity * plan.regularRate + plan.regularServiceCharge;

// -->

if (summer())
  charge = summerCharge();
else
  charge = regularCharge();


// Consolidate Conditional Expression
if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;

// --> 

if (isNotEligableForDisability()) return 0;

function isNotEligableForDisability() {
  return ((anEmployee.seniority < 2)
          || (anEmployee.monthsDisabled > 12)
          || (anEmployee.isPartTime));
}

// Replace constructor with Factory method
leadEngineer = new Employee(document.leadEngineer, 'E');
-->
leadEngineer = createEngineer(document.leadEngineer);






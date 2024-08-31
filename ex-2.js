// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEvent = true;
let isPlatinum = true;

let hasPromotion = true;

console.log(hasPromotion);

let CaseOne = lastMonthPaidMoreThan4000 && isWeekday && !(hasBoughtProductFromITCategory && hasAttendedDiscountEvent);
let CaseTwo = isPlatinum ;

hasPromotion = CaseOne || CaseTwo ;

let John = (lastMonthPaidMoreThan4000 && isWeekday && hasAttendedDiscountEvent) && !(hasBoughtProductFromITCategory && isPlatinum) ;

console.log (hasPromotion) ;
console.log(John);





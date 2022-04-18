function saturdayFun(name="roller-skate")
{
    return `This Saturday, I want to ${name}!`;
}
saturdayFun()
saturdayFun("bathe my dog")
function mondayWork(name="go to the office")
{
    return `This Monday, I will ${name}.`;
}
mondayWork("work from home")
mondayWork()
function wrapAdjective(operator="*") {
    return function (value="special") {
      return `You are ${operator}${value}${operator}!`;
    };
  }
wrapAdjective("%")("a hard worker");
wrapAdjective("||")("a dedicated programmer");
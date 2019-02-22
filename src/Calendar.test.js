import { Calendar } from 'calendar'

it('calendar test', () => {
    const cMon = new Calendar();
    const mdc = cMon.monthDays(2012, 1)
    for (let i = 0; i < mdc.length; i++) console.log(mdc[i]);

})
import { MONTHS, DAYS } from './DateConstants';

export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek).concat(DAYS.slice(0, dayInAWeek));
  return days;
}

export function getDayMonthFromDate() {
  const date = new Date();
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getDate();
  return `${day} ${month}`;
}

export function transformDateFormat() {
  const date = new Date();
  const month = date.toLocaleString('en-IN', { month: '2-digit', timeZone: 'Asia/Kolkata' });
  const day = date.toLocaleString('en-IN', { day: '2-digit', timeZone: 'Asia/Kolkata' });
  const year = date.toLocaleString('en-IN', { year: 'numeric', timeZone: 'Asia/Kolkata' });

  const time = date.toLocaleString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Kolkata',
  });

  return `${year}-${month}-${day} ${time}`;
}

export function getISTDatetime() {
  const date = new Date();
  return date.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });
}

export function getISTTime() {
  const date = new Date();
  return date.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });
}

import { DUMMY_NEWS } from "@/lib/dummy-news";
import dayjs from "dayjs";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years: number[], news) => {
    const year: number = dayjs(news.date).year();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number) {
  return DUMMY_NEWS.reduce((months: number[], news) => {
    const newsYear = dayjs(news.date).year();
    if (newsYear === year) {
      const month = dayjs(news.date).month();
      if (!months.includes(month)) {
        months.push(month);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number) {
  return DUMMY_NEWS.filter((news) => dayjs(news.date).year() === year);
}

export function getNewsForYearAndMonth(year: number, month: number) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = dayjs(news.date).year();
    const newsMonth = dayjs(news.date).month();
    return newsYear === year && newsMonth === month;
  });
}

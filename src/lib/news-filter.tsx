import { DUMMY_NEWS } from "@/lib/dummy-news";
import HDate from "@/lib/hdate";

export function getAllNews() {
  return DUMMY_NEWS.sort((n1, n2) => new HDate(n2.date).compareToStr(n1.date));
}

export function getLatestNews() {
  return getAllNews().slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years: number[], news) => {
    const year: number = new HDate(news.date).year;
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort();
}

export function getAvailableNewsMonths(year: number) {
  return DUMMY_NEWS.reduce((months: number[], news) => {
    const newsYear = new HDate(news.date).year;
    if (newsYear === year) {
      const month = new HDate(news.date).month;
      if (!months.includes(month)) {
        months.push(month);
      }
    }
    return months;
  }, []).sort();
}

export function getNewsForYear(year: number) {
  return DUMMY_NEWS.filter((news) => new HDate(news.date).year === year);
}

export function getNewsForYearAndMonth(year: number, month: number) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new HDate(news.date).year;
    const newsMonth = new HDate(news.date).month;
    return newsYear === year && newsMonth === month;
  });
}

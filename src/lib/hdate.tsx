export default class HDate {
  static getMonthName(month: number): string {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[month - 1];
  }

  day: number;
  month: number;
  year: number;

  constructor(dateString: string) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateString.match(dateRegex)) {
      throw new Error("Invalid date format. Expected 'YYYY-MM-DD'.");
    }

    const [year, month, day] = dateString.split("-").map(Number);

    this.year = year;
    this.month = month;
    this.day = day;
  }

  compareTo(other: HDate): number {
    if (this.year !== other.year) {
      return this.year - other.year;
    }
    if (this.month !== other.month) {
      return this.month - other.month;
    }
    return this.day - other.day;
  }

  compareToStr(other: string): number {
    const newHDate = new HDate(other);
    return this.compareTo(newHDate);
  }
}

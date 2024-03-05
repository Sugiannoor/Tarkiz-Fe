export const dateFormated = (dateStr: string) => {
    const day = new Date(dateStr);
    const m = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "May",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const str_op =
      day.getDate() + " " + m[day.getMonth()] + " " + day.getFullYear();
  
    return str_op;
  };